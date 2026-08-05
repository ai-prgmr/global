"use client";

import { ChatMessage } from "@/hooks/useConversation";
import { GraduationCap } from "lucide-react";

interface Props {
    message: ChatMessage;
}

export default function MessageBubble({ message }: Props) {
    const assistant = message.role === "assistant";

    // Helper to format basic bold markdown (**bold**) and line breaks
    function renderFormattedContent(content: string) {
        return content.split("\n").map((line, lineIdx) => {
            const parts = line.split(/(\*\*.*?\*\*)/g);
            return (
                <p key={lineIdx} className={lineIdx > 0 ? "mt-1.5" : ""}>
                    {parts.map((part, partIdx) => {
                        if (part.startsWith("**") && part.endsWith("**")) {
                            return (
                                <strong key={partIdx} className="font-semibold text-slate-900">
                                    {part.slice(2, -2)}
                                </strong>
                            );
                        }
                        return part;
                    })}
                </p>
            );
        });
    }

    return (
        <div
            className={`flex animate-in fade-in slide-in-from-bottom-2 duration-300 ${
                assistant ? "justify-start" : "justify-end"
            }`}
        >
            <div
                className={`flex max-w-[85%] gap-2.5 ${
                    assistant ? "" : "flex-row-reverse"
                }`}
            >
                {assistant && (
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-xs">
                        <GraduationCap size={16} />
                    </div>
                )}

                <div
                    className={`rounded-2xl px-4 py-2.5 text-sm leading-relaxed shadow-xs ${
                        assistant
                            ? "rounded-tl-xs bg-slate-100 text-slate-800 border border-slate-200/50"
                            : "rounded-tr-xs bg-blue-600 text-white"
                    }`}
                >
                    {assistant
                        ? renderFormattedContent(message.content)
                        : message.content}
                </div>
            </div>
        </div>
    );
}
"use client";

import { GraduationCap } from "lucide-react";

export default function TypingIndicator() {
    return (
        <div className="flex justify-start animate-fade-in">
            <div className="flex max-w-[85%] gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-xs">
                    <GraduationCap size={18} />
                </div>
                <div className="rounded-2xl rounded-tl-xs bg-slate-100 px-4 py-3 text-sm leading-7 text-slate-500 shadow-xs flex items-center gap-1.5">
                    <span className="text-xs font-medium text-slate-400">Compass Advisor typing</span>
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue-500" />
                    <span
                        className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue-500"
                        style={{ animationDelay: "150ms" }}
                    />
                    <span
                        className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue-500"
                        style={{ animationDelay: "300ms" }}
                    />
                </div>
            </div>
        </div>
    );
}
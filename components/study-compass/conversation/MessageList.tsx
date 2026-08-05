"use client";

import { ChatMessage } from "@/hooks/useConversation";
import { useAutoScroll } from "../hooks/useAutoScroll";
import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";

interface Props {
    messages: ChatMessage[];
    isTyping?: boolean;
}

export default function MessageList({
    messages,
    isTyping = false,
}: Props) {
    const scrollRef = useAutoScroll<HTMLDivElement>();

    return (
        <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto px-4 py-5 space-y-4"
        >
            <div className="mx-auto flex max-w-3xl flex-col gap-4">
                {messages.map((message) => (
                    <MessageBubble
                        key={message.id}
                        message={message}
                    />
                ))}

                {isTyping && <TypingIndicator />}
            </div>
        </div>
    );
}
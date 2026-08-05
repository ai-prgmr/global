"use client";

import { ChatMessage } from "@/hooks/useConversation";
import MessageList from "./MessageList";
import EmptyState from "./EmptyState";

interface Props {
    messages: ChatMessage[];
    started: boolean;
    isTyping?: boolean;
    onStart: () => void;
}

export default function Conversation({
    messages,
    started,
    isTyping = false,
    onStart,
}: Props) {
    if (!started) {
        return <EmptyState onStart={onStart} />;
    }

    return (
        <div className="flex h-full flex-col">
            <MessageList messages={messages} isTyping={isTyping} />
        </div>
    );
}
"use client";

import { ReactNode } from "react";

interface Props {
    header: ReactNode;
    progress: ReactNode;
    conversation: ReactNode;
    quickReplies?: ReactNode;
    input: ReactNode;
    footer: ReactNode;
}

export default function PanelLayout({
    header,
    progress,
    conversation,
    quickReplies,
    input,
    footer,
}: Props) {
    return (
        <div className="flex h-full flex-col bg-white">

            {header}

            {progress}

            <div className="min-h-0 flex-1 overflow-hidden">
                {conversation}
            </div>

            {quickReplies}

            {input}

            {footer}

        </div>
    );
}
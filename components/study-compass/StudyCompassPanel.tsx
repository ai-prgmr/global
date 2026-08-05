"use client";

import PanelLayout from "./layout/PanelLayout";
import Header from "./layout/Header";
import Conversation from "./conversation/Conversation";
import ProgressBar from "./conversation/ProgressBar";
import InputBar from "./conversation/InputBar";
import QuickReplies from "./conversation/QuickReplies";
import Footer from "./layout/Footer";
import { useConversation } from "@/hooks/useConversation";
import { CalendarCheck } from "lucide-react";

interface Props {
    open: boolean;
    onClose: () => void;
    conversation: ReturnType<typeof useConversation>;
}

export default function StudyCompassPanel({
    open,
    onClose,
    conversation,
}: Props) {
    const {
        started,
        messages,
        isTyping,
        quickReplies,
        allowFreeText,
        progress,
        leadScore,
        isComplete,
        start,
        send,
        restart,
    } = conversation;

    return (
        <aside
            className={`
                fixed
                right-0
                top-0
                z-[9998]
                h-screen
                w-full
                bg-white
                shadow-2xl
                transition-transform
                duration-300
                ease-out
                md:w-[430px]
                ${open ? "translate-x-0" : "translate-x-full"}
            `}
        >
            <PanelLayout
                header={
                    <Header
                        started={started}
                        onClose={onClose}
                        onRestart={restart}
                    />
                }
                progress={
                    started ? (
                        <ProgressBar progress={progress} leadScore={leadScore} />
                    ) : null
                }
                conversation={
                    <Conversation
                        messages={messages}
                        started={started}
                        isTyping={isTyping}
                        onStart={start}
                    />
                }
                quickReplies={
                    started && quickReplies.length > 0 ? (
                        <QuickReplies
                            options={quickReplies}
                            disabled={isTyping}
                            onSelect={send}
                        />
                    ) : null
                }
                input={
                    started ? (
                        <div className="flex flex-col">
                            {isComplete && (
                                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 text-center text-white">
                                    <p className="text-xs font-semibold">Ready for your expert consultation?</p>
                                    <a
                                        href="https://theglobalizers.com/contact-us/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-2 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-xs font-bold text-blue-700 shadow-sm transition hover:bg-blue-50"
                                    >
                                        <CalendarCheck size={14} />
                                        Book Free Consultation Now
                                    </a>
                                </div>
                            )}

                            <InputBar
                                disabled={isTyping}
                                allowFreeText={allowFreeText}
                                onSend={send}
                            />
                        </div>
                    ) : null
                }
                footer={<Footer />}
            />
        </aside>
    );
}
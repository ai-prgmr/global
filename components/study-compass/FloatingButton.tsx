"use client";

import { MessageCircle, X } from "lucide-react";

interface Props {
    open: boolean;
    onClick: () => void;
}

export default function FloatingButton({
    open,
    onClick,
}: Props) {
    return (
        <button
            onClick={onClick}
            className="
    fixed
    bottom-6
    right-6
    z-[9999]
    flex
    items-center
    gap-3
    rounded-full
    bg-blue-600
    px-5
    py-4
    text-white
    shadow-xl
    transition-all
    hover:scale-105
  "
        >
            <MessageCircle size={22} />

            <div className="text-left">
                <p className="text-sm font-semibold">
                    Study Compass
                </p>

                <p className="text-xs opacity-90">
                    Pre-Counselling
                </p>
            </div>
        </button>
    );
}
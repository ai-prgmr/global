"use client";

import { useState } from "react";
import FloatingButton from "./FloatingButton";
import StudyCompassPanel from "./StudyCompassPanel";
import { useConversation } from "@/hooks/useConversation";

export default function StudyCompass() {
    const [open, setOpen] = useState(false);
    const conversation = useConversation();

    return (
        <>
            <FloatingButton
                open={open}
                onClick={() => setOpen((v) => !v)}
            />

            <StudyCompassPanel
                open={open}
                onClose={() => setOpen(false)}
                conversation={conversation}
            />
        </>
    );
}
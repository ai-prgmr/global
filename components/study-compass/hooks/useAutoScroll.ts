"use client";

import { useEffect, useRef } from "react";

export function useAutoScroll<T extends HTMLElement>() {
    const ref = useRef<T>(null);

    useEffect(() => {
        if (!ref.current) return;

        const element = ref.current;

        element.scrollTo({
            top: element.scrollHeight,
            behavior: "smooth",
        });
    });

    return ref;
}
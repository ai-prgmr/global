"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "left" | "right" | "scale";
    duration?: number;
    threshold?: number;
    once?: boolean;
}

export default function Reveal({
    children,
    className,
    delay = 0,
    duration = 700,
    direction = "up",
    threshold = 0.15,
    once = true,
}: RevealProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) return;

        const element = ref.current;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    element.dataset.visible = "true";

                    if (once) observer.unobserve(element);
                } else if (!once) {
                    element.dataset.visible = "false";
                }
            },
            { threshold }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [once, threshold]);

    const directions = {
        up: `
      translate-y-8
      data-[visible=true]:translate-y-0
    `,
        left: `
      -translate-x-8
      data-[visible=true]:translate-x-0
    `,
        right: `
      translate-x-8
      data-[visible=true]:translate-x-0
    `,
        scale: `
      scale-95
      data-[visible=true]:scale-100
    `,
    };

    return (
        <div
            ref={ref}
            data-visible="false"
            className={cn(
                `
        opacity-0
        data-[visible=true]:opacity-100

        transition-all
        ease-out

        will-change-transform
        will-change-opacity
        `,
                directions[direction],
                className
            )}
            style={{
                transitionDuration: `${duration}ms`,
                transitionDelay: `${delay}ms`,
            }}
        >
            {children}
        </div>
    );
}
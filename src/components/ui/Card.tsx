"use client";

import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp, hoverLift } from "@/constants/motion";
import { MouseEvent } from "react";

interface CardProps {
    children: React.ReactNode;
    className?: string;
    animate?: boolean;
    hover?: boolean;
    spotlight?: boolean;
}

export function Card({ children, className, animate = true, hover = true, spotlight = true }: CardProps) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            initial={animate ? "initial" : undefined}
            whileInView={animate ? "animate" : undefined}
            whileHover={hover ? "hover" : undefined}
            viewport={{ once: true }}
            onMouseMove={spotlight ? handleMouseMove : undefined}
            variants={{
                ...fadeUp,
                ...(hover ? hoverLift : {}),
            }}
            className={cn(
                "group relative bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-sm overflow-hidden",
                className
            )}
        >
            {spotlight && (
                <motion.div
                    className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                    style={{
                        background: useMotionTemplate`radial-gradient(650px circle at ${mouseX}px ${mouseY}px, rgba(99, 102, 241, 0.1), transparent 80%)`,
                    }}
                />
            )}
            <div className="relative z-10">{children}</div>
        </motion.div>
    );
}

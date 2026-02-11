"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export function MagneticButton({ children, className }: { children: React.ReactNode; className?: string }) {
    const ref = useRef<HTMLButtonElement>(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const transition = { type: "spring", stiffness: 150, damping: 15, mass: 0.1 };

    const springX = useSpring(mouseX, transition);
    const springY = useSpring(mouseY, transition);

    const x = useTransform(springX, (val) => val * 0.4);
    const y = useTransform(springY, (val) => val * 0.4);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return;
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;

        mouseX.set(clientX - centerX);
        mouseY.set(clientY - centerY);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <motion.button
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x, y }}
            className={className}
        >
            {children}
        </motion.button>
    );
}

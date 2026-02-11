"use client";

import { motion } from "framer-motion";

export function Background() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            {/* Subtle Grid Pattern */}
            <div
                className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
                style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                    backgroundSize: '40px 40px',
                    color: 'inherit'
                }}
            />

            {/* Animated Blobs */}
            <motion.div
                animate={{
                    x: [0, 40, 0],
                    y: [0, -40, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute top-[-10%] left-[-10%] w-[40%] aspect-square bg-indigo-400/10 dark:bg-indigo-600/10 blur-[120px] rounded-full"
            />

            <motion.div
                animate={{
                    x: [0, -60, 0],
                    y: [0, 60, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute bottom-[-10%] right-[-10%] w-[50%] aspect-square bg-blue-400/10 dark:bg-blue-600/10 blur-[130px] rounded-full"
            />

            <motion.div
                animate={{
                    x: [0, 30, 0],
                    y: [0, 20, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute top-[20%] right-[10%] w-[30%] aspect-square bg-purple-400/5 dark:bg-purple-600/5 blur-[100px] rounded-full"
            />

            {/* Vignette effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-white/20 dark:from-black/20 dark:via-transparent dark:to-black/20" />
        </div>
    );
}

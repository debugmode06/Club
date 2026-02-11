"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, CheckCircle2, ChevronRight, Code2 } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { fadeUp } from "@/constants/motion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { cn } from "@/lib/utils";

const floatingTech = [
    { icon: "TS", className: "top-10 left-10 text-blue-500 bg-blue-500/10", delay: 0 },
    { icon: "NX", className: "bottom-20 left-20 text-white bg-black/80", delay: 1 },
    { icon: "FM", className: "top-20 right-20 text-indigo-500 bg-indigo-500/10", delay: 1.5 },
    { icon: "TW", className: "bottom-10 right-40 text-cyan-500 bg-cyan-500/10", delay: 0.5 },
];

export function Hero() {
    return (
        <section className="relative pt-32 pb-16 px-6 overflow-hidden">
            {/* Floating Tech Badges */}
            {floatingTech.map((tech, i) => (
                <motion.div
                    key={i}
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        delay: tech.delay,
                        ease: "easeInOut",
                    }}
                    className={cn(
                        "absolute hidden lg:flex w-12 h-12 rounded-2xl items-center justify-center font-black text-xs border border-white/5 shadow-2xl backdrop-blur-md z-0",
                        tech.className
                    )}
                >
                    {tech.icon}
                </motion.div>
            ))}

            <div className="container mx-auto max-w-4xl relative z-10">
                <Card className="p-8 md:p-12 shadow-xl border-neutral-100 dark:border-neutral-800">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                        <div className="flex-1 space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-full border border-green-100 dark:border-green-900/30">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                                <span className="text-xs font-bold uppercase tracking-wider">Registration Open</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight leading-tight">
                                Web & Mobile <br />
                                <span className="text-indigo-600 dark:text-indigo-400">Developer Club</span>
                            </h1>

                            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-xl leading-relaxed">
                                A high-performance community for student engineers to build production-grade applications together.
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 text-neutral-600 dark:text-neutral-400">
                                    <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
                                        <Calendar size={18} className="text-indigo-600 dark:text-indigo-400" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-medium text-neutral-400 dark:text-neutral-500">Period</p>
                                        <p className="text-sm font-bold">Feb - May 2024</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 text-neutral-600 dark:text-neutral-400">
                                    <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
                                        <MapPin size={18} className="text-indigo-600 dark:text-indigo-400" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-medium text-neutral-400 dark:text-neutral-500">Mode</p>
                                        <p className="text-sm font-bold">Offline / Hybrid</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="md:w-64 space-y-4">
                            <MagneticButton
                                className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-200 dark:shadow-none transition-all flex items-center justify-center gap-2 group"
                            >
                                Apply to Join
                                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </MagneticButton>

                            <div className="p-4 bg-neutral-50 dark:bg-neutral-800/50 rounded-xl space-y-3">
                                <p className="text-xs font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">Live Stats</p>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-neutral-600 dark:text-neutral-400">Applicants</span>
                                    <span className="font-bold">450+</span>
                                </div>
                                <div className="w-full bg-neutral-200 dark:bg-neutral-700 h-1 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "75%" }}
                                        transition={{ duration: 1.5, ease: "easeOut" }}
                                        className="bg-indigo-500 h-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    );
}

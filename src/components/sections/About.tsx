"use client";

import { motion } from "framer-motion";
import { Code2, Users2, Rocket, Laptop } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { fadeUp } from "@/constants/motion";
import { useState, useEffect } from "react";

const features = [
    {
        icon: Code2,
        title: "Build Projects",
        desc: "Collaborate on real-world web and mobile applications from concept to deployment.",
        color: "text-blue-600 bg-blue-50 dark:bg-blue-900/20"
    },
    {
        icon: Users2,
        title: "Networking",
        desc: "Connect with like-minded developers and industry mentors who actually build stuff.",
        color: "text-purple-600 bg-purple-50 dark:bg-purple-900/20"
    },
    {
        icon: Rocket,
        title: "Skill Up",
        desc: "Master modern frameworks like Next.js, Flutter, and React Native through hands-on workshops.",
        color: "text-orange-600 bg-orange-50 dark:bg-orange-900/20"
    },
    {
        icon: Laptop,
        title: "Showcase",
        desc: "Present your hard work at club demo days and get feedback from experienced devs.",
        color: "text-green-600 bg-green-50 dark:bg-green-900/20"
    }
];

const codeSnippet = `const community = {
  role: 'BUILDER',
  passions: ['CODE', 'DESIGN'],
  getInvolved: () => 'APPLY_NOW'
}`;

export function About() {
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            setDisplayText(codeSnippet.slice(0, i));
            i++;
            if (i > codeSnippet.length) clearInterval(timer);
        }, 50);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="about" className="py-24 px-6 bg-neutral-50/50 dark:bg-neutral-900/20 relative overflow-hidden">
            <div className="container mx-auto max-w-5xl relative z-10">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    <div className="flex-1 space-y-8">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight dark:text-white">
                            Why DevClub?
                        </h2>
                        <div className="space-y-6">
                            <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                The Web & Mobile Developer Club is more than just a regular student organization. We are a collective of builders, creators, and problem solvers.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                            {features.map((feature, idx) => (
                                <div key={idx} className="flex gap-4">
                                    <div className={`shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center ${feature.color}`}>
                                        <feature.icon size={24} />
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="font-bold tracking-tight dark:text-white">{feature.title}</h3>
                                        <p className="text-sm text-neutral-500 dark:text-neutral-500 leading-snug">
                                            {feature.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 w-full md:w-auto">
                        <Card className="p-2 border-dashed border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800/50 aspect-square flex items-center justify-center relative group" spotlight={false}>
                            {/* Abstract Dev Illustration */}
                            <div className="w-4/5 aspect-video bg-white dark:bg-neutral-900 rounded-xl shadow-2xl overflow-hidden border border-neutral-200 dark:border-neutral-700">
                                <div className="h-6 bg-neutral-100 dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700 flex items-center px-3 gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                                </div>
                                <div className="p-5 font-mono text-xs md:text-sm text-indigo-600 dark:text-indigo-400 whitespace-pre leading-relaxed">
                                    {displayText}
                                    <motion.span
                                        animate={{ opacity: [1, 0] }}
                                        transition={{ duration: 0.8, repeat: Infinity }}
                                        className="inline-block w-1.5 h-4 bg-indigo-500 ml-0.5 align-middle"
                                    />
                                </div>
                            </div>

                            {/* Decorative floating icon */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-4 -right-4 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-indigo-200 dark:shadow-none"
                            >
                                <Rocket size={20} />
                            </motion.div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import { staggerChildren, fadeUp } from "@/constants/motion";

const teamMembers = [
    { name: "John Doe", role: "Club President", image: "https://i.pravatar.cc/150?u=1" },
    { name: "Jane Smith", role: "Tech Lead", image: "https://i.pravatar.cc/150?u=2" },
    { name: "Alex Johnson", role: "Design Lead", image: "https://i.pravatar.cc/150?u=3" },
    { name: "Sarah Williams", role: "Community Manager", image: "https://i.pravatar.cc/150?u=4" },
    { name: "Mike Ross", role: "Backend Dev", image: "https://i.pravatar.cc/150?u=5" },
    { name: "Harvey Specter", role: "Mobile Dev", image: "https://i.pravatar.cc/150?u=6" },
];

export function Team() {
    return (
        <section className="py-24 px-6">
            <div className="container mx-auto max-w-4xl text-center">
                <h2 className="text-sm font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-[0.2em] mb-4">
                    Core Team
                </h2>
                <h3 className="text-3xl font-bold mb-16 dark:text-white">The people behind DevClub</h3>

                <motion.div
                    variants={staggerChildren}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-12"
                >
                    {teamMembers.map((member, idx) => (
                        <motion.div key={idx} variants={fadeUp} className="group flex flex-col items-center">
                            <div className="relative mb-4">
                                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-neutral-100 dark:border-neutral-800 p-1 group-hover:border-indigo-500 transition-colors">
                                    <div className="w-full h-full rounded-full bg-neutral-200 dark:bg-neutral-800 animate-pulse relative">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            onLoad={(e) => (e.currentTarget.parentElement?.classList.remove('animate-pulse'))}
                                        />
                                    </div>
                                </div>
                                {/* Social hover overlay */}
                                <div className="absolute inset-0 rounded-full flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity bg-indigo-600/10 backdrop-blur-sm pointer-events-none">
                                    {/* These could be links but keeping it visual for now */}
                                </div>
                            </div>
                            <h4 className="font-bold text-sm dark:text-white">{member.name}</h4>
                            <p className="text-[11px] text-neutral-500 dark:text-neutral-500 font-medium uppercase tracking-wider">{member.role}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

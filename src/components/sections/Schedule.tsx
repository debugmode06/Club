"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerChildren } from "@/constants/motion";

const scheduleData = [
    {
        date: "Feb 10",
        time: "10:00 AM",
        title: "Registration Opens",
        description: "Start your journey by applying for the club membership.",
        status: "done"
    },
    {
        date: "Feb 20",
        time: "02:00 PM",
        title: "Orientation Session",
        description: "Meet the team and understand the roadmap for the semester.",
        status: "upcoming"
    },
    {
        date: "Feb 25",
        time: "03:30 PM",
        title: "First Workshop",
        description: "Getting started with Next.js and Tailwind CSS.",
        status: "upcoming"
    },
    {
        date: "Mar 05",
        time: "09:00 AM",
        title: "Project Kickoff",
        description: "Formation of teams and selection of project ideas.",
        status: "upcoming"
    }
];

export function Schedule() {
    return (
        <section id="schedule" className="py-24 px-6 bg-neutral-50/50 dark:bg-neutral-900/20">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Schedule</h2>

                <motion.div
                    variants={staggerChildren}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="relative"
                >
                    {/* Timeline Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-neutral-200 dark:bg-neutral-800 -translate-x-1/2 hidden md:block" />

                    <div className="space-y-12">
                        {scheduleData.map((item, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeUp}
                                className={`relative flex flex-col md:flex-row gap-8 items-start ${idx % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full border-4 border-white dark:border-neutral-900 bg-indigo-500 -translate-x-1/2 z-10 hidden md:block" />

                                <div className={`flex-1 w-full md:w-auto ${idx % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                                    <div className="inline-block px-3 py-1 bg-white dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700 rounded-lg shadow-sm mb-4">
                                        <span className="text-indigo-600 dark:text-indigo-400 font-bold text-sm tracking-tight">{item.date}</span>
                                        <span className="mx-2 text-neutral-300">|</span>
                                        <span className="text-neutral-500 dark:text-neutral-500 text-sm">{item.time}</span>
                                    </div>
                                    <h3 className="text-xl font-extrabold text-neutral-900 dark:text-white mb-2">{item.title}</h3>
                                    <p className="text-neutral-600 dark:text-neutral-400 text-base leading-relaxed max-w-sm mx-0 md:ml-auto md:mr-0 inline-block">
                                        {item.description}
                                    </p>
                                </div>

                                <div className="hidden md:block flex-1" />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

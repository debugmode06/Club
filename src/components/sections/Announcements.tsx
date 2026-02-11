"use client";

import { motion } from "framer-motion";
import { Bell, ChevronRight, Clock } from "lucide-react";
import { Card } from "@/components/ui/Card";

const announcements = [
    {
        id: 1,
        title: "Project Kickoff: University Management System",
        date: "2 hours ago",
        category: "New Project",
        important: true
    },
    {
        id: 2,
        title: "Workshop: Advanced Animation with Framer Motion",
        date: "Yesterday",
        category: "Workshop",
        important: false
    },
    {
        id: 3,
        title: "Applications for Core Team are now officially open",
        date: "2 days ago",
        category: "Team",
        important: true
    }
];

export function Announcements() {
    return (
        <section id="notices" className="py-24 px-6">
            <div className="container mx-auto max-w-4xl">
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                            <Bell size={20} />
                        </div>
                        <h2 className="text-2xl font-bold dark:text-white">Announcements</h2>
                    </div>
                    <button className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline">
                        View all
                    </button>
                </div>

                <div className="space-y-4">
                    {announcements.length > 0 ? (
                        announcements.map((item) => (
                            <Card
                                key={item.id}
                                className="group cursor-pointer border-neutral-100 hover:border-indigo-200 dark:border-neutral-800 dark:hover:border-indigo-900 transition-colors"
                                hover={false}
                            >
                                <div className="p-5 flex items-center justify-between gap-4">
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded ${item.important ? "bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400" : "bg-neutral-100 text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400"
                                                }`}>
                                                {item.category}
                                            </span>
                                            <span className="text-xs text-neutral-400 dark:text-neutral-500 flex items-center gap-1">
                                                <Clock size={12} />
                                                {item.date}
                                            </span>
                                        </div>
                                        <h3 className="text-base font-bold text-neutral-800 dark:text-neutral-200 truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <ChevronRight size={20} className="text-neutral-300 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
                                </div>
                            </Card>
                        ))
                    ) : (
                        <div className="text-center py-20 border-2 border-dashed border-neutral-200 dark:border-neutral-800 rounded-2xl">
                            <p className="text-neutral-500">No announcements yet</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

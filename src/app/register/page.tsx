"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { fadeUp } from "@/constants/motion";
import { AlertCircle, ArrowLeft, Send } from "lucide-react";
import Link from "next/link";

export default function RegisterPage() {
    return (
        <div className="min-h-screen pt-32 pb-16 px-6 bg-neutral-50 dark:bg-neutral-950">
            <div className="container mx-auto max-w-2xl">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-indigo-600 dark:hover:text-indigo-400 mb-8 transition-colors group"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Overview
                </Link>

                <Card className="p-8 md:p-12 shadow-2xl border-neutral-100 dark:border-neutral-800">
                    <div className="space-y-8">
                        <div className="text-center space-y-2">
                            <h1 className="text-3xl font-extrabold dark:text-white">Club Registration</h1>
                            <p className="text-neutral-500 dark:text-neutral-400">
                                Join 500+ students building the future of web and mobile.
                            </p>
                        </div>

                        <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-900/30 rounded-xl flex gap-3">
                            <AlertCircle size={20} className="text-indigo-600 dark:text-indigo-400 shrink-0" />
                            <p className="text-sm text-indigo-900 dark:text-indigo-300">
                                Registration for the Spring 2024 cohort closes on <strong>Feb 15, 2024</strong>. Selected members will be notified via email.
                            </p>
                        </div>

                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-white"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">Student ID</label>
                                    <input
                                        type="text"
                                        placeholder="2024CS001"
                                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-white"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="john@university.edu"
                                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-white"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">Primary Interest</label>
                                <select className="w-full px-4 py-3 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-white appearance-none">
                                    <option>Web Development (Frontend/Backend)</option>
                                    <option>Mobile Development (React Native/Flutter)</option>
                                    <option>UI/UX Design</option>
                                    <option>DevOps & Cloud</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">Why do you want to join? (Max 200 words)</label>
                                <textarea
                                    rows={4}
                                    placeholder="Tell us about your passion for development..."
                                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-white resize-none"
                                />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-200 dark:shadow-none transition-all flex items-center justify-center gap-2"
                            >
                                Submit Application
                                <Send size={18} />
                            </motion.button>
                        </form>
                    </div>
                </Card>

                <p className="mt-8 text-center text-xs text-neutral-400 dark:text-neutral-500">
                    By submitting, you agree to our Code of Conduct and Privacy Policy.
                </p>
            </div>
        </div>
    );
}

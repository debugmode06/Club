"use client";

import { Card } from "@/components/ui/Card";
import { ShieldCheck } from "lucide-react";

const rules = [
    "Members must maintain a professional and respectful attitude towards peers.",
    "Projects initiated within the club must follow open-source guidelines unless specified otherwise.",
    "Regular attendance at workshops and meetings is encouraged for active membership status.",
    "Members should be willing to mentor newcomers and share knowledge.",
    "Academic integrity must be maintained; no plagiarism of code or projects.",
    "Use of club resources for personal or commercial profit without approval is prohibited.",
];

export function Rules() {
    return (
        <section id="rules" className="py-24 px-6 bg-neutral-900 text-white overflow-hidden relative">
            <div className="container mx-auto max-w-4xl relative z-10">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1 space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full border border-indigo-500/30">
                            <ShieldCheck size={16} />
                            <span className="text-xs font-bold uppercase tracking-wider">Guidelines</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Rules & Code of Conduct</h2>
                        <p className="text-neutral-400 leading-relaxed">
                            To ensure a productive and safe environment for all members, we adhere to a strict but fair set of guidelines. Professionalism is at our core.
                        </p>
                    </div>

                    <div className="flex-1 w-full">
                        <Card className="bg-neutral-800 border-neutral-700 p-8 shadow-2xl" hover={false}>
                            <ol className="space-y-6">
                                {rules.map((rule, idx) => (
                                    <li key={idx} className="flex gap-4">
                                        <span className="text-indigo-400 font-bold font-mono py-0.5">{`0${idx + 1}`}</span>
                                        <p className="text-sm text-neutral-300 leading-relaxed">{rule}</p>
                                    </li>
                                ))}
                            </ol>
                        </Card>
                    </div>
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] -mr-64 -mt-64" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] -ml-64 -mb-64" />
        </section>
    );
}

import Link from "next/link";
import { Github, Twitter, Linkedin, Instagram, Mail } from "lucide-react";

const footerLinks = [
    {
        title: "COMMUNITY",
        links: [
            { name: "Organize a project", href: "#" },
            { name: "Explore projects", href: "#" },
            { name: "Code of Conduct", href: "#" },
            { name: "Brand Assets", href: "#" },
            { name: "Documentation", href: "#" },
        ],
    },
    {
        title: "COMPANY",
        links: [
            { name: "About", href: "#" },
            { name: "Blog", href: "#" },
            { name: "Careers", href: "#" },
            { name: "Changelog", href: "#" },
            { name: "Privacy", href: "#" },
            { name: "Terms", href: "#" },
        ],
    },
    {
        title: "SUPPORT",
        links: [
            { name: "Guide", href: "#" },
            { name: "Status", href: "#" },
            { name: "Contact us", href: "#" },
        ],
    },
];

export function Footer() {
    return (
        <footer className="bg-white dark:bg-[#0a0a0a] border-t border-neutral-100 dark:border-neutral-900 pt-20 pb-12">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-12 mb-20 px-2">
                    {footerLinks.map((column) => (
                        <div key={column.title}>
                            <h3 className="text-[11px] font-bold text-neutral-400 dark:text-neutral-500 tracking-[0.15em] mb-6 uppercase">
                                {column.title}
                            </h3>
                            <ul className="space-y-3.5">
                                {column.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-[15px] font-medium text-neutral-600 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mb-14 px-2">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#171717] dark:text-white max-w-2xl leading-tight">
                        We love <span className="text-[#6366f1] dark:text-[#818cf8]">software</span> and the <span className="text-[#f59e0b] dark:text-[#fbbf24]">people</span> who build it.
                    </h2>
                </div>

                <div className="flex flex-wrap gap-5 mb-12 px-2">
                    <Link href="#" className="w-9 h-9 flex items-center justify-center text-neutral-400 hover:text-indigo-600 transition-colors border border-neutral-100 dark:border-neutral-800 rounded-lg bg-neutral-50 dark:bg-neutral-900/50">
                        <Mail size={18} />
                    </Link>
                    <Link href="#" className="w-9 h-9 flex items-center justify-center text-neutral-400 hover:text-black dark:hover:text-white transition-colors border border-neutral-100 dark:border-neutral-800 rounded-lg bg-neutral-50 dark:bg-neutral-900/50">
                        <Twitter size={18} />
                    </Link>
                    <Link href="#" className="w-9 h-9 flex items-center justify-center text-neutral-400 hover:text-indigo-700 transition-colors border border-neutral-100 dark:border-neutral-800 rounded-lg bg-neutral-50 dark:bg-neutral-900/50">
                        <Linkedin size={18} />
                    </Link>
                    <Link href="#" className="w-9 h-9 flex items-center justify-center text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors border border-neutral-100 dark:border-neutral-800 rounded-lg bg-neutral-50 dark:bg-neutral-900/50">
                        <Github size={18} />
                    </Link>
                    <div className="w-px h-9 bg-neutral-100 dark:bg-neutral-800 mx-2" />
                </div>

                <div className="flex flex-col md:flex-row items-end justify-between border-t border-neutral-100 dark:border-neutral-900 pt-10 gap-8 px-2 relative">
                    <div className="space-y-4">
                        <div className="text-2xl font-black text-indigo-600 dark:text-indigo-500 tracking-tighter">
                            DevClub
                        </div>
                        <div className="text-xs font-semibold text-neutral-400 dark:text-neutral-500">
                            © 2026, NSB Classic PTE LTD
                        </div>
                    </div>

                    {/* Decorative graphic placeholder */}
                    <div className="hidden md:block select-none opacity-20 dark:opacity-30">
                        <svg width="240" height="80" viewBox="0 0 240 80" className="fill-current text-black dark:text-white rotate-[-5deg]">
                            <path d="M20 40 L220 40 L230 20 L240 40 L230 60 L220 40" stroke="currentColor" strokeWidth="8" fill="none" />
                            <text x="35" y="47" className="text-[12px] font-black italic tracking-tighter uppercase">NEVER STOP BUILDING</text>
                        </svg>
                    </div>
                </div>
            </div>
        </footer>
    );
}

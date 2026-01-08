"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-transparent py-20 border-t border-black/10 text-black">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    <div className="lg:col-span-2">
                        <Link href="/" className="text-3xl font-bold uppercase tracking-tighter mb-6 block">
                            Portfolio<span className="text-black">.</span>
                        </Link>
                        <p className="text-black/60 max-w-md text-lg">
                            Crafting digital experiences that blend creativity with technology. Use this space to describe your mission.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-black/40 uppercase text-sm tracking-wider mb-8">Navigation</h4>
                        <ul className="flex flex-col gap-4">
                            {["Home", "About", "Work", "Services", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link href={`#${item.toLowerCase()}`} className="text-black hover:text-black/60 transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-black/40 uppercase text-sm tracking-wider mb-8">Socials</h4>
                        <ul className="flex flex-col gap-4">
                            {["Twitter", "LinkedIn", "Instagram", "GitHub"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="flex items-center gap-2 text-black hover:text-black/60 transition-colors group">
                                        {item}
                                        <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-black/10 text-black/40 text-sm">
                    <p>© {currentYear} Creative Developer. All rights reserved.</p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-black transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-black transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import TransitionLink from "@/components/utils/TransitionLink";
import Magnetic from "@/components/ui/Magnetic"; // Added import
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Services", href: "/#services" },
    { name: "Work", href: "/work" }, // Updated to new page
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-4 bg-[#1C1C1C]/90 backdrop-blur-md border-b border-[#FDC5D5]/10" : "py-8 bg-transparent"
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <TransitionLink href="/" className={`text-2xl font-bold uppercase tracking-tighter relative z-50 transition-colors duration-300 ${isScrolled ? "text-[#FDC5D5]" : "text-black"
                    }`}>
                    Portfolio<span className={isScrolled ? "text-white" : "text-[#FDC5D5]"}>.</span>
                </TransitionLink>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Magnetic key={item.name}>
                            <TransitionLink
                                href={item.href}
                                className={`text-sm font-medium uppercase tracking-widest hover:opacity-50 transition-all duration-300 ${isScrolled ? "text-[#FDC5D5]" : "text-black"
                                    }`}
                            >
                                {item.name}
                            </TransitionLink>
                        </Magnetic>
                    ))}
                    {/* Custom Button Style for Sticky Header */}
                    <Button
                        href="/#contact"
                        variant="primary"
                        className={`ml-4 transition-all duration-300 ${isScrolled
                            ? "!bg-transparent !text-[#FDC5D5] !border-[#FDC5D5] hover:!bg-[#FDC5D5] hover:!text-black"
                            : ""}`}
                    >
                        Let's Talk
                    </Button>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden relative z-50 p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <div className={`w-6 h-0.5 mb-1.5 transition-all ${isScrolled ? "bg-[#FDC5D5]" : "bg-black"} ${mobileMenuOpen ? "rotate-45 translate-y-2 !bg-black" : ""}`} />
                    <div className={`w-6 h-0.5 mb-1.5 transition-all ${isScrolled ? "bg-[#FDC5D5]" : "bg-black"} ${mobileMenuOpen ? "opacity-0" : ""}`} />
                    <div className={`w-6 h-0.5 transition-all ${isScrolled ? "bg-[#FDC5D5]" : "bg-black"} ${mobileMenuOpen ? "-rotate-45 -translate-y-2 !bg-black" : ""}`} />
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 bg-background flex flex-col items-center justify-center z-40"
                    >
                        <nav className="flex flex-col items-center gap-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-4xl font-bold uppercase tracking-tighter"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}

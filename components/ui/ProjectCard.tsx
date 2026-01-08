"use client";

import Image from "next/image";
import Link from "next/link"; // Corrected Link import
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion"; // Added new hooks, removed old ones
import React, { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
    title: string;
    category: string;
    image: string;
    href: string; // Made href mandatory
}

export default function ProjectCard({ title, category, image, href }: ProjectCardProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]); // Parallax movement

    // Removed tilt-related state and handlers
    // const x = useMotionValue(0);
    // const y = useMotionValue(0);
    // const mouseXSpring = useSpring(x);
    // const mouseYSpring = useSpring(y);
    // const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    // const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);
    // const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => { /* ... */ };
    // const handleMouseLeave = () => { /* ... */ };

    // Since href is now mandatory, it will always be a Link
    // const Component = href === "#" ? "div" : Link;
    // const props = href === "#" ? { className: "block group cursor-pointer" } : { href, className: "block group" };

    return (
        <Link href={href} className="block group cursor-pointer"> {/* Changed root to Link directly */}
            <div ref={ref} className="relative overflow-hidden mb-6 aspect-[4/3] bg-gray-100 rounded-2xl border border-black transition-all duration-300 group-hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
                {/* Parallax Image Wrapper */}
                <motion.div
                    style={{ y, height: "120%" }}
                    className="absolute top-[-10%] left-0 w-full"
                >
                    <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: `url(${image})` }}
                    />
                </motion.div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 rounded-2xl" />

                {/* Button */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 z-10">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        <ArrowUpRight className="w-5 h-5 text-black" />
                    </div>
                </div>
            </div>

            <div className="flex items-start justify-between border-t border-black/10 pt-6">
                <div>
                    <h3 className="text-2xl font-bold uppercase tracking-tight text-black group-hover:underline transition-all decoration-2 underline-offset-4">
                        {title}
                    </h3>
                </div>
                <span className="text-black text-sm">{category}</span>
            </div>
        </Link>
    );
}

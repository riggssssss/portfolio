"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
    title: string;
    category: string;
    image: string;
    href?: string;
}

export default function ProjectCard({ title, category, image, href = "#" }: ProjectCardProps) {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const Component = href === "#" ? "div" : Link;
    const props = href === "#" ? { className: "block group cursor-pointer" } : { href, className: "block group" };

    return (
        // @ts-ignore
        <Component {...props}>
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateY,
                    rotateX,
                    transformStyle: "preserve-3d",
                }}
                className="relative w-full aspect-[4/3] rounded-2xl bg-white/20 border border-black overflow-hidden mb-6 transition-all duration-300 group-hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]"
            >
                {/* Simple color placeholder */}
                <div className="absolute inset-0 bg-transparent group-hover:scale-105 transition-transform duration-700" />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 z-10" />

                <div className="absolute top-4 right-4 z-20 w-10 h-10 bg-black rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <ArrowUpRight size={20} />
                </div>
            </motion.div>

            <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold uppercase tracking-tight text-black group-hover:underline transition-all decoration-2 underline-offset-4">
                    {title}
                </h3>
                <span className="text-black text-sm">{category}</span>
            </div>
        </Component>
    );
}

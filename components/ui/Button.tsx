"use client";

import { cn } from "@/lib/utils";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    href?: string;
    variant?: "primary" | "outline" | "ghost";
}

export default function Button({
    className,
    children,
    href,
    variant = "primary",
    ...props
}: ButtonProps) {
    const baseStyles =
        "relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium transition-all duration-300 rounded-full group";

    const variants = {
        primary: "bg-black text-white hover:bg-white hover:text-black border border-black",
        outline: "border border-black text-black hover:bg-black hover:text-white",
        ghost: "text-black hover:text-black/60",
    };

    const content = (
        <>
            <span className="relative z-10 font-bold tracking-wide uppercase text-sm">
                {children}
            </span>
            {variant === "primary" && (
                <div className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            )}
        </>
    );

    if (href) {
        return (
            <Link href={href} className={cn(baseStyles, variants[variant], className)}>
                {content}
            </Link>
        );
    }

    return (
        <button className={cn(baseStyles, variants[variant], className)} {...props}>
            {content}
        </button>
    );
}

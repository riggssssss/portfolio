"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Magnetic from "./Magnetic";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "outline" | "ghost";
    href?: string;
    children: ReactNode;
    className?: string; // Add className prop
}

export default function Button({ variant = "primary", href, children, className, ...props }: ButtonProps) {
    const baseStyles = "inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-medium transition-all duration-300 transform border tracking-widest uppercase cursor-none";

    const variants = {
        primary: "bg-deep-black text-white hover:bg-black/90 border-transparent",
        outline: "bg-transparent text-deep-black border-black hover:bg-black hover:text-white",
        ghost: "bg-transparent text-deep-black border-transparent hover:bg-black/5",
    };

    const combinedStyles = cn(baseStyles, variants[variant], className);

    if (href) {
        return (
            <Magnetic>
                <Link href={href} className={combinedStyles}>
                    {children}
                </Link>
            </Magnetic>
        );
    }

    return (
        <Magnetic>
            <button className={combinedStyles} {...props}>
                {children}
            </button>
        </Magnetic>
    );
}

"use client";

import { useTransitionCursor } from "@/components/layout/TransitionProvider"; // Check path export
import { usePathname } from "next/navigation"; // Added
import Link from "next/link";
import { ReactNode } from "react";

interface TransitionLinkProps {
    href: string;
    children: ReactNode;
    className?: string;
    onClick?: () => void;
}

export default function TransitionLink({ href, children, className, onClick }: TransitionLinkProps) {
    const pathname = usePathname(); // Get current path

    // Safety check ...
    let startTransition: (href: string) => Promise<void>;
    try {
        const ctx = useTransitionCursor();
        startTransition = ctx.startPageTransition;
    } catch (e) {
        startTransition = async () => { };
    }

    const handleClick = (e: React.MouseEvent) => {
        // If it's a page link:
        // Logic:
        // 1. If href is exactly same as pathname -> Prevent default (unless hash? No, same page reload usually undesirable here).
        // 2. If href is hash on SAME page -> Let browser handle (or lenis).
        // 3. If href is different page -> Transition.

        if (pathname) {
            if (href === pathname) {
                e.preventDefault(); // Do nothing? Or scroll top?
                return;
            }

            // Check if it's a hash link for current page
            // e.g. pathname="/", href="/#about" -> This is SAME PAGE.
            // e.g. pathname="/work", href="/#about" -> DIFFERENT PAGE.
            if (href.startsWith("/#") && pathname === "/") {
                // Allow default (scroll)
                if (onClick) onClick();
                return;
            }
            if (href.startsWith("#")) {
                // Local hash, allow default
                if (onClick) onClick();
                return;
            }
        }

        if (href.startsWith("/") && !href.startsWith("#")) {
            e.preventDefault();
            if (onClick) onClick();
            startTransition(href);
        }
    };

    return (
        <Link href={href} className={className} onClick={handleClick}>
            {children}
        </Link>
    );
}

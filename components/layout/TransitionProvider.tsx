"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

type TransitionContextType = {
    startPageTransition: (href: string) => Promise<void>;
};

const TransitionContext = createContext<TransitionContextType | null>(null);

export const useTransitionCursor = () => {
    const context = useContext(TransitionContext);
    if (!context) throw new Error("useTransitionCursor must be used within a TransitionProvider");
    return context;
};

export default function TransitionProvider({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const pathname = usePathname();
    const [isTransitioning, setIsTransitioning] = useState(false);
    // State to track if we should be "covering" the screen (Exit phase)
    // or "revealing" (Enter phase).
    // Simple boolean: isCovered.
    // 1. Start: isCovered = true. Animation: Slide Up to Cover.
    // 2. Wait.
    // 3. Router Push.
    // 4. Pathname changes.
    // 5. Effect detects pathname change -> set isCovered = false. Animation: Slide Up to Reveal.

    // We need a key to force re-render of animation if needed, but managing state is better.
    const [animationState, setAnimationState] = useState<"hidden" | "covering" | "revealing">("hidden");

    // On mount, we want to "Reveal".
    useEffect(() => {
        // When pathname changes, we assume we have arrived.
        // If we were "covering", now we "reveal".
        if (animationState === "covering") {
            setAnimationState("revealing");
            // After reveal finishes, go to hidden? 
            // Or leaving it as "transitioned out"
            setTimeout(() => {
                setAnimationState("hidden");
            }, 1000); // Wait for reveal animation duration
        }
    }, [pathname]);

    const startPageTransition = async (href: string) => {
        if (href === pathname) return;

        setAnimationState("covering");

        // Wait for cover animation (0.8s approx)
        await new Promise((resolve) => setTimeout(resolve, 800));

        router.push(href);
    };

    return (
        <TransitionContext.Provider value={{ startPageTransition }}>
            {/* The Global Curtain */}
            {/* 
                Hidden: y: 100% (Below)
                Covering: y: 0% (Center)
                Revealing: y: -100% (Top)
            */}
            <motion.div
                className="fixed inset-0 z-[100] bg-[#1C1C1C] pointer-events-none flex items-center justify-center"
                initial={{ top: "100%" }}
                animate={{
                    top: animationState === "hidden" ? "100%" // Wait, if hidden after reveal, it should be at -100%. 
                        // If we reset to 100%, it will fly across screen.
                        // We need a seamless loop.
                        // Cover: 100% -> 0%
                        // Reveal: 0% -> -100%
                        // Reset: -100% -> 100% (INSTANTLY without transition)
                        : animationState === "covering" ? "0%"
                            : "-100%"
                }}
                transition={{
                    duration: animationState === "hidden" ? 0 : 0.8, // Instant reset if going to hidden
                    ease: [0.76, 0, 0.24, 1]
                }}
            >
                <div className="relative overflow-hidden">
                    <motion.p
                        className="text-[#FDC5D5] text-5xl md:text-7xl font-bold tracking-tighter uppercase"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{
                            opacity: animationState === "covering" ? 1 : 0,
                            y: animationState === "covering" ? 0 : -50
                        }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Portfolio<span className="text-white">.</span>
                    </motion.p>
                </div>
            </motion.div>

            {children}
        </TransitionContext.Provider>
    );
}

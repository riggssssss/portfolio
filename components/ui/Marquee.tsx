"use client";

import { motion } from "framer-motion";

interface MarqueeProps {
    text: string;
}

export default function Marquee({ text }: MarqueeProps) {
    return (
        <div className="relative flex overflow-hidden border-y border-black/10 py-6 bg-transparent">
            <motion.div
                className="flex whitespace-nowrap"
                animate={{ x: "-50%" }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 20,
                }}
            >
                <span className="text-8xl font-bold uppercase tracking-tighter mr-12 opacity-80">
                    {text} &nbsp;—&nbsp;
                </span>
                <span className="text-8xl font-bold uppercase tracking-tighter mr-12 opacity-80">
                    {text} &nbsp;—&nbsp;
                </span>
                <span className="text-8xl font-bold uppercase tracking-tighter mr-12 opacity-80">
                    {text} &nbsp;—&nbsp;
                </span>
                <span className="text-8xl font-bold uppercase tracking-tighter mr-12 opacity-80">
                    {text} &nbsp;—&nbsp;
                </span>
            </motion.div>
        </div>
    );
}

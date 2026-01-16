"use client";

import { useRef } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame
} from "framer-motion";
// Helper utility to avoid external dependency
const wrap = (min: number, max: number, v: number) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

interface MarqueeProps {
    text: string;
    baseVelocity?: number;
}

export default function Marquee({ text, baseVelocity = 5 }: MarqueeProps) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    });

    /**
     * This is a magic wrapping for the length of the text - you
     * have to replace for wrapping that works for you or dynamically
     * calculate
     */
    const x = useTransform(baseX, (v) => `${wrap(0, -50, v)}%`);

    const directionFactor = useRef<number>(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        /**
         * This is what changes the direction of the scroll once we
         * switch scrolling directions.
         */
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className="relative overflow-hidden py-10 bg-transparent border-y border-black/10">
            <motion.div className="flex whitespace-nowrap" style={{ x }}>
                <span className="text-7xl md:text-9xl font-bold uppercase tracking-tighter mr-16 text-black/90 block">
                    Web Developer <span className="text-[#FDC5D5] mx-4">—</span> Student <span className="text-[#FDC5D5] mx-4">—</span> Creative <span className="text-[#FDC5D5] mx-4">—</span> Freelancer <span className="text-[#FDC5D5] mx-4">—</span>
                </span>
                <span className="text-7xl md:text-9xl font-bold uppercase tracking-tighter mr-16 text-black/90 block">
                    Web Developer <span className="text-[#FDC5D5] mx-4">—</span> Student <span className="text-[#FDC5D5] mx-4">—</span> Creative <span className="text-[#FDC5D5] mx-4">—</span> Freelancer <span className="text-[#FDC5D5] mx-4">—</span>
                </span>
            </motion.div>
        </div>
    );
}

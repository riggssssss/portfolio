"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === "A" ||
                target.tagName === "BUTTON" ||
                target.closest("a") ||
                target.closest("button") ||
                target.classList.contains("cursor-pointer")
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        window.addEventListener("mousemove", updateMousePosition);
        window.addEventListener("mouseover", handleMouseOver);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("mouseover", handleMouseOver);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 w-5 h-5 bg-black rounded-full pointer-events-none z-[9999]"
            style={{
                translateX: "-50%",
                translateY: "-50%",
                mixBlendMode: "normal"
            }}
            animate={{
                x: mousePosition.x,
                y: mousePosition.y,
                scale: isClicking ? 0.8 : (isHovering ? 0.5 : 1),
                backgroundColor: isHovering ? "#CCFF00" : (isClicking ? "#FF0055" : "#1C1C1C"),
            }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                mass: 0.5,
            }}
        />
    );
}

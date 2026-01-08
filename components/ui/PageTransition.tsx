"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// Route change detection is handled by template's mounting/unmounting.

export default function PageTransition({ children }: { children: React.ReactNode }) {
    // The "Curtain" effect strategy:
    // We need 1 element to cover the screen (Exit) and 1 element to reveal (Enter).
    // Or 1 element that does both if synced.

    // Logic:
    // EXITING Page: Slide a black panel UP from bottom (100% top to 0% top).
    // ENTERING Page: Slide the black panel UP away (0% top to -100% top).

    // Issues with Template:
    // The 'Exit' animation runs, but the 'Enter' animation of the new component starts immediately.
    // We need to coordinate:
    // 1. Exit starts.
    // 2. Enter waits (or starts with screen fully covered).

    // We'll use a `slide` variants object.

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-full h-screen bg-[#1C1C1C] z-[60] flex items-center justify-center pointer-events-none origin-bottom"
                initial={{ scaleY: 1 }} // Starts covering the screen (because we just mounted new page)
                animate={{ scaleY: 0 }} // Shrinks away (reveal)
                exit={{ scaleY: 1 }}    // Grows back (cover)
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                style={{ originY: 0 }} // Animate from TOP (looks like sliding up/revealing from bottom? No.)
            >
                {/* 
                  Wait, if we use scaleY:
                  Animate to 0 with originY:0 -> Shrinks UP. (Reveals content below).
                  Exit to 1 with originY:0 -> Grows DOWN. (Covers content).
                  User wanted "Telon". 
                  Usually "Curtain" means slide up/down.
                  
                  Let's try "Slide In From Bottom, Slide Out To Top".
                  Exit: y: "0%" (Covers)
                  Enter needs to start Covered.
               */}
            </motion.div>

            {/* Actual implementation with SVG curve or just block? Block is cleaner. */}

            <motion.div
                className="slide-in fixed top-0 left-0 w-full h-screen bg-[#1C1C1C] z-[60] flex items-center justify-center pointer-events-none"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                style={{ originY: 1 }} // Shrinks to Top? No, originY:1 means anchor bottom.
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />
            {/* 
                This is getting confusing without visuals.
                Let's use the proven "Stair/Slide" pattern.
             */}
            <motion.div
                key="slide-overlay"
                className="fixed inset-0 z-[60] bg-[#1C1C1C] flex items-center justify-center pointer-events-none"
                initial={{ y: "0%" }}      // Starts covering (New Page Mount)
                animate={{ y: "-100%" }}   // Slides UP (Reveal)
                exit={{ y: "0%" }}         // Slides DOWN (Cover)? No, we want continuous UP.
            // To do continuous UP:
            // Exit needs to go from 100% (below) to 0% (center).
            // Enter needs to go from 0% (center) to -100% (top).
            >
                <p className="text-[#FDC5D5] text-4xl font-bold tracking-tighter">
                    PORTFOLIO.
                </p>
            </motion.div>

            {children}
        </>
    );
}

// Correct Implementation Logic for `template.tsx`:
// The `template` component wraps the page.
// When we navigate, the OLD template Unmounts (Exit flows), and NEW template Mounts (Initial flows).
// We want:
// OLD Exit: Slide Black Panel from Bottom -> Center.
// NEW Initial: Black Panel at Center.
// NEW Animate: Slide Black Panel from Center -> Top.

const slideVariants = {
    initial: {
        y: "0%", // Started covering the screen? No, New Page should start covered.
    },
    enter: {
        y: "-100%", // Move UP to reveal
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 } // Delay for logo
    },
    exit: {
        y: "0%", // Move to Cover? Wait. If we are at -100% (hidden top), we can't jump to bottom.
        // We need a separate element for Exit?
        // Or we reset position.
    }
}

// Better Pattern:
// We use a predefined "Panel" that isolates the transition.
export function CinematicTransition({ children }: { children: React.ReactNode }) {
    return (
        <>
            {/* The EXIT Curtain (Slides IN from bottom) */}
            <motion.div
                className="fixed inset-0 z-[60] bg-[#1C1C1C] pointer-events-none flex items-center justify-center"
                initial={{ y: "100%" }} // Hidden below
                animate={{ y: "100%" }} // Stays hidden below normally
                exit={{ y: "0%" }}      // Slides UP to cover
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            >
                {/* Logo on Exit Curtain */}
                <motion.span
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-[#FDC5D5] text-4xl font-bold tracking-tighter"
                >
                    PORTFOLIO.
                </motion.span>
            </motion.div>

            {/* The ENTER Curtain (Slides OUT to top) */}
            <motion.div
                className="fixed inset-0 z-[60] bg-[#1C1C1C] pointer-events-none flex items-center justify-center"
                initial={{ y: "0%" }}       // Starts covering
                animate={{ y: "-100%" }}    // Slides UP to reveal
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }} // Wait for sync
            >
                {/* Logo on Enter Curtain */}
                <motion.span
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }} // Fade out as it moves up? Or keep it.
                    transition={{ duration: 0.3 }}
                    className="text-[#FDC5D5] text-4xl font-bold tracking-tighter"
                >
                    PORTFOLIO.
                </motion.span>
            </motion.div>

            {children}
        </>
    );
}

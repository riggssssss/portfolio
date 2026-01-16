"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!mounted) return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[5000] flex items-center justify-center p-4 md:p-8">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-background/80 backdrop-blur-sm cursor-pointer"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="relative w-full max-w-5xl h-[85vh] bg-white border border-black overflow-hidden flex flex-col rounded-xl shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Pseudo-Browser Header */}
                        <div className="h-10 border-b border-black flex items-center px-4 gap-2 bg-[#f0f0f0] shrink-0">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-black/20" />
                                <div className="w-3 h-3 rounded-full bg-black/20" />
                                <div className="w-3 h-3 rounded-full bg-black/20" />
                            </div>
                            <div className="flex-1 mx-4">
                                <div className="h-6 bg-white border border-black/10 rounded-md w-full max-w-sm mx-auto flex items-center px-2">
                                    <span className="text-[10px] text-black/40 font-mono">portfolio://projects/view</span>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-1 hover:bg-black/10 rounded-md transition-colors"
                            >
                                <X size={16} className="text-black" />
                            </button>
                        </div>

                        {/* Scrollable Content Area */}
                        <div className="flex-1 overflow-y-auto overflow-x-hidden bg-white" data-lenis-prevent>
                            {children}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    );
}

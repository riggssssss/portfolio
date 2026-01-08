"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2, // Stagger effect
                                delayChildren: 0.3,
                            }
                        }
                    }}
                    className="mb-8"
                >
                    <motion.span
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } }}
                        className="inline-block px-4 py-1.5 rounded-full border border-black text-black text-sm tracking-wider uppercase mb-6"
                    >
                        Available for freelance work
                    </motion.span>
                    <h1 className="text-7xl md:text-[10rem] font-bold tracking-tighter uppercase leading-none mb-6 text-black">
                        <motion.div variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } } }}>
                            Creative <br />
                        </motion.div>
                        <span>
                            <motion.span
                                initial={{
                                    WebkitTextStroke: "1px black",
                                    color: "transparent"
                                }}
                                whileInView={{
                                    WebkitTextStroke: "0px transparent",
                                    color: "#1C1C1C"
                                }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{
                                    duration: 1.5,
                                    ease: [0.22, 1, 0.36, 1] // Custom refined bezier
                                }}
                            >
                                Solutions
                            </motion.span>            </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-black max-w-2xl mx-auto mb-10 leading-relaxed">
                        We build digital experiences that blend aesthetic with function.
                        AI-first design studio for the modern web.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Button href="#work" className="w-full sm:w-auto">View Projects</Button>
                        <Button href="#contact" variant="outline" className="w-full sm:w-auto">Contact Us</Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

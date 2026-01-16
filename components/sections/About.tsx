"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function About() {
    return (
        <section id="about" className="py-32 bg-transparent">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div>
                    <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.9] mb-8 text-black"
                    >
                        Hi, I'm <br />
                        <motion.span
                            initial={{
                                WebkitTextStroke: "1px black",
                                color: "transparent"
                            }}
                            whileInView={{
                                WebkitTextStroke: "0px transparent",
                                color: "#1C1C1C"
                            }}
                            viewport={{ once: true, amount: 1 }}
                            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                        >
                            Riggs
                        </motion.span>
                    </motion.h2>

                    <Button href="#contact" variant="primary">Let's Talk</Button>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-xl md:text-2xl text-black/80 leading-relaxed space-y-8"
                >
                    <p>
                        Bridging the gap between creative vision and technical execution. I specialize in building digital experiences that are not just functional, but memorable.
                    </p>
                    <p>
                        Driven by precision and a deep empathy for the user, I transform complex requirements into clean, scalable, and high-performance solutions.
                    </p>

                    <div className="grid grid-cols-2 gap-8 pt-8">
                        <div>
                            <h4 className="text-4xl font-bold text-black mb-2">100%</h4>
                            <span className="text-black/40 uppercase text-sm tracking-wider">Precision</span>
                        </div>
                        <div>
                            <h4 className="text-4xl font-bold text-black mb-2">24/7</h4>
                            <span className="text-black/40 uppercase text-sm tracking-wider">Support</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

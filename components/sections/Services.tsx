"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const services = [
    {
        title: "Brand Strategy.",
        description: "Positioning, Voice & Tone, Brand Architecture."
    },
    {
        title: "Visual Identity.",
        description: "Logo Design, Typography, Color Systems."
    },
    {
        title: "Digital Design.",
        description: "Web Design, UI/UX, App Design, Design Systems."
    },
    {
        title: "Development.",
        description: "Webflow, Next.js, Creative Coding, interactions."
    },
    {
        title: "Content Creation.",
        description: "Art Direction, Motion Design, 3D Visuals."
    },
];

export default function Services() {
    return (
        <section id="services" className="py-32 bg-transparent text-black">
            <div className="container mx-auto px-6">
                <div className="mb-20">
                    <h2 className="text-xl md:text-2xl font-light tracking-wide text-black/60 mb-8 uppercase">Our Expertise</h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        className="h-[1px] bg-black/20"
                    />
                </div>

                <div className="flex flex-col">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group border-b border-black/10 py-12 flex flex-col md:flex-row md:items-center justify-between cursor-pointer transition-colors duration-300 hover:bg-black/5 px-4"
                        >
                            <h3 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter group-hover:text-black transition-colors">
                                {service.title}
                            </h3>

                            <div className="mt-4 md:mt-0 flex items-center justify-between md:gap-12 w-full md:w-auto">
                                <p className="text-black/60 max-w-xs text-sm md:text-base group-hover:text-black transition-colors">
                                    {service.description}
                                </p>
                                <div className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center group-hover:bg-black group-hover:border-black group-hover:text-white transition-all">
                                    <Plus size={24} className="group-hover:rotate-90 transition-transform duration-300" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

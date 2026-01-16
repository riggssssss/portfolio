"use client";

import { motion } from "framer-motion";
import { Plus, Lock } from "lucide-react";

const services = [
    {
        title: "Web Development.",
        description: "Custom websites, Landing pages, Personal portfolios, Creative Coding.",
        status: "active"
    },
    {
        title: "E-commerce.",
        description: "Online stores, Payment integration, Product catalogs.",
        status: "coming-soon"
    },
    {
        title: "Personal Projects.",
        description: "Turning your unique ideas into digital reality with passion.",
        status: "active"
    }
];

export default function Services() {
    return (
        <section id="services" className="py-32 bg-transparent text-black">
            <div className="container mx-auto px-6">
                <div className="mb-20">
                    <h2 className="text-xl md:text-2xl font-light tracking-wide text-black/60 mb-8 uppercase">Expertise</h2>
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
                            className={`group border-b border-black/10 py-12 flex flex-col md:flex-row md:items-center justify-between transition-colors duration-300 px-4 ${service.status === 'coming-soon'
                                ? 'opacity-50 cursor-not-allowed grayscale'
                                : 'cursor-pointer hover:bg-black/5'
                                }`}
                        >
                            <div className="flex flex-col gap-2">
                                <h3 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter group-hover:text-black transition-colors flex items-center gap-4">
                                    {service.title}
                                    {service.status === 'coming-soon' && (
                                        <span className="text-xs md:text-sm font-mono tracking-widest border border-black/30 text-black/60 px-3 py-1 rounded-full uppercase">
                                            Coming Soon
                                        </span>
                                    )}
                                </h3>
                            </div>

                            <div className="mt-4 md:mt-0 flex items-center justify-between md:gap-12 w-full md:w-auto">
                                <p className="text-black/60 max-w-xs text-sm md:text-base group-hover:text-black transition-colors">
                                    {service.description}
                                </p>
                                <div className={`w-12 h-12 rounded-full border border-black/20 flex items-center justify-center transition-all ${service.status === 'active'
                                    ? 'group-hover:bg-black group-hover:border-black group-hover:text-white'
                                    : 'bg-black/5'
                                    }`}>
                                    {service.status === 'coming-soon' ? (
                                        <Lock size={20} className="text-black/40" />
                                    ) : (
                                        <Plus size={24} className="group-hover:rotate-90 transition-transform duration-300" />
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

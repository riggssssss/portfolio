"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProjectCard from "@/components/ui/ProjectCard"; // Reusing the card
import { projects } from "@/data/projects";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";

// Extract unique categories
const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export default function WorkPage() {
    const [filter, setFilter] = useState("All");

    const filteredProjects =
        filter === "All"
            ? projects
            : projects.filter((p) => p.category === filter);

    return (
        <>
            <Header />
            <main className="relative z-10 bg-background min-h-screen pt-40 pb-20 mb-[500px] shadow-2xl">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-16 text-center"
                    >
                        <h1 className="text-6xl md:text-9xl font-bold uppercase tracking-tighter mb-8">
                            All Projects
                        </h1>

                        {/* Filter Buttons */}
                        <div className="flex flex-wrap justify-center gap-4">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setFilter(cat)}
                                    className={`px-6 py-2 rounded-full border border-black text-sm uppercase tracking-wider transition-all duration-300 ${filter === cat
                                            ? "bg-black text-white"
                                            : "bg-transparent text-black hover:bg-black/5"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24"
                    >
                        <AnimatePresence>
                            {filteredProjects.map((project) => (
                                <motion.div
                                    layout
                                    key={project.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {/* Pass href to open modal or detail page. 
                       For now reusing the same logic/href as Home or specific detail pages if we had them.
                       Using '#' to signify clickable card behavior if we wrap logic, but ProjectCard expects href. 
                   */}
                                    <ProjectCard
                                        href={`/work/${project.id}`} // Or just '#' if we want to add modal logic here too. Let's stick to simple routing or # for now.
                                        title={project.title}
                                        category={project.category}
                                        image={project.image}
                                    />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </>
    );
}

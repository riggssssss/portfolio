"use client";

import ProjectCard from "@/components/ui/ProjectCard";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { projects, Project } from "@/data/projects";
import Modal from "@/components/ui/Modal";
import ProjectModal from "@/components/ui/ProjectModal";

export default function WorkGrid() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <>
            <section id="work" className="py-32 relative bg-transparent">
                <div className="container mx-auto px-6">
                    <div className="flex items-end justify-between mb-20 border-b border-black pb-8">
                        <h2 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter">
                            Selected <motion.span
                                initial={{
                                    WebkitTextStroke: "1px black",
                                    color: "transparent"
                                }}
                                whileInView={{
                                    WebkitTextStroke: "0px transparent",
                                    color: "#1C1C1C"
                                }}
                                viewport={{ once: true, amount: 1 }}
                                transition={{
                                    duration: 1.2,
                                    ease: [0.22, 1, 0.36, 1]
                                }}
                            >
                                Work
                            </motion.span>
                        </h2>
                        <span className="hidden md:block text-black text-sm uppercase tracking-widest mb-4">
                            (2023 — Present)
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ delay: index * 0.1, duration: 0.8 }}
                                className={index % 2 === 1 ? "md:mt-32" : ""}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setSelectedProject(project);
                                }}
                            >
                                {/* We can hijack the link behavior since ProjectCard is a Link. 
                    Actually, let's just use a div wrapper that captures the click 
                    if we want to open a modal instead of navigating.
                    However, ProjectCard uses Link. Let's strictly control it inside ProjectCard or pass a handler.
                    For now, passing a dummy href to ProjectCard and handling click on the wrapper. */}
                                <div className="cursor-pointer">
                                    <ProjectCard
                                        title={project.title}
                                        category={project.category}
                                        image={project.image}
                                        href="#"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
                {selectedProject && <ProjectModal project={selectedProject} />}
            </Modal>
        </>
    );
}

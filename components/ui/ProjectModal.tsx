import { useState } from "react";
import { Project } from "@/data/projects";
import Image from "next/image";
import Button from "./Button";
import { ArrowUpRight, Maximize2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectModalProps {
    project: Project;
}

export default function ProjectModal({ project }: ProjectModalProps) {
    const [isPreviewOpen, setIsPreviewOpen] = useState(false);

    return (
        <div className="flex flex-col pb-12">
            {/* Expanded Fullscreen Preview */}
            <AnimatePresence>
                {isPreviewOpen && (project.link || project.video) && (
                    <div className="fixed inset-0 z-[6000] flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-sm">
                        {/* Close Button Overlay */}
                        <button
                            onClick={() => setIsPreviewOpen(false)}
                            className="absolute top-4 right-4 z-[6010] p-2 bg-white rounded-full hover:bg-white/90 transition-colors shadow-lg"
                        >
                            <X className="w-6 h-6 text-black" />
                        </button>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="relative w-full h-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                        >
                            {project.video ? (
                                <video
                                    src={project.video}
                                    className="w-full h-full object-cover"
                                    controls
                                    autoPlay
                                    playsInline
                                />
                            ) : (
                                <iframe
                                    src={project.link}
                                    className="w-full h-full border-0"
                                    title={`${project.title} Fullscreen Preview`}
                                />
                            )}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Hero Section: Preview Trigger */}
            <div className="relative w-full h-[40vh] md:h-[50vh] bg-[#f0f0f0] flex items-center justify-center overflow-hidden border-b border-black/10 shrink-0 group">
                {project.video ? (
                    <>
                        <video
                            src={project.video}
                            className="w-full h-full object-cover pointer-events-none opacity-90 transition-all duration-700 group-hover:opacity-100 group-hover:scale-[1.01]"
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                        {/* Expand Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/5 transition-opacity duration-300">
                            <button
                                onClick={() => setIsPreviewOpen(true)}
                                className="flex items-center gap-3 px-6 py-3 bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-white/50 hover:scale-105 transition-all duration-300 group/btn"
                            >
                                <span className="text-xs font-bold uppercase tracking-widest text-black">Play Video</span>
                                <div className="p-1.5 bg-black rounded-full text-white group-hover/btn:rotate-90 transition-transform duration-300">
                                    <Maximize2 className="w-3 h-3" />
                                </div>
                            </button>
                        </div>
                    </>
                ) : project.link ? (
                    <>
                        {/* Static/Non-interactive Preview Background */}
                        <iframe
                            src={project.link}
                            className="w-full h-full border-0 pointer-events-none opacity-50 blur-[2px] scale-[1.02] transition-all duration-700 group-hover:blur-0 group-hover:scale-100 group-hover:opacity-100"
                            title={`${project.title} Preview Background`}
                        />

                        {/* Expand Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/5 transition-opacity duration-300">
                            <button
                                onClick={() => setIsPreviewOpen(true)}
                                className="flex items-center gap-3 px-6 py-3 bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-white/50 hover:scale-105 transition-all duration-300 group/btn"
                            >
                                <span className="text-xs font-bold uppercase tracking-widest text-black">Expand Preview</span>
                                <div className="p-1.5 bg-black rounded-full text-white group-hover/btn:rotate-90 transition-transform duration-300">
                                    <Maximize2 className="w-3 h-3" />
                                </div>
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="text-black/20 text-4xl md:text-5xl font-bold uppercase tracking-tighter">
                        {project.title} Preview
                    </div>
                )}
            </div>

            <div className="container mx-auto px-6 md:px-12 py-16">
                <div className="max-w-5xl mx-auto flex flex-col gap-16">

                    {/* Header Info */}
                    <div className="space-y-8">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                            <h2 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter text-black leading-[0.85]">
                                {project.title}
                            </h2>
                            {/* Metadata Row */}
                            <div className="flex flex-wrap items-center gap-6 md:gap-8 pb-2">
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-1">Year</span>
                                    <span className="font-mono text-sm border-b border-black/10 pb-1">{project.year}</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-1">Role</span>
                                    <span className="font-mono text-sm border-b border-black/10 pb-1">Lead Dev</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-1">Category</span>
                                    <span className="font-mono text-sm border-b border-black/10 pb-1">{project.category}</span>
                                </div>
                            </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-4">
                            {project.technologies?.map((tech) => (
                                <div key={tech} className="px-4 py-2 border border-black/10 rounded-full text-xs font-mono uppercase tracking-widest bg-black/5 text-black/70">
                                    {tech}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Description - Editorial Style */}
                    <div>
                        <span className="inline-block w-full h-[1px] bg-black/10 mb-8"></span>
                        <p className="text-xl md:text-3xl text-black/90 leading-tight font-light max-w-4xl">
                            {project.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

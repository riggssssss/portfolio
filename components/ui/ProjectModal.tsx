"use client";

import { Project } from "@/data/projects";
import Image from "next/image";
import Button from "./Button";
import { ArrowUpRight } from "lucide-react";

interface ProjectModalProps {
    project: Project;
}

export default function ProjectModal({ project }: ProjectModalProps) {
    return (
        <div className="flex flex-col">
            {/* Hero Image within Modal */}
            <div className="relative w-full h-[400px] bg-black/5 flex items-center justify-center overflow-hidden border-b border-black/10">
                <div className="text-black/20 text-6xl font-bold uppercase tracking-tighter">
                    {project.title} Preview
                </div>
                {/* Implement actual image when available */}
                {/* <Image src={project.image} alt={project.title} fill className="object-cover" /> */}
            </div>

            <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row justify-between gap-8 mb-12">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4 text-black">
                            {project.title}
                        </h2>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.technologies?.map((tech) => (
                                <span key={tech} className="px-3 py-1 border border-black rounded-full text-xs uppercase tracking-wide">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 min-w-[200px]">
                        <div className="flex justify-between border-b border-black/10 pb-2">
                            <span className="text-black/40 text-sm uppercase">Year</span>
                            <span className="font-medium">{project.year}</span>
                        </div>
                        <div className="flex justify-between border-b border-black/10 pb-2">
                            <span className="text-black/40 text-sm uppercase">Category</span>
                            <span className="font-medium text-right">{project.category}</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="md:col-span-2">
                        <h3 className="text-xl font-bold uppercase mb-4">Overview</h3>
                        <p className="text-lg text-black/70 leading-relaxed mb-8">
                            {project.description}
                        </p>
                        <p className="text-lg text-black/70 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    <div className="md:col-span-1">
                        {project.link && (
                            <Button href={project.link} variant="primary" className="w-full justify-between group">
                                Visit Site <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

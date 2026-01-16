import { Project } from "@/data/projects";

export interface Project {
    id: string;
    title: string;
    category: string;
    image: string;
    description: string;
    link?: string;
    video?: string; // Path to video file (mp4/webm)
    technologies?: string[];
    year?: string;
}

export const projects: Project[] = [
    {
        id: "web-1",
        title: "Web 1",
        category: "Development",
        image: "/proyectos/web-1/preview.png",
        description: "A new web project showcasing modern development techniques.",
        link: "/proyectos/web-1/index.html", // Keep link for fallback or "Visit" button if needed, or remove if video replaces it entirely.
        video: "/proyectos/web-1/demo.mp4",
        technologies: ["HTML", "CSS", "JS"],
        year: "2026"
    },
    {
        id: "web-2",
        title: "Web 2",
        category: "Development",
        image: "/proyectos/web-2/preview.png",
        description: "Another innovative project demonstrating creative coding.",
        link: "/proyectos/web-2/index.html",
        video: "/proyectos/web-2/demo.mp4",
        technologies: ["HTML", "JS"],
        year: "2026"
    },
];

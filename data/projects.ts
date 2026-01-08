export interface Project {
    id: string;
    title: string;
    category: string;
    image: string;
    description: string;
    link?: string;
    technologies?: string[];
    year?: string;
}

export const projects: Project[] = [
    {
        id: "ecovision",
        title: "EcoVision AI",
        category: "Web Design / AI",
        image: "/project-1.jpg",
        description: "An AI-powered platform for monitoring environmental data in real-time. We designed a dashboard that simplifies complex data into actionable insights.",
        link: "https://example.com/ecovision",
        technologies: ["React", "D3.js", "Python"],
        year: "2023"
    },
    {
        id: "urban-pulse",
        title: "Urban Pulse",
        category: "Branding / Mobile Art",
        image: "/project-2.jpg",
        description: "A mobile application connecting street artists with urban spaces. The branding reflects the raw energy of the streets with a digital polish.",
        link: "https://example.com/urban-pulse",
        technologies: ["React Native", "Firebase", "Mapbox"],
        year: "2023"
    },
    {
        id: "neon-nexus",
        title: "Neon Nexus",
        category: "UI/UX / Development",
        image: "/project-3.jpg",
        description: "A futuristic e-commerce experience for high-end techwear. The interface uses WebGL to allow users to inspect garments in 3D.",
        link: "https://example.com/neon-nexus",
        technologies: ["Next.js", "Three.js", "Shopify"],
        year: "2024"
    },
    {
        id: "zenith-mode",
        title: "Zenith Mode",
        category: "E-Commerce / Strategy",
        image: "/project-4.jpg",
        description: "Rebranding a legacy fashion house for the digital age. We created a minimalist design system that puts the product front and center.",
        link: "https://example.com/zenith",
        technologies: ["Vue", "Nuxt", "Stripe"],
        year: "2024"
    },
];

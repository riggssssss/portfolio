"use client";

import Button from "@/components/ui/Button";
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section id="contact" className="py-32 bg-transparent text-black relative overflow-hidden">

            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                    <h2 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter leading-none mb-8">
                        Let's <br />
                        <motion.span
                            initial={{
                                WebkitTextStroke: "1px black",
                                color: "transparent"
                            }}
                            whileInView={{
                                WebkitTextStroke: "0px black",
                                color: "#1C1C1C"
                            }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 1.0, ease: "easeOut" }}
                        >
                            Talk
                        </motion.span>
                    </h2>
                    <p className="text-xl text-black/60 max-w-md mb-12">
                        Have a project in mind? I would love to hear from you.
                        Fill out the form or send us an email.
                    </p>

                    <div className="space-y-4">
                        <div className="block">
                            <span className="text-sm text-black/40 uppercase tracking-widest block mb-1">Email</span>
                            <a href="mailto:riggs.contact@gmail.com" className="text-2xl hover:text-black/70 transition-colors">riggs.contact@gmail.com</a>
                        </div>
                    </div>
                </div>

                <form className="space-y-8 bg-black/5 p-8 rounded-3xl border border-black/10 backdrop-blur-sm transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#FDC5D5]/20 group">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm uppercase tracking-widest text-black/60 font-medium">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full bg-transparent border-b border-black/20 py-4 text-xl focus:border-[#FDC5D5] focus:outline-none transition-colors text-black placeholder:text-black/30"
                            placeholder="What's your name?"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm uppercase tracking-widest text-black/60 font-medium">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full bg-transparent border-b border-black/20 py-4 text-xl focus:border-[#FDC5D5] focus:outline-none transition-colors text-black placeholder:text-black/30"
                            placeholder="Your email address"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm uppercase tracking-widest text-black/60 font-medium">Message</label>
                        <textarea
                            id="message"
                            rows={4}
                            className="w-full bg-transparent border-b border-black/20 py-4 text-xl focus:border-[#FDC5D5] focus:outline-none transition-colors resize-none text-black placeholder:text-black/30"
                            placeholder="Tell me about your project..."
                        />
                    </div>

                    <div className="pt-4">
                        <Button className="w-full group-hover:bg-black group-hover:text-white transition-colors">Send Message</Button>
                    </div>
                </form>
            </div>
        </section>
    );
}

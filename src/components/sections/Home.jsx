import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
    return (
    <section 
        id="home" 
        className="min-h-screen flex items-center justify-center relative bg-[#FFFFFF]"
    >
        <RevealOnScroll>
        <div className="text-center z-10 px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#5A6C57]">
                Hi, I'm JP!
            </h1>

            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                Welcome to my website :)
            </p>

            <div className="flex justify-center space-x-4">
                <a href="#projects" className="bg-[#5A6C57] text-white py-3 px-6 round font-medium transition relative overflow-hidden hover:-translate-y-0.5 
                hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
                    View Experience
                </a>
                <a href="#contact" className="boarder border-[#5A6C57] text-[#85A98F] py-3 px-6 rounded font-medium transition-all duration-200
                hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-[#D3F1DF]">
                    Contact Me
                </a>

            </div>
        </div>
        </RevealOnScroll>
    </section>
    )
}
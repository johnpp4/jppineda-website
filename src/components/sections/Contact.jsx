import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

export const Contact = () => {
    return (
        <section 
            id="contact" 
            className="h-[125px] flex items-center justify-center py-20 bg-[#727D73]">
            
            <RevealOnScroll>
                <div className="px-4 w-150">
                    <h2 className="text-3xl font-bold mb-8 text-[#FFFFFF] text-center">
                        Get In Touch, I Would Love To Connect!
                    </h2>
                    <div className="flex space-x-6 justify-center">
                        <a href="https://www.linkedin.com/in/jp-pineda-/" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-gray-300 transition">
                            <FaLinkedin />
                        </a>
                        <a href="mailto:johnppineda4@gmail.com" className="text-white text-3xl hover:text-gray-300 transition">
                            <FaEnvelope />
                        </a>
                    </div>
                </div>
            </RevealOnScroll>

        </section>
    )
}
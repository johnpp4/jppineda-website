import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Experience = () => {

    return (
    <section 
        id="projects" 
        className="min-h-screen flex items-center justify-center py-20 bg-white">
        
        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-[#5A6C57] text-center">
                Professional Experience
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
                {/* copy here per project */}
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-[#C3D1B8]
                                hover:shadow-[0_2px_8px_4gba(59,130,246,0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2 text-[#5A6C57]"> Engineering Tutor </h3>
                    <p className="text-gray-400 mb-4"> 
                        DESC. PAR.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["Communication"].map((tech,key) => (
                            <span 
                            key={key}
                            className="bg-[#5F685F] text-gray-200 py-1 px-3 rounded-full text-sm hover:bg-[#A5AD9F]
                                        hover:shadow-[0_2px_8px_4gba(59,130,246,0.2)] transition 
                                        ">
                            {tech}
                            </span>
                        ))}
                    </div>
                    {/* <div className="flex justify-between items-center">
                        <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project</a>
                    </div> */}
                </div>

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-[#C3D1B8]
                                hover:shadow-[0_2px_8px_4gba(59,130,246,0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2 text-[#5A6C57]"> Neuroimaging Research Assistant </h3>
                    <p className="text-gray-400 mb-4"> 
                        DESC. PAR.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["Python", "Bash", "SKILL3"].map((tech,key) => (
                            <span 
                            key={key}
                            className="bg-[#5F685F] text-gray-200 py-1 px-3 rounded-full text-sm hover:bg-[#A5AD9F]
                                        hover:shadow-[0_2px_8px_4gba(59,130,246,0.2)] transition 
                                        ">
                            {tech}
                            </span>
                        ))}
                    </div>
                    {/* <div className="flex justify-between items-center">
                        <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project</a>
                    </div> */}
                </div>

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-[#C3D1B8]
                                hover:shadow-[0_2px_8px_4gba(59,130,246,0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2 text-[#5A6C57]"> Software Engineer Intern </h3>
                    <p className="text-gray-400 mb-4"> 
                        DESC. PAR.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["JavaScript", "HTML/CSS", "Firebase", "React.js"].map((tech,key) => (
                            <span 
                            key={key}
                            className="bg-[#5F685F] text-gray-200 py-1 px-3 rounded-full text-sm hover:bg-[#A5AD9F]
                                        hover:shadow-[0_2px_8px_4gba(59,130,246,0.2)] transition 
                                        ">
                            {tech}
                            </span>
                        ))}
                    </div>
                    {/* <div className="flex justify-between items-center">
                        <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project</a>
                    </div> */}
                </div>

            </div>
        </div>

        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-[#5A6C57] text-center">
                Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
                {/* copy here per project */}
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-[#C3D1B8]
                                hover:shadow-[0_2px_8px_4gba(59,130,246,0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2 text-[#5A6C57]"> PROJECT1 </h3>
                    <p className="text-gray-400 mb-4"> 
                        DESC. PAR.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["Communication"].map((tech,key) => (
                            <span 
                            key={key}
                            className="bg-[#5F685F] text-gray-200 py-1 px-3 rounded-full text-sm hover:bg-[#A5AD9F]
                                        hover:shadow-[0_2px_8px_4gba(59,130,246,0.2)] transition 
                                        ">
                            {tech}
                            </span>
                        ))}
                    </div>
                    {/* <div className="flex justify-between items-center">
                        <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project</a>
                    </div> */}
                </div>

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-[#C3D1B8]
                                hover:shadow-[0_2px_8px_4gba(59,130,246,0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2 text-[#5A6C57]"> PROJECT2 </h3>
                    <p className="text-gray-400 mb-4"> 
                        DESC. PAR.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["Python", "Bash", "SKILL3"].map((tech,key) => (
                            <span 
                            key={key}
                            className="bg-[#5F685F] text-gray-200 py-1 px-3 rounded-full text-sm hover:bg-[#A5AD9F]
                                        hover:shadow-[0_2px_8px_4gba(59,130,246,0.2)] transition 
                                        ">
                            {tech}
                            </span>
                        ))}
                    </div>
                    {/* <div className="flex justify-between items-center">
                        <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project</a>
                    </div> */}
                </div>

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-[#C3D1B8]
                                hover:shadow-[0_2px_8px_4gba(59,130,246,0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2 text-[#5A6C57]"> PROJECT3 </h3>
                    <p className="text-gray-400 mb-4"> 
                        DESC. PAR.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["JavaScript", "HTML/CSS", "Firebase", "React.js"].map((tech,key) => (
                            <span 
                            key={key}
                            className="bg-[#5F685F] text-gray-200 py-1 px-3 rounded-full text-sm hover:bg-[#A5AD9F]
                                        hover:shadow-[0_2px_8px_4gba(59,130,246,0.2)] transition 
                                        ">
                            {tech}
                            </span>
                        ))}
                    </div>
                    {/* <div className="flex justify-between items-center">
                        <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project</a>
                    </div> */}
                </div>
                </div>
        </div>
        </RevealOnScroll>
    </section>
    );
};
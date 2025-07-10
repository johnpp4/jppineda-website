import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";

// details abt my skills, education, and work experience
export const About = () => {

        const languagesLibs = [
            "Java", 
            "Python", 
            "JavaScript", 
            "C++",
            "HTML/CSS",
            "SQL",
            "R",
            "MATLAB",
            "pandas",
            "NumPy",
            "Matplotlib",
            "scikit-learn",
        ];

        const toolsFrame = [
            "Git",
            "VS Code",
            "PyCharm",
            "Eclipse",
            "React.js",
            "Firebase",
            "Bash",
            "Linux",
            "MySQL",
        ]

    return <section 
                id="about" 
                className="min-h-screen flex items-center justify-center py-20 bg-[#727D73]"
            >
        <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-[#FFFFFF] text-center ">
                About Me
            </h2>

            
            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all"> 
                <p className="text-gray-300 mb-6">
                Hi! My name is John Paul Pineda, JP for short. I’m a rising Senior at WashU, 
                studying Computer Science + Math. I’m motivated by the excitement of solving complex problems and seeing its impact in a 
                collaborative and diverse environment. 
                My primary interest lies in software development, product management, and cyber security!
                Outside of academics, I enjoy going on adventures, playing video games, listening to music, and exploring new foods and cuisines!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">
                            Languages & Libraries
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {languagesLibs.map((tech, key) => (
                                <span 
                                    key={key}
                                    className="bg-[#5F685F] text-gray-200 py-1 px-3 rounded-full text-sm hover:bg-[#A5AD9F]
                                                hover:shadow-[0_2px_8px_4gba(59,130,246,0.2)] transition 
                                                ">
                                    {tech}

                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">
                            Tools & Frameworks
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {toolsFrame.map((tech, key) => (
                                <span 
                                    key={key}
                                    className="bg-[#5F685F] text-gray-200 py-1 px-3 rounded-full text-sm hover:bg-[#A5AD9F]
                                                hover:shadow-[0_2px_8px_4gba(59,130,246,0.2)] transition 
                                                ">
                                    {tech}

                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        {/* maybe add a timeline??? */}
                        <h3 className="text-xl font-bold mb-4">Education</h3>
                        <ul className="list-disc list-inside text-gray-150 space-y-2">
                            <li>
                                <strong>B.S. in Computer Science + Mathematics </strong> - Washington University in St. Louis (Aug. 2022- May 2026)
                                <ul className="list-disc ml-6 space-y-1">
                                    <li>Relevant Coursework: Data Structures, Probability, Linear Algebra, Intro to AI, Full Stack Development, Object-Oriented Programming, 
                                         Linear Statistical Models, Algorithm Analysis, Data Mining, Financial Math</li>
                                </ul> 
                            </li>                    
                        </ul>
                        <ul className="list-disc list-inside text-gray-150 space-y-2">
                            <li>
                                <strong>Exchange Student in Computer Science </strong> - Yonsei University, Seoul, South Korea (Sept. 2024- Dec. 2024)
                                <ul className="list-disc ml-6 space-y-1">
                                    <li>Relevant Coursework: Research Methods in Human-Computer Interaction</li>
                                </ul> 
                            </li>                 
                        </ul>
                </div>
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Interests</h3>
                        <ul className="list-disc list-inside text-gray-150 space-y-2">
                            <li>
                                Software Engineering
                            </li>
                            <li>
                                Product Management
                            </li>
                            <li>
                                Cyber Security
                            </li> 
                            <li>
                                FinTech Industry
                            </li> 
                            <li>
                                BioTech Industry
                            </li>                   
                        </ul>
                </div>
                
            </div>   

        </div>
        </RevealOnScroll>
    </section>
}
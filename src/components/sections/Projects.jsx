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
                <div className="p-6 rounded-xl border border-[#C3D1B8] hover:-translate-y-1 hover:border-[#C3D1B8]
                                hover:shadow-[0_2px_8px_4gba(59,130,246,0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2 text-[#5A6C57]"> Engineering Tutor (Sept. 2023 - Current)</h3>
                    <p className="text-gray-400 mb-4"> 
                    Tutor up to 3 students in Computer Science and Math fundamentals, conducting tailored 2-hour weekly sessions, 
                    resulting in significant comprehension improvement and heightened 
                    problem-solving confidence.
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

                <div className="p-6 rounded-xl border border-[#C3D1B8] hover:-translate-y-1 hover:border-[#C3D1B8]
                                hover:shadow-[0_2px_8px_4gba(59,130,246,0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2 text-[#5A6C57]"> Neuroimaging Research Assistant (Sept. 2023 - May 2024)</h3>
                    <p className="text-gray-400 mb-4"> 
                    The lab focused on using neuroimaging to study multiple sclerosis. I developed a machine learning model that helped improved 
                    diagnostic accuracy when analyzing MRI scan images. I collaborated with individuals from different backgrounds and improved my oral 
                    and written communication skills when working on a long term project.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["Python", "Bash", "Collaboration", "Communication"].map((tech,key) => (
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

                <div className="p-6 rounded-xl border border-[#C3D1B8] hover:-translate-y-1 hover:border-[#C3D1B8]
                                hover:shadow-[0_2px_8px_4gba(59,130,246,0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2 text-[#5A6C57]"> Software Engineer Intern (May 2023 - August 2023) </h3>
                    <p className="text-gray-400 mb-4"> 
                    Collaborated with interns in the development of a roommate search feature using React.js to help match and 
                    connect students of similar interests, habits, and locations. I also helped improved the password reset process 
                    for users, providing a smooth and secure experience when recovering an account.
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
                <div className="p-6 rounded-xl border border-[#C3D1B8] hover:-translate-y-1 hover:border-[#C3D1B8]
                                hover:shadow-[0_2px_8px_4gba(59,130,246,0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2 text-[#5A6C57]"> Workout Tracker </h3>
                    <p className="text-gray-400 mb-4"> 
                        Developed a personalized workout tracker application utilizing HTML/CSS and 
                        JavaScript. Users were allowed to create an account and look at past workout activity which was 
                        driven by PHP and MySQL.

                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["JavaScript", "HTML/CSS", "PHP", "MySQL"].map((tech,key) => (
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

                <div className="p-6 rounded-xl border border-[#C3D1B8] hover:-translate-y-1 hover:border-[#C3D1B8]
                                hover:shadow-[0_2px_8px_4gba(59,130,246,0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2 text-[#5A6C57]"> MATE ROV Underwater Robotics </h3>
                    <p className="text-gray-400 mb-4"> 
                        Led the software team in assisting in the creation of an underwater remote operating vehicle to 
                        participate in the MATE ROV Underwater Robotics competition. Our team focused on software related 
                        tasks such as data retrieval and developing 3D photogrammetry models.

                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["Python", "Data Analysis", "Photogrammetry"].map((tech,key) => (
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

                <div className="p-6 rounded-xl border border-[#C3D1B8] hover:-translate-y-1 hover:border-[#C3D1B8]
                                hover:shadow-[0_2px_8px_4gba(59,130,246,0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2 text-[#5A6C57]"> AI Enabled Robot: Pupper </h3>
                    <p className="text-gray-400 mb-4"> 
                        Worked on an AI enabled robot where I helped develop a ball tracking simulation that tracks and 
                        moves the robot along the direction of a moving tennis ball.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["Python"].map((tech,key) => (
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
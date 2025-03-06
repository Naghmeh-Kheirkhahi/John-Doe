import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import johnDoeImg from "../Assets/Images/about-banner.png";

function About() {

    const { theme } = useContext(ThemeContext);

    return (
        <div className="mt-64 p-8" id="about">
            <div className="mx-64 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2">
                    <img src={johnDoeImg} alt="John Doe" className="w-full h-auto" />
                </div>
                <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0 flex items-start">
                    <div className="flex flex-col items-center justify-center mt-8">
                        <p className={`text-2xl text-center transform -rotate-90 mb-16 w-40 ${theme === 'light' ? 'text-neutral-600' : 'text-neutral-400 '}`}>ABOUT ME</p>
                        <div className={`w-1 h-24 ${theme === 'light' ? ' bg-neutral-600' : ' bg-neutral-400'}`}></div>
                    </div>
                    <div>
                        <h1 className={`text-6xl font-bold mb-12 leading-snug ${theme === 'light' ? 'text-neutral-800' : 'text-white'}`}>Need a Creative Product? I can Help You!</h1>
                        <p className={`mb-12 text-2xl leading-relaxed ${theme === 'light' ? 'text-neutral-600' : 'text-neutral-400 '}`}>
                            Hi! I’m Johndoe Reacher, and I’m a developer who has passion for building clean web applications with intuitive functionalities. I enjoy the process of turning ideas into reality using creative solutions. I’m always curious about learning new skills, tools, and concepts. In addition to working on various solo full stack projects, I have worked with creative teams, which involves daily stand-ups and communications, source control, and project management.
                        </p>
                        <div className="flex space-x-8">
                            <button className="text-2xl font-bold bg-orange-400 text-neutral-800 border-2 border-orange-400 px-10 py-4 rounded-lg transition duration-300 hover:bg-orange-500 hover:border-orange-500">
                                HIRE ME
                            </button>
                            <button className={`text-2xl font-bold border-2 px-10 py-4 rounded-lg transition duration-300 ${theme === 'light' ? 'text-neutral-800 border-neutral-800 hover:bg-neutral-800 hover:text-white' : ' text-white border-white hover:bg-white hover:text-neutral-800'}`}>
                                DOWNLOAD CV
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
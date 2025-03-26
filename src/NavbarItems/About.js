import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import johnDoeImg from "../Assets/Images/about-banner.png";

function About() {

    const { theme } = useContext(ThemeContext);

    return (
        <div className="w-5/6 mx-auto mt-40 xl:mt-56 2xl:mt-72" id="about">
            <div className="2xl:mx-24 flex flex-col md:flex-row items-center">
                <div className="w-2/3 mx-auto md:1/3 lg:w-1/2 mb-8 md:mb-0">
                    <img src={johnDoeImg} alt="John Doe" className="w-full h-auto" />
                </div>
                <div className="w-full md:2/3 lg:w-1/2 pr-14 pl-6 md:px-0 flex items-start">
                    <div className="flex flex-col items-center justify-center mt-8">
                        <p className={`text-sm xl:text-lg 2xl:text-2xl text-center transform -rotate-90 mb-8 xl:mb-12 2xl:mb-16 w-20 md:w-28 xl:w-40 ${theme === 'light' ? 'text-neutral-600' : 'text-neutral-400 '}`}>ABOUT ME</p>
                        <div className={`w-1 h-16 md:h-20 xl:h-24 ${theme === 'light' ? ' bg-neutral-600' : ' bg-neutral-400'}`}></div>
                    </div>
                    <div>
                        <h1 className={`text-2xl xl:text-4xl 2xl:text-6xl font-bold mb-4 xl:mb-8 2xl:mb-12 leading-snug ${theme === 'light' ? 'text-neutral-800' : 'text-white'}`}>Need a Creative Product? I can Help You!</h1>
                        <p className={`text-sm xl:text-lg 2xl:text-2xl mb-4 xl:mb-8 2xl:mb-12 leading-relaxed ${theme === 'light' ? 'text-neutral-600' : 'text-neutral-400 '}`}>
                            Hi! I’m Johndoe Reacher, and I’m a developer who has passion for building clean web applications with intuitive functionalities. I enjoy the process of turning ideas into reality using creative solutions. I’m always curious about learning new skills, tools, and concepts. In addition to working on various solo full stack projects, I have worked with creative teams, which involves daily stand-ups and communications, source control, and project management.
                        </p>
                        <div className="flex space-x-4 2xl:space-x-8">
                            <button className="text-sm xl:text-md 2xl:text-2xl font-bold bg-orange-400 text-neutral-800 border-2 border-orange-400 px-6 xl:px-8 2xl:px-10 py-2 xl:py-3 2xl:py-4 rounded-lg transition duration-300 hover:bg-orange-500 hover:border-orange-500">
                                HIRE ME
                            </button>
                            <button className={`text-sm xl:text-md 2xl:text-2xl font-bold border-2 px-6 xl:px-8 2xl:px-10 py-2 xl:py-3 2xl:py-4 rounded-lg transition duration-300 ${theme === 'light' ? 'text-neutral-800 border-neutral-800 hover:bg-neutral-800 hover:text-white' : ' text-white border-white hover:bg-white hover:text-neutral-800'}`}>
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
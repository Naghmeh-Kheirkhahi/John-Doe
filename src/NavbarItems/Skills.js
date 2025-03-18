import React, { useState, useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import html5 from "../Assets/Images/html5.png";
import css3 from "../Assets/Images/css3.png";
import javascript from "../Assets/Images/javascript.png";
import typescript from "../Assets/Images/typescript.png";
import jquery from "../Assets/Images/jquery.png";
import bootstrap from "../Assets/Images/bootstrap.png";
import angular from "../Assets/Images/angular.png";
import react from "../Assets/Images/react.png";
import vue from "../Assets/Images/vue.png";
import firebase from "../Assets/Images/firebase.png";
import pugjs from "../Assets/Images/pugjs.png";
import sass from "../Assets/Images/sass.png";
import next from "../Assets/Images/next.png";
import tailwind from "../Assets/Images/tailwind.png";
import gsap from "../Assets/Images/gsap.png";
import ajax from "../Assets/Images/ajax.png";
import gulp from "../Assets/Images/gulp.png";
import webpack from "../Assets/Images/webpack.png";
import git from "../Assets/Images/git.png";
import npm from "../Assets/Images/npm.png";
import command from "../Assets/Images/command.png";
import vscode from "../Assets/Images/vs-code.png";
import trello from "../Assets/Images/trello.png";
import clickup from "../Assets/Images/clickup.png";
import slack from "../Assets/Images/slack.png";
import photoshop from "../Assets/Images/photoshop.png";
import adobexd from "../Assets/Images/adobe-xd.png";
import figma from "../Assets/Images/figma.png";
import eslint from "../Assets/Images/eslint.png";
import postman from "../Assets/Images/postman.png";

function Skills() {
    const [activeTab, setActiveTab] = useState("skills");
    const { theme } = useContext(ThemeContext);

    const skillsIcons = [
        { src: html5, name: "HTML5" },
        { src: css3, name: "CSS3" },
        { src: javascript, name: "JavaScript" },
        { src: typescript, name: "TypeScript" },
        { src: jquery, name: "jQuery" },
        { src: bootstrap, name: "Bootstrap" },
        { src: angular, name: "Angular" },
        { src: react, name: "React" },
        { src: vue, name: "Vue" },
        { src: firebase, name: "Firebase" },
        { src: pugjs, name: "PugJS" },
        { src: sass, name: "Sass" },
        { src: next, name: "Next.js" },
        { src: tailwind, name: "Tailwind" },
        { src: gsap, name: "GSAP" },
    ];

    const toolsIcons = [
        { src: ajax, name: "AJAX" },
        { src: gulp, name: "Gulp" },
        { src: webpack, name: "Webpack" },
        { src: git, name: "Git" },
        { src: npm, name: "NPM" },
        { src: command, name: "Command Line" },
        { src: vscode, name: "VS Code" },
        { src: trello, name: "Trello" },
        { src: clickup, name: "ClickUp" },
        { src: slack, name: "Slack" },
        { src: photoshop, name: "Photoshop" },
        { src: adobexd, name: "Adobe XD" },
        { src: figma, name: "Figma" },
        { src: eslint, name: "ESLint" },
        { src: postman, name: "Postman" },
    ];

    return (
        <div className="w-5/6 mx-16 2xl:mx-auto mt-40 md:mt-24 xl:mt-40 2xl:mt-64" id="skills">
            <div className="2xl:mx-24 flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 mb-4 sm:mb-8 md:mb-0 px-8 md:pr-4 flex items-start">
                    <div className="flex flex-col items-center justify-center mt-8">
                        <p className={`text-sm xl:text-lg 2xl:text-2xl text-center transform -rotate-90 mb-8 xl:mb-12 2xl:mb-16 w-20 md:w-28 xl:w-40 ${theme === 'light' ? 'text-neutral-600' : 'text-neutral-400 '}`}>MY SKILLS</p>
                        <div className={`w-1 h-16 md:h-20 xl:h-24 ${theme === 'light' ? ' bg-neutral-600' : ' bg-neutral-400'}`}></div>
                    </div>
                    <div>
                        <h1 className={`text-2xl xl:text-4xl 2xl:text-6xl font-bold mb-4 xl:mb-8 2xl:mb-12 leading-snug ${theme === 'light' ? 'text-neutral-800' : 'text-white'}`}>What My Programming Skills Included?</h1>
                        <p className={`text-sm xl:text-lg 2xl:text-2xl mb-4 xl:mb-8 2xl:mb-12 leading-relaxed ${theme === 'light' ? 'text-neutral-600' : 'text-neutral-400 '}`}>I develop simple, intuitive and responsive user interface that helps users get things done with less effort and time with those technologies.
                        </p>

                        <div className={`rounded-full p-1 2xl:p-2 w-50 mr-24 sm:mr-32 md:mr-8 lg:mr-24 xl:mr-32 2xl:mr-64 ${theme === 'light' ? 'bg-white' : 'bg-neutral-800'}`}>
                            <div className={`relative flex rounded-full ${theme === 'light' ? 'bg-white' : 'bg-neutral-800'}`}>
                                <div
                                    className={`absolute top-0 h-full w-1/2 bg-orange-400 rounded-3xl transition-all duration-500 ${activeTab === "skills" ? "left-0" : "left-1/2"
                                        }`}
                                ></div>
                                <button
                                    className={`relative flex-1 py-1 2xl:py-2 text-center z-10 text-sm lg:text-md xl:text-lg 2xl:text-2xl font-bold transition-all duration-500 ${theme === 'light' ? 'text-neutral-800' : 'text-white'}`}
                                    onClick={() => setActiveTab("skills")}
                                >
                                    Skills
                                </button>
                                <button
                                    className={`relative flex-1 py-1 2xl:py-2 text-center z-10 ;text-sm lg:text-md xl:text-lg 2xl:text-2xl font-bold transition-all duration-500 ${theme === 'light' ? 'text-neutral-800' : 'text-white'}`}
                                    onClick={() => setActiveTab("tools")}
                                >
                                    Tools
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full mx-auto md:w-1/2 px-20 md:pl-24 md:pr-0 lg:pl-32 xl:pl-40 2xl:pl-32 mt-8 mb-16">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="grid grid-cols-5 gap-3 sm:gap-4 md:gap-2 lg:gap-3 2xl:gap-5"
                        >
                            {(activeTab === "skills" ? skillsIcons : toolsIcons).map((icon, index) => (
                                <div
                                    key={index}
                                    className={`relative p-3 sm:p-4 md:p-2 xl:p-3 2xl:p-6 rounded-2xl flex items-center justify-center ${theme === 'light' ? 'bg-white' : 'bg-neutral-800'}`}
                                >
                                    <img src={icon.src} alt={icon.name} className="w-full" />
                                    <motion.div
                                        className="absolute inset-0 flex items-center justify-center rounded-2xl cursor-pointer"
                                        initial={{ opacity: 0, y: -20 }}
                                        whileHover={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <span className="text-white text-center text-2xl font-bold px-3 py-1 bg-orange-400 border border-orange-400 rounded-lg mb-32">
                                            {icon.name}
                                        </span>
                                    </motion.div>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}

export default Skills;
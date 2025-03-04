import React, { useState } from "react";
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
        <div className="bg-black mt-64 p-8" id="skills">
            <div className="mx-64 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-4 mt-8 md:mt-0 flex items-start">
                    <div className="flex flex-col items-center justify-center mt-8">
                        <p className="text-2xl text-neutral-400 text-center transform -rotate-90 mb-16 w-40">MY SKILLS</p>
                        <div className="w-1 h-24 bg-neutral-400"></div>
                    </div>
                    <div>
                        <h1 className="text-6xl text-white font-bold mb-12 leading-snug">What My Programming Skills Included?</h1>
                        <p className="mb-12 text-2xl text-neutral-400 leading-relaxed">
                            I develop simple, intuitive and responsive user interface that helps users get things done with less effort and time with those technologies.
                        </p>

                        <div className="bg-neutral-800 rounded-full p-2 w-50 mr-64">
                            <div className="relative flex bg-neutral-800 rounded-full">
                                <div
                                    className={`absolute top-0 h-full w-1/2 bg-orange-400 rounded-3xl transition-all duration-500 ${activeTab === "skills" ? "left-0" : "left-1/2"
                                        }`}
                                ></div>
                                <button
                                    className="relative flex-1 py-2 text-center z-10 text-2xl font-bold text-white transition-all duration-500"
                                    onClick={() => setActiveTab("skills")}
                                >
                                    Skills
                                </button>
                                <button
                                    className="relative flex-1 py-2 text-center z-10 text-2xl font-bold text-white transition-all duration-500"
                                    onClick={() => setActiveTab("tools")}
                                >
                                    Tools
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 pl-32 mt-8 mb-16">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="grid grid-cols-5 gap-5"
                        >
                            {(activeTab === "skills" ? skillsIcons : toolsIcons).map((icon, index) => (
                                <div
                                    key={index}
                                    className='relative bg-neutral-800 p-6 rounded-2xl flex items-center justify-center'
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
import React, { useState } from "react";
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
import tailwindcss from "../Assets/Images/tailwindcss.png";
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
        html5,
        css3,
        javascript,
        typescript,
        jquery,
        bootstrap,
        angular,
        react,
        vue,
        firebase,
        pugjs,
        sass,
        next,
        tailwindcss,
        gsap,
    ];

    const toolsIcons = [
        ajax,
        gulp,
        webpack,
        git,
        npm,
        command,
        vscode,
        trello,
        clickup,
        slack,
        photoshop,
        adobexd,
        figma,
        eslint,
        postman,
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

                        <div className="flex items-center">
                            <button className="rounded-full px-3 py-2 border border-neutral-800 bg-neutral-800">
                                <button
                                    className={`text-white font-bold text-2xl px-8 py-2 rounded-full border ${activeTab === "skills" ? "bg-orange-400 border-orange-400" : "bg-neutral-800 border-neutral-800"}`}
                                    onClick={() => setActiveTab("skills")}
                                >
                                    Skills
                                </button>
                                <button
                                    className={`text-white font-bold text-2xl px-8 py-2 rounded-full border ${activeTab === "tools" ? "bg-orange-400 border-orange-400" : "bg-neutral-800 border-neutral-800"}`}
                                    onClick={() => setActiveTab("tools")}
                                >
                                    Tools
                                </button>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 pl-32 grid grid-cols-5 gap-5 mt-8 mb-16">
                    {(activeTab === "skills" ? skillsIcons : toolsIcons).map((icon, index) => (
                        <div
                            key={index}
                            className='bg-neutral-800 p-6 rounded-2xl flex items-center justify-center'
                        >
                            <img src={icon} alt={`Icon ${index + 1}`} className="w-full" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;
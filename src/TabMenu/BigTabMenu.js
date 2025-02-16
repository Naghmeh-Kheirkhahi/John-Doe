import React, { useState } from "react";
import './TabMenu.css';

function BigTabMenu() {
    const [activeTab, setActiveTab] = useState("dashboard");

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <>
            <div className="w-full">
                <div className="relative right-0">
                    <ul className="relative flex flex-wrap list-none rounded-md bg-cyan-400" data-tabs="tabs" role="list">
                        <li className="z-30 flex-auto text-center">
                            <a
                                className={`z-30 flex items-center justify-center text-2xl font-extrabold w-full px-0 py-6 mb-0 transition-all ease-in-out duration-400 border-0 rounded-none cursor-pointer ${activeTab === "dashboard" ? "text-cyan-900 border-b-4 border-cyan-600" : "text-cyan-700"}`}
                                data-tab-target="dashboard"
                                role="tab"
                                aria-selected={activeTab === "dashboard"}
                                aria-controls="dashboard"
                                onClick={() => handleTabClick("dashboard")}
                            >
                                Dashboard
                            </a>
                        </li>
                        <li className="z-30 flex-auto text-center">
                            <a
                                className={`z-30 flex items-center justify-center text-2xl font-extrabold w-full px-0 py-6 mb-0 transition-all ease-in-out duration-400 border-0 rounded-none cursor-pointer ${activeTab === "profile" ? "text-cyan-900 border-b-4 border-cyan-600" : "text-cyan-700"}`}
                                data-tab-target="profile"
                                role="tab"
                                aria-selected={activeTab === "profile"}
                                aria-controls="profile"
                                onClick={() => handleTabClick("profile")}
                            >
                                Profile
                            </a>
                        </li>
                        <li className="z-30 flex-auto text-center">
                            <a
                                className={`z-30 flex items-center justify-center text-2xl font-extrabold w-full px-0 py-6 mb-0 transition-all ease-in-out duration-400 border-0 rounded-none cursor-pointer ${activeTab === "settings" ? "text-cyan-900 border-b-4 border-cyan-600" : "text-cyan-700"}`}
                                data-tab-target="settings"
                                role="tab"
                                aria-selected={activeTab === "settings"}
                                aria-controls="settings"
                                onClick={() => handleTabClick("settings")}
                            >
                                Settings
                            </a>
                        </li>
                    </ul>

                    <div data-tab-content="" className="p-16 text-center font-bold text-3xl text-orange-600">
                        <div id="dashboard" role="tabpanel" className={`${activeTab === "dashboard" ? "block" : "hidden"}`}>
                            <p>
                                Because it&apos;s about motivating the doers. Because I&apos;m
                                here to follow my dreams and inspire other people to follow their
                                dreams, too.
                            </p>
                        </div>
                        <div id="profile" role="tabpanel" className={`${activeTab === "profile" ? "block" : "hidden"}`}>
                            <p>
                                The reading of all good books is like a conversation with the
                                finest minds of past centuries.
                            </p>
                        </div>
                        <div id="settings" role="tabpanel" className={`${activeTab === "settings" ? "block" : "hidden"}`}>
                            <p>
                                Comparing yourself to others is the thief of joy.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BigTabMenu;
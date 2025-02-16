import React, { useState, useEffect, useRef } from "react";

function VerticalTabIcons() {
    const [activeTab, setActiveTab] = useState("tab-vertical-dashboard");
    const [indicatorStyle, setIndicatorStyle] = useState({});
    const tabRefs = useRef([]);

    const handleTabClick = (tabId, index) => {
        setActiveTab(tabId);
        const tabElement = tabRefs.current[index];
        setIndicatorStyle({
            height: tabElement.offsetHeight - 8, // Adjust height for padding
            width: tabElement.offsetWidth - 8, // Adjust width for padding
            top: tabElement.offsetTop + 4, // Adjust top for padding
            left: tabElement.offsetLeft + 4, // Adjust left for padding
        });
    };

    useEffect(() => {
        const initialTab = tabRefs.current[0];
        setIndicatorStyle({
            height: initialTab.offsetHeight - 8, // Adjust height for padding
            width: initialTab.offsetWidth - 8, // Adjust width for padding
            top: initialTab.offsetTop + 4, // Adjust top for padding
            left: initialTab.offsetLeft + 4, // Adjust left for padding
        });
    }, []);

    return (
        <>
            <div className="flex mt-10 w-6/12">
                <div role="tablist" className="relative bg-red-500 rounded-lg flex flex-col p-3 w-10/12 mt-16 mb-16"> 
                    <div
                        className="absolute bg-yellow-300 border border-yellow-400 rounded-lg transition-all duration-300"
                        style={indicatorStyle}
                    ></div>
                    <a
                        href="#"
                        ref={(el) => (tabRefs.current[0] = el)}
                        className={`tab-link flex items-center text-2xl font-extrabold px-5 py-5 relative cursor-pointer ${activeTab === "tab-vertical-dashboard" ? "active text-gray-700" : "text-gray-50"}`}
                        data-dui-tab-target="tab-vertical-dashboard"
                        role="tab"
                        aria-selected={activeTab === "tab-vertical-dashboard"}
                        onClick={() => handleTabClick("tab-vertical-dashboard", 0)}
                    >
                        <svg width="1.5em" height="1.5em" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" className="mr-2 h-7 w-7">
                            <path d="M21 7.35304L21 16.647C21 16.8649 20.8819 17.0656 20.6914 17.1715L12.2914 21.8381C12.1102 21.9388 11.8898 21.9388 11.7086 21.8381L3.30861 17.1715C3.11814 17.0656 3 16.8649 3 16.647L2.99998 7.35304C2.99998 7.13514 3.11812 6.93437 3.3086 6.82855L11.7086 2.16188C11.8898 2.06121 12.1102 2.06121 12.2914 2.16188L20.6914 6.82855C20.8818 6.93437 21 7.13514 21 7.35304Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M3.52844 7.29357L11.7086 11.8381C11.8898 11.9388 12.1102 11.9388 12.2914 11.8381L20.5 7.27777" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M12 21L12 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M11.6914 11.8285L3.89139 7.49521C3.49147 7.27304 3 7.56222 3 8.01971V16.647C3 16.8649 3.11813 17.0656 3.30861 17.1715L11.1086 21.5048C11.5085 21.727 12 21.4378 12 20.9803V12.353C12 12.1351 11.8819 11.9344 11.6914 11.8285Z" fill="currentColor" stroke="currentColor" strokeLinejoin="round"></path>
                        </svg> Dashboard
                    </a>
                    <a
                        href="#"
                        ref={(el) => (tabRefs.current[1] = el)}
                        className={`tab-link flex items-center text-2xl font-extrabold px-5 py-5 text-gray-700 relative cursor-pointer ${activeTab === "tab-vertical-profile" ? "active text-gray-700" : "text-gray-50"}`}
                        data-dui-tab-target="tab-vertical-profile"
                        role="tab"
                        aria-selected={activeTab === "tab-vertical-profile"}
                        onClick={() => handleTabClick("tab-vertical-profile", 1)}
                    >
                        <svg width="1.5em" height="1.5em" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" className="mr-2 h-7 w-7">
                            <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M4.271 18.3457C4.271 18.3457 6.50002 15.5 12 15.5C17.5 15.5 19.7291 18.3457 19.7291 18.3457" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg> User Profile
                    </a>
                    <a
                        href="#"
                        ref={(el) => (tabRefs.current[2] = el)}
                        className={`tab-link flex items-center text-2xl font-extrabold px-5 py-5 text-gray-700 relative cursor-pointer ${activeTab === "tab-vertical-settings" ? "active text-gray-700" : "text-gray-50"}`}
                        data-dui-tab-target="tab-vertical-settings"
                        role="tab"
                        aria-selected={activeTab === "tab-vertical-settings"}
                        onClick={() => handleTabClick("tab-vertical-settings", 2)}
                    >
                        <svg width="1.5em" height="1.5em" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" className="mr-2 h-7 w-7">
                            <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M19.6224 10.3954L18.5247 7.7448L20 6L18 4L16.2647 5.48295L13.5578 4.36974L12.9353 2H10.981L10.3491 4.40113L7.70441 5.51596L6 4L4 6L5.45337 7.78885L4.3725 10.4463L2 11V13L4.40111 13.6555L5.51575 16.2997L4 18L6 20L7.79116 18.5403L10.397 19.6123L11 22H13L13.6045 19.6132L16.2551 18.5155C16.6969 18.8313 18 20 18 20L20 18L18.5159 16.2494L19.6139 13.598L21.9999 12.9772L22 11L19.6224 10.3954Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg> Settings
                    </a>
                </div>
                <div id="tab-vertical-dashboard" className={`tab-content w-full text-amber-700 text-4xl font-bold mt-36 ml-4 p-4 underline decoration-dotted decoration-amber-400 decoration-8 ${activeTab === "tab-vertical-dashboard" ? "block" : "hidden"}`}>Content Dashboard</div>
                <div id="tab-vertical-profile" className={`tab-content w-full text-amber-700 text-4xl font-bold mt-36 ml-4 p-4 underline decoration-dotted decoration-amber-400 decoration-8 ${activeTab === "tab-vertical-profile" ? "block" : "hidden"}`}>Content User Profile</div>
                <div id="tab-vertical-settings" className={`tab-content w-full text-amber-700 text-4xl font-bold mt-36 ml-4 p-4 underline decoration-dotted decoration-amber-400 decoration-8 ${activeTab === "tab-vertical-settings" ? "block" : "hidden"}`}>Content Settings</div>
            </div>
        </>
    );
}

export default VerticalTabIcons;
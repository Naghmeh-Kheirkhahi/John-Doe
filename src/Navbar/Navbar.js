
import React, { useContext } from "react";
import { FaMoon, FaCircle } from "react-icons/fa";
import { ThemeContext } from "../Context/ThemeContext";
import JDLogo from "../Assets/Images/JD logo.png";


function Navbar() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <>
            <div className="bg-black border-b border-black text-white border-b-gray-700">
                <div className="container mx-auto flex justify-between items-center py-3">
                    {/* Logo */}
                    <div className="text-center">
                        <img src={JDLogo} alt="JD Logo" className="w-28 rounded-full" />
                    </div>
                    {/* Navbar Items */}
                    <div className="flex space-x-8">
                        {["Home", "About", "Skills", "Portfolio", "Contact"].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-2xl font-extrabold relative group"
                            >
                                {item}
                                <span className="block h-1 bg-orange-500 absolute left-0 bottom-0 w-0 group-hover:w-full transition-all duration-300"></span>
                            </a>
                        ))}
                    </div>
                    {/* Theme Toggle Button */}
                    <div className="text-center text-2xl">
                        <label className="flex items-center cursor-pointer">
                            <div className="relative">
                                <input type="checkbox" className="sr-only" checked={theme === "light"} onChange={toggleTheme} />
                                <div className={`block w-16 h-10 rounded-full ${theme === "light" ? 'bg-blue-100' : 'bg-gray-800'}`}></div>
                                <div className="text-3xl dot absolute left-1 top-1 transition transform" style={{ transform: theme === "light" ? 'translateX(100%)' : 'translateX(0)' }}>
                                    {theme === "light" ? <FaCircle className="text-yellow-400"/> : <FaMoon className="text-yellow-100"/>}
                                </div>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
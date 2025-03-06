import React, { useContext, useState, useEffect } from "react";
import { FaMoon, FaCircle } from "react-icons/fa";
import { ThemeContext } from "../Context/ThemeContext";
import CreatoCraftLogo from "../Assets/Images/CreatoCraftLogo.png";

function Navbar() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 20) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScrollToSection = (e, id) => {
        e.preventDefault();
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div
            className={`fixed w-full z-10 transition-all duration-500 transform ${theme === "light"
                    ? scrolled
                        ? "bg-white translate-y-0"
                        : "bg-neutral-200 translate-y-2"
                    : scrolled
                        ? "bg-neutral-800 translate-y-0"
                        : "bg-black translate-y-2"
                }`}
        >
            <div className="container mx-auto flex justify-between items-center py-3">
                {/* Logo */}
                <div className="text-center">
                    <img src={CreatoCraftLogo} alt="JD Logo" className="w-28 rounded-full" />
                </div>
                {/* Navbar Items */}
                <div className="flex space-x-8">
                    {["Home", "About", "Skills", "Portfolio", "Contact"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            onClick={(e) => handleScrollToSection(e, item.toLowerCase())}
                            className={`text-2xl font-extrabold relative group ${theme === "light" ? "text-black" : "text-white"
                                }`}
                        >
                            {item}
                            <span className="block h-1 bg-orange-400 absolute left-0 bottom-0 w-0 group-hover:w-full transition-all duration-300"></span>
                        </a>
                    ))}
                </div>
                {/* Theme Toggle Button */}
                <div className="text-center text-2xl">
                    <label className="flex items-center cursor-pointer">
                        <div className="relative">
                            <input type="checkbox" className="sr-only" checked={theme === "light"} onChange={toggleTheme} />
                            <div className={`block w-16 h-10 rounded-full ${theme === "light"
                                    ? scrolled ? 'bg-neutral-200' : 'bg-white'
                                    : scrolled ? 'bg-black' : 'bg-neutral-800'
                                }`}></div>
                            <div className="text-3xl dot absolute left-1 top-1 transition transform" style={{ transform: theme === "light" ? 'translateX(100%)' : 'translateX(0)' }}>
                                {theme === "light" ? <FaCircle className="text-yellow-400" /> : <FaMoon className="text-yellow-100" />}
                            </div>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
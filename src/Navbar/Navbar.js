import React, { useContext, useState, useEffect } from "react";
import { FaMoon, FaCircle, FaBars, FaTimes } from "react-icons/fa";
import { ThemeContext } from "../Context/ThemeContext";
import CreatoCraftLogo from "../Assets/Images/CreatoCraftLogo.png";

function Navbar() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

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
        setMenuOpen(false); // Close the menu after clicking a link
    };

    return (
        <div
            className={`fixed w-full z-50 transition-all duration-500 transform ${theme === "light"
                ? scrolled
                    ? "bg-white translate-y-0"
                    : "bg-neutral-200 translate-y-2"
                : scrolled
                    ? "bg-neutral-800 translate-y-0"
                    : "bg-black translate-y-2"
                }`}
        >
            <div className="mx-16 sm:container sm:mx-auto flex justify-between items-center py-0 xl:py-3">
                {/* Logo */}
                <div className="text-center">
                    <img src={CreatoCraftLogo} alt="JD Logo" className="w-20 xl:w-28 rounded-full" />
                </div>
                {/* Hamburger Menu Button */}
                <div
                    className={`md:hidden text-2xl cursor-pointer ${theme === "light" ? (scrolled ? 'text-neutral-300' : 'text-neutral-200') : (scrolled ? 'text-neutral-600' : 'text-black')}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? '' : <FaBars />}
                </div>
                {/* Navbar Items */}
                <div className="hidden md:flex space-x-8">
                    {["Home", "About", "Skills", "Portfolio", "Contact"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            onClick={(e) => handleScrollToSection(e, item.toLowerCase())}
                            className={`text-xl xl:text-2xl font-extrabold relative group ${theme === "light" ? "text-neutral-800" : "text-white"
                                }`}
                        >
                            {item}
                            <span className="block h-1 bg-orange-400 absolute left-0 bottom-0 w-0 group-hover:w-full transition-all duration-300"></span>
                        </a>
                    ))}
                </div>
                {/* Theme Toggle Button */}
                <div className="text-center">
                    <label className="flex items-center cursor-pointer">
                        <div className="relative">
                            <input type="checkbox" className="sr-only" checked={theme === "light"} onChange={toggleTheme} />
                            <div className={`block w-14 xl:w-16 h-8 xl:h-10 rounded-full ${theme === "light"
                                ? scrolled ? 'bg-neutral-200' : 'bg-white'
                                : scrolled ? 'bg-black' : 'bg-neutral-800'
                                }`}></div>
                            <div className="text-2xl xl:text-3xl dot absolute left-1 top-1 transition transform" style={{ transform: theme === "light" ? 'translateX(100%)' : 'translateX(0)' }}>
                                {theme === "light" ? <FaCircle className="text-yellow-400" /> : <FaMoon className="text-yellow-100" />}
                            </div>
                        </div>
                    </label>
                </div>
            </div>
            {/* Mobile Menu */}
            {menuOpen && (
                <div className={`md:hidden py-4 px-20 sm:px-16 ${theme === "light" ? 'text-neutral-800' : 'text-white'} ${theme === "light" ? (scrolled ? 'bg-white' : 'bg-neutral-200') : (scrolled ? 'bg-neutral-800' : 'bg-black')}`}>

                    <div className="flex justify-end">
                        <FaTimes className={`text-2xl cursor-pointer ${theme === "light" ? (scrolled ? 'text-neutral-300' : 'text-neutral-200') : (scrolled ? 'text-neutral-600' : 'text-black')}`} onClick={() => setMenuOpen(false)} />
                    </div>
                    <div className="flex flex-col space-y-4 mt-4">
                        {["Home", "About", "Skills", "Portfolio", "Contact"].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                onClick={(e) => handleScrollToSection(e, item.toLowerCase())}
                                className="text-lg md:text-xl font-extrabold"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;
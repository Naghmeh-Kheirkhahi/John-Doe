import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import CreatoCraftLogo from "../Assets/Images/CreatoCraftLogo.png";

function Footer() {

    const { theme } = useContext(ThemeContext);

    return (
        <footer className={`py-2 ${theme === 'light' ? 'bg-white' : 'bg-neutral-800'}`}>
            <div className="container mx-auto flex justify-between items-center">
                {/* Left part: Logo */}
                <div className="flex items-center">
                    <img src={CreatoCraftLogo} alt="JD Logo" className="w-40" />
                </div>
                {/* Right part: Text */}
                <div className={`text-2xl ${theme === 'light' ? 'text-neutral-600' : 'text-neutral-400 '}`}>
                    <p>© 2025 <a href="https://www.linkedin.com/in/naghmeh-kheirkhahi-0ba42324b/" className={`no-underline ${theme === 'light' ? 'text-orange-500' : 'text-orange-400'}`}>Naghmeh Kheirkhahi</a>. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
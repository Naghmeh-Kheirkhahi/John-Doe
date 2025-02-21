import React from "react";
import JDLogo from "../Assets/Images/JD logo.png";

function Footer() {
    return (
        <footer className="bg-neutral-800 text-white py-2">
            <div className="container mx-auto flex justify-between items-center">
                {/* Left part: Logo */}
                <div className="flex items-center">
                    <img src={JDLogo} alt="JD Logo" className="w-40" />
                </div>
                {/* Right part: Text */}
                <div className="text-neutral-400 text-2xl">
                    <p>© 2025 <a href="https://www.linkedin.com/in/naghmeh-kheirkhahi-0ba42324b/" className="no-underline text-orange-400">Naghmeh Kheirkhahi</a>. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
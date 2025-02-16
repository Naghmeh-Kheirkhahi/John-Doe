import React from "react";

function NavbarTest() {
    return (
        <nav className="bg-gray-900 p-5">
            <div className="container flex items-center mx-auto">
                <div className="flex items-center w-5/6">
                    <img src="/flower logo.png" alt="Logo" className="w-20 mr-6 rounded-full" />
                    <ul className="flex space-x-12 text-xl font-semibold">
                        <li><a href="#" className="text-white hover:text-gray-300">Home</a></li>
                        <li><a href="#" className="text-white hover:text-gray-300">About Us</a></li>
                        <li><a href="#" className="text-white hover:text-gray-300">Contact Us</a></li>
                        <li><a href="#" className="text-white hover:text-gray-300">Products</a></li>
                        <li><a href="#" className="text-white hover:text-gray-300">Categories</a></li>
                        <li><a href="#" className="text-white hover:text-gray-300">Blog</a></li>
                    </ul>
                </div>
                <div className="relative w-1/6 items-center">
                    <input type="text" placeholder="Search..." className="pl-10 pr-5 py-3 rounded-lg bg-gray-700 text-lg text-white focus:outline-none focus:bg-gray-600" />
                    <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m1.4-5.65a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
            </div>
        </nav>
    );
}

export default NavbarTest;
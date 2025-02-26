
import React from "react";
import Introduction from "../Introduction/Introduction";
import About from "./About";
import Skills from "./Skills";


function Home() {
    return (
        <>
            <div className="bg-black" id="home">
                <div className="bg-home-bg bg-cover bg-center w-3/5 mx-auto h-screen flex items-center justify-center overflow-hidden">
                    <div className="text-center text-white">
                        <h1 className="text-7xl font-extrabold mt-64 mb-12 w-3/5 mx-auto leading-tight">We Design & Build Creative Products</h1>
                        <button className="text-3xl font-bold text-white py-4 px-6 border-2 border-white rounded-md hover:bg-white hover:text-black transition duration-500">GET IN TOUCH</button>
                        {/* $$$$$$dont forget to link this button to the contact part$$$$$ */}
                    </div>
                </div>

                <Introduction />
                <About />
                <Skills />
            </div>
        </>
    );
}

export default Home;
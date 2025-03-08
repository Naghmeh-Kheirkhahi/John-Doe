import React, { useRef, useState, useEffect, useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { FaArrowUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Introduction from "../Introduction/Introduction";
import About from "./About";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

function Home() {
    const { theme } = useContext(ThemeContext);
    const contactRef = useRef(null);
    const [showArrow, setShowArrow] = useState(false);

    const scrollToContact = () => {
        contactRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const handleScroll = () => {
        if (window.scrollY > 300) {
            setShowArrow(true);
        } else {
            setShowArrow(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <div className={`pt-10 md:pt-20 ${theme === 'light' ? 'bg-neutral-200' : 'bg-black'}`} id="home">
                <div className="bg-home-bg bg-contain bg-center bg-no-repeat h-screen flex items-center justify-center overflow-hidden">
                    <div className="text-center text-white">
                        <h1 className="w-3/5 font-extrabold mx-auto leading-tight text-4xl md:text-5xl xl:text-7xl mt-32 xl:mt-56 mb-8 xl:mb-12">
                            We Design & Build Creative Products
                        </h1>
                        <button
                            className="text-xl md:text-2xl xl:text-3xl font-bold text-white py-2 xl:py-4 px-4 xl:px-6 border-2 border-white rounded-md hover:bg-white hover:text-black transition duration-500"
                            onClick={scrollToContact}
                        >
                            GET IN TOUCH
                        </button>
                        {/* we could have put a <a> tag instead of <button> with text-decoration-none class as well as the button's classes and we did not need to write a ref id for the Contact tag. So, this way could have work like the way we have done but it would have been easier way. */}
                    </div>
                </div>

                <Introduction />
                <About />
                <Skills />
                <Portfolio />
                <div ref={contactRef}>
                    <Contact />
                </div>

                <AnimatePresence>
                    {showArrow && (
                        <motion.div
                            className={`hidden lg:block fixed bottom-8 right-8 p-5 border-4 rounded-full cursor-pointer ${theme === "light" ? "border-neutral-900 text-neutral-900" : "border-white text-white"}`}
                            onClick={scrollToTop}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 50 }}
                            transition={{ duration: 0.5 }}
                        >
                            <FaArrowUp className="text-2xl" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}

export default Home;
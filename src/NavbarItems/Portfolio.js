import React, { useState, useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import portfolio1 from '../Assets/Images/Portfolio1.png';
import portfolio2 from '../Assets/Images/Portfolio2.png';
import portfolio3 from '../Assets/Images/Portfolio3.png';
import portfolio4 from '../Assets/Images/Portfolio4.png';
import portfolio5 from '../Assets/Images/Portfolio5.png';
import portfolio6 from '../Assets/Images/Portfolio6.png';
import portfolio7 from '../Assets/Images/Portfolio7.png';

function Portfolio() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const { theme } = useContext(ThemeContext);

    const images = [
        { src: portfolio1, col: 2, row: 1 },
        { src: portfolio2, col: 3, row: 1 },
        { src: portfolio3, col: 1, row: 2 },
        { src: portfolio4, col: 2, row: 2 },
        { src: portfolio5, col: 3, row: 2 },
        { src: portfolio6, col: 1, row: 3 },
        { src: portfolio7, col: 2, row: 3 },
    ];

    return (
        <div className="2xl:w-4/5 pl-32 md:pl-10 2xl:pl-24 pr-28 md:pr-24 2xl:pr-16 md:mx-16 2xl:mx-auto mt-16 md:mt-24 xl:mt-40 2xl:mt-64" id="portfolio">
            <div className="flex gap-4">
                {/* First Column */}
                <div className="w-1/3 flex flex-col gap-4">
                    <div className="flex items-center justify-center mt-8">
                        <div className="flex flex-col items-center justify-center">
                            <p className={`text-sm xl:text-lg 2xl:text-2xl text-center transform -rotate-90 mb-8 xl:mb-12 2xl:mb-16 w-20 md:w-28 xl:w-40 ${theme === 'light' ? 'text-neutral-600' : 'text-neutral-400 '}`}>MY WORKS</p>
                            <div className={`w-1 h-16 md:h-20 xl:h-24 ${theme === 'light' ? ' bg-neutral-600' : ' bg-neutral-400'}`}></div>
                        </div>
                        <div>
                            <h1 className={`text-2xl xl:text-4xl 2xl:text-6xl font-bold mb-4 xl:mb-8 2xl:mb-12 leading-snug ${theme === 'light' ? 'text-neutral-800' : 'text-white'}`}>See My Works Which Will Amaze You!</h1>
                            <p className={`text-sm xl:text-lg 2xl:text-2xl mb-4 xl:mb-8 2xl:mb-12 leading-relaxed ${theme === 'light' ? 'text-neutral-600' : 'text-neutral-400 '}`}>We develop the best quality website that serves for the long-term. Well-documented, clean, easy and elegant interface helps any non-technical clients.</p>
                        </div>
                    </div>
                    {images.filter(img => img.col === 1).map((img, index) => (
                        <div
                            key={index}
                            className="relative flex items-center justify-center p-2 cursor-pointer"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <img src={img.src} alt={`Portfolio ${index + 1}`} className="w-full object-contain rounded-2xl" />
                            <AnimatePresence>
                                {hoveredIndex === index && (
                                    <>
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.5 }}
                                            className="mt-40 text-2xl font-bold absolute bg-white text-neutral-800 border border-white px-2 py-1 rounded-lg"
                                        >
                                            Image {index + 1}
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.5 }}
                                            className="mt-64 text-2xl font-bold absolute bg-white text-neutral-800 border border-white px-2 py-1 rounded-lg"
                                        >
                                            March 2025
                                        </motion.div>
                                    </>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
                {/* Second Column */}
                <div className="w-1/3 flex flex-col gap-4">
                    {images.filter(img => img.col === 2).map((img, index) => (
                        <div
                            key={index}
                            className="relative flex items-center justify-center p-2 cursor-pointer"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <img src={img.src} alt={`Portfolio ${index + 1}`} className="w-full object-contain rounded-2xl" />
                            <AnimatePresence>
                                {hoveredIndex === index && (
                                    <>
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.5 }}
                                            className="mt-40 text-2xl font-bold absolute bg-white text-neutral-800 border border-white px-2 py-1 rounded-lg"
                                        >
                                            Image {index + 1}
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.5 }}
                                            className="mt-64 text-2xl font-bold absolute bg-white text-neutral-800 border border-white px-2 py-1 rounded-lg"
                                        >
                                            March 2025
                                        </motion.div>
                                    </>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
                {/* Third Column */}
                <div className="w-1/3 flex flex-col gap-4">
                    {images.filter(img => img.col === 3).map((img, index) => (
                        <div
                            key={index}
                            className="relative flex items-center justify-center p-2 cursor-pointer"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <img src={img.src} alt={`Portfolio ${index + 1}`} className="w-full object-contain rounded-2xl" />
                            <AnimatePresence>
                                {hoveredIndex === index && (
                                    <>
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.5 }}
                                            className="mt-40 text-2xl font-bold absolute bg-white text-neutral-800 border border-white px-2 py-1 rounded-lg"
                                        >
                                            Image {index + 1}
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.5 }}
                                            className="mt-64 text-2xl font-bold absolute bg-white text-neutral-800 border border-white px-2 py-1 rounded-lg"
                                        >
                                            March 2025
                                        </motion.div>
                                    </>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                    <div className="flex items-center justify-center">
                        <a href="#" className={`text-sm sm:text-md md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold underline ${theme === 'light' ? 'text-orange-500' : 'text-orange-400'}`}>Load more work</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
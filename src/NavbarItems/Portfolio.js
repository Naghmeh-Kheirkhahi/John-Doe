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

    const mobileImages = [
        portfolio1, portfolio2, portfolio3, portfolio4,
        portfolio5, portfolio6, portfolio7
    ];


    return (
        <div className="w-5/6 mx-auto mt-40 xl:mt-56 2xl:mt-72" id="portfolio">
            <div className="hidden lg:flex lg:gap-3 lg:gap-4 lg:-ml-12 xl:-ml-16 xl:-mr-2 2xl:mr-28 2xl:ml-8">
                {/* First Column */}
                <div className="lg:w-1/3 lg:flex lg:flex-col gap-3 lg:gap-4">
                    <div className="flex items-center justify-center lg:mt-5 2xl:mt-10">
                        <div className="flex flex-col items-center justify-center mt-12 lg:-mt-8 xl:-mt-32">
                            <p className={`text-sm xl:text-lg 2xl:text-2xl text-center transform -rotate-90 mb-8 xl:mb-12 2xl:mb-16 w-20 md:w-28 xl:w-40 ${theme === 'light' ? 'text-neutral-600' : 'text-neutral-400 '}`}>MY WORKS</p>
                            <div className={`w-1 h-16 md:h-20 xl:h-24 ${theme === 'light' ? ' bg-neutral-600' : ' bg-neutral-400'}`}></div>
                        </div>
                        <div>
                            <h1 className={`text-2xl xl:text-4xl 2xl:text-6xl font-bold mb-4 xl:mb-8 2xl:mb-12 leading-snug ${theme === 'light' ? 'text-neutral-800' : 'text-white'}`}>See My Works Which Will Amaze You!</h1>
                            <p className={`text-sm xl:text-lg 2xl:text-2xl mb-4 leading-relaxed ${theme === 'light' ? 'text-neutral-600' : 'text-neutral-400 '}`}>We develop the best quality website that serves for the long-term. Well-documented, clean, easy and elegant interface helps any non-technical clients.</p>
                        </div>
                    </div>
                    {images.filter(img => img.col === 1).map((img, index) => (
                        <div
                            key={index}
                            className="relative flex items-center justify-center 2xl:p-2 cursor-pointer lg:ml-12 xl:ml-16"
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
                                            className="mt-4 2xl:mt-40 text-sm lg:text-md xl:text-lg 2xl:text-2xl font-bold absolute bg-white text-neutral-800 border border-white px-2 py-1 rounded-lg"
                                        >
                                            Image {index + 1}
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.5 }}
                                            className="mt-20 xl:mt-24 2xl:mt-64 text-sm lg:text-md xl:text-lg 2xl:text-2xl font-bold absolute bg-white text-neutral-800 border border-white px-2 py-1 rounded-lg"
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
                <div className="lg:w-1/3 lg:flex lg:flex-col gap-3 lg:gap-4">
                    {images.filter(img => img.col === 2).map((img, index) => (
                        <div
                            key={index}
                            className="relative flex items-center justify-center 2xl:p-2 cursor-pointer"
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
                                            className="mt-4 2xl:mt-40 text-sm lg:text-md xl:text-lg 2xl:text-2xl font-bold absolute bg-white text-neutral-800 border border-white px-2 py-1 rounded-lg"
                                        >
                                            Image {index + 3}
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.5 }}
                                            className="mt-20 xl:mt-24 2xl:mt-64 text-sm lg:text-md xl:text-lg 2xl:text-2xl font-bold absolute bg-white text-neutral-800 border border-white px-2 py-1 rounded-lg"
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
                <div className="lg:w-1/3 lg:flex lg:flex-col gap-3 lg:gap-4">
                    {images.filter(img => img.col === 3).map((img, index) => (
                        <div
                            key={index}
                            className="relative flex items-center justify-center 2xl:p-2 cursor-pointer"
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
                                            className="mt-4 2xl:mt-40 text-sm lg:text-md xl:text-lg 2xl:text-2xl font-bold absolute bg-white text-neutral-800 border border-white px-2 py-1 rounded-lg"
                                        >
                                            Image {index + 6}
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.5 }}
                                            className="mt-20 xl:mt-24 2xl:mt-64 text-sm lg:text-md xl:text-lg 2xl:text-2xl font-bold absolute bg-white text-neutral-800 border border-white px-2 py-1 rounded-lg"
                                        >
                                            March 2025
                                        </motion.div>
                                    </>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                    <div className="flex items-center justify-center">
                        <a href="#" className={`text-sm sm:text-md md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold underline mt-5 lg:mt-8 2xl:mt-16 ${theme === 'light' ? 'text-orange-500' : 'text-orange-400'}`}>Load more work</a>
                    </div>
                </div>
            </div>


            {/* Mobile Layout (less than lg) */}
            <div className="lg:hidden flex flex-col items-center">
                {/* Title Section */}
                <div className="flex items-center justify-center mb-4 sm:mb-8 pl-6 pr-16 md:px-0">
                    <div className="flex flex-col items-center justify-center md:-ml-12">
                        <p className={`text-sm text-center transform -rotate-90 mb-8 w-20 md:w-28 xl:w-40 ${theme === 'light' ? 'text-neutral-600' : 'text-neutral-400 '}`}>MY WORKS</p>
                        <div className={`w-1 h-16 md:h-20 ${theme === 'light' ? ' bg-neutral-600' : ' bg-neutral-400'}`}></div>
                    </div>
                    <div>
                        <h1 className={`text-2xl font-bold mb-4 leading-snug ${theme === 'light' ? 'text-neutral-800' : 'text-white'}`}>See My Works Which Will Amaze You!</h1>
                        <p className={`text-sm mb-4 leading-relaxed ${theme === 'light' ? 'text-neutral-600' : 'text-neutral-400 '}`}>We develop the best quality website that serves for the long-term. Well-documented, clean, easy and elegant interface helps any non-technical clients.</p>
                    </div>
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3 px-16 md:px-0">
                    {/* First Column (4 Images) */}
                    <div className="flex flex-col gap-2 sm:gap-3">
                        {mobileImages.slice(0, 3).map((src, index) => (
                            <div key={index} className="relative">
                                <img src={src} alt={`Portfolio ${index + 1}`} className="w-full object-cover rounded-2xl" />
                            </div>
                        ))}
                        <div className="flex justify-center lg:hidden">
                            <a href="#" className={`text-lg sm:text-xl md:text-2xl font-semibold underline mt-12 sm:mt-16 md:mt-28 ${theme === 'light' ? 'text-orange-500' : 'text-orange-400'}`}>Load more work</a>
                        </div>
                    </div>
                    {/* Second Column (3 Images + Load More) */}
                    <div className="flex flex-col gap-2 sm:gap-3">
                        {mobileImages.slice(3, 7).map((src, index) => (
                            <div key={index} className="relative">
                                <img src={src} alt={`Portfolio ${index + 5}`} className="w-full object-cover rounded-2xl" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
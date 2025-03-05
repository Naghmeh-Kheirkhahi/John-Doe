import React, { useState } from "react";
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

    const images = [
        portfolio1,
        portfolio2,
        portfolio3,
        portfolio4,
        portfolio5,
        portfolio6,
        portfolio7,
    ];

    const marginTops = [
        { marginTop: '-26.5rem', marginLeft: '0' },
        { marginTop: '0', marginLeft: '0' },
        { marginTop: '-25rem', marginLeft: '5rem' },
        { marginTop: '-38rem', marginLeft: '0' },
        { marginTop: '0', marginLeft: '0' },
        { marginTop: '-17rem', marginLeft: '5rem' },
        { marginTop: '-11.5rem', marginLeft: '0' },
    ];

    return (
        <div className="bg-black mt-64 mx-64 p-8">
            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1 row-span-1 flex justify-center items-start mt-8">
                    <div className="flex flex-col items-center justify-center mt-8">
                        <p className="text-2xl text-neutral-400 text-center transform -rotate-90 mb-16 w-40">MY WORKS</p>
                        <div className="w-1 h-24 bg-neutral-400"></div>
                    </div>
                    <div>
                        <h1 className="text-6xl text-white font-bold mb-12 leading-snug">See My Works Which Will Amaze You!</h1>
                        <p className="text-2xl text-neutral-400 leading-relaxed">
                            We develop the best quality website that serves for the long-term. Well-documented, clean, easy and elegant interface helps any non-technical clients.
                        </p>
                    </div>
                </div>
                {images.map((src, index) => (
                    <div 
                        key={index} 
                        className="relative flex items-center justify-center p-2 cursor-pointer"
                        style={marginTops[index]}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <img src={src} alt={`Portfolio ${index + 1}`} className="w-full h-auto object-cover rounded-2xl" />
                        
                        <AnimatePresence>
                            {hoveredIndex === index && (
                                <>
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.5 }}
                                        className="mt-48 text-2xl font-bold absolute bg-white text-neutral-800 border border-white px-2 py-1 rounded-lg"
                                    >
                                        Image {index + 1}
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.5 }}
                                        className="mt-72 text-2xl font-bold absolute bg-white text-neutral-800 border border-white px-2 py-1 rounded-lg"
                                    >
                                        March 2025
                                    </motion.div>
                                </>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
                <div className="col-span-1 row-span-1 flex items-center justify-center">
                    <a href="#" className="text-4xl text-orange-400 font-semibold underline text-orange-400 -mt-8">Load more work</a>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;

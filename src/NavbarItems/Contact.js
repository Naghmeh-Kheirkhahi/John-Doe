import React, { useState, useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaUser } from "react-icons/fa";
import { IonIcon } from '@ionic/react';
import { chatbubbles } from 'ionicons/icons';
import { motion } from "framer-motion";

function Contact() {
    const [hovered, setHovered] = useState(null);
    const { theme } = useContext(ThemeContext);

    const socialMedia = [
        { name: "Facebook", icon: <FaFacebookF /> },
        { name: "Twitter", icon: <FaTwitter /> },
        { name: "LinkedIn", icon: <FaLinkedinIn /> },
        { name: "YouTube", icon: <FaYoutube /> },
    ];

    return (
        <div className="2xl:w-4/5 pl-6 xl:pl-8 pr-16 md:pr-24 xl:pr-28 2xl:px-24 mx-16 2xl:mx-auto mt-32 xl:mt-48 2xl:mt-72 pb-20 md:pb-24 xl:pb-32 flex flex-col md:flex-row" id="contact">
            <div className="md:w-3/5 mb-8 md:mb-0 md:mr-8 lg:mr-10 xl:mr-16">
                <div className="mb-4 2xl:mb-0 mt-8 md:mt-0 flex items-start">
                    <div className="flex flex-col items-center justify-center mt-8">
                        <p className={`text-sm xl:text-lg 2xl:text-2xl text-center transform -rotate-90 mb-8 xl:mb-12 2xl:mb-16 w-20 md:w-28 xl:w-40 ${theme === 'light' ? 'text-neutral-600' : 'text-neutral-400 '}`}>CONTACT</p>
                        <div className={`w-1 h-16 md:h-20 xl:h-24 ${theme === 'light' ? ' bg-neutral-600' : ' bg-neutral-400'}`}></div>
                    </div>
                    <div>
                        <h1 className={`text-2xl xl:text-4xl 2xl:text-6xl font-bold mb-4 xl:mb-8 2xl:mb-12 leading-snug ${theme === 'light' ? 'text-neutral-800' : 'text-white'}`}>Have You Any Project? Please Drop a Message</h1>
                        <p className={`text-sm xl:text-lg 2xl:text-2xl mb-4 xl:mb-8 2xl:mb-12 leading-relaxed ${theme === 'light' ? 'text-neutral-600' : 'text-neutral-400 '}`}>Get in touch and let me know how i can help. Fill out the form and i’ll be in touch as soon as possible.</p>
                    </div>
                </div>
                <div className="ml-16 md:ml-20">
                    <div className="mb-6 lg:mb-8 xl:mb-10">
                        <FaMapMarkerAlt className={`text-md lg:text-lg xl:text-xl 2xl:text-3xl inline-block mr-3 2xl:mr-6 ${theme === 'light' ? 'text-neutral-800' : 'text-white'}`} />
                        <span className={`text-md lg:text-lg xl:text-xl 2xl:text-3xl font-bold ${theme === 'light' ? 'text-neutral-800' : 'text-white'}`}>Address:</span>
                        <p className={`text-sm lg:text-md xl:text-lg 2xl:text-2xl ml-7 lg:ml-8 2xl:ml-14 ${theme === 'light' ? 'text-neutral-600' : 'text-neutral-400 '}`}>941 Saqrqorish Road, alandalos, grnata, wa 47122-4194</p>
                    </div>
                    <div className="mb-6 lg:mb-8 xl:mb-10">
                        <FaPhone className={`text-md lg:text-lg xl:text-xl 2xl:text-3xl inline-block mr-3 2xl:mr-6 ${theme === 'light' ? 'text-neutral-800' : 'text-white'}`} />
                        <span className={`text-md lg:text-lg xl:text-xl 2xl:text-3xl font-bold ${theme === 'light' ? 'text-neutral-800' : 'text-white'}`}>Phone:</span>
                        <p className={`text-sm lg:text-md xl:text-lg 2xl:text-2xl ml-7 lg:ml-8 2xl:ml-14 ${theme === 'light' ? 'text-neutral-600' : 'text-neutral-400 '}`}>(01) 234 567 789</p>
                        <p className={`text-sm lg:text-md xl:text-lg 2xl:text-2xl ml-7 lg:ml-8 2xl:ml-14 ${theme === 'light' ? 'text-neutral-600' : 'text-neutral-400 '}`}>(09) 765 432 200</p>
                    </div>
                    <div className="mb-6 lg:mb-8 xl:mb-10">
                        <FaEnvelope className={`text-md lg:text-lg xl:text-xl 2xl:text-3xl inline-block mr-3 2xl:mr-6 ${theme === 'light' ? 'text-neutral-800' : 'text-white'}`} />
                        <span className={`text-md lg:text-lg xl:text-xl 2xl:text-3xl font-bold ${theme === 'light' ? 'text-neutral-800' : 'text-white'}`}>Email:</span>
                        <p className={`text-sm lg:text-md xl:text-lg 2xl:text-2xl ml-7 lg:ml-8 2xl:ml-14 ${theme === 'light' ? 'text-neutral-600' : 'text-neutral-400 '}`}>info@johndoe.com</p>
                        <p className={`text-sm lg:text-md xl:text-lg 2xl:text-2xl ml-7 lg:ml-8 2xl:ml-14 ${theme === 'light' ? 'text-neutral-600' : 'text-neutral-400 '}`}>support@johndoe.com</p>
                    </div>
                    <div className="flex space-x-3 xl:space-x-4 ml-7 lg:ml-8 2xl:ml-14">
                        {socialMedia.map((item, index) => (
                            <div
                                key={index}
                                className="relative flex flex-col items-center"
                                onMouseEnter={() => setHovered(item.name)}
                                onMouseLeave={() => setHovered(null)}
                            >
                                {hovered === item.name && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="absolute -top-14 text-white text-2xl font-bold px-3 py-1 bg-orange-400 border border-orange-400 rounded-lg"
                                    >
                                        {item.name}
                                    </motion.div>
                                )}
                                <a href="#" className={`text-md lg:text-lg 2xl:text-2xl p-2 xl:p-3 2xl:p-4 rounded-full border cursor-pointer hover:bg-orange-400 hover:border-orange-400 hover:text-white transition-colors duration-500 ${theme === 'light' ? 'bg-neutral-800 border-neutral-800 text-white' : 'bg-white border-white text-neutral-800'}`}>{item.icon}</a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="md:w-2/5 pl-16 pr-6 md:px-0">
                <form className={`p-6 md:p-4 lg:p-5 xl:p-6 2xl:p-12 rounded-xl border ${theme === 'light' ? 'bg-white border-white' : 'bg-neutral-800 border-neutral-800'}`}>
                    <div className="mb-4 lg:mb-6 2xl:mb-8 relative">
                        <label className={`text-sm lg:text-md xl:text-lg 2xl:text-xl font-bold block mb-2 ${theme === 'light' ? 'text-neutral-800' : 'text-white'}`} htmlFor="name">Name</label>
                        <div className="relative">
                            <FaUser className="text-sm lg:text-md xl:text-lg 2xl:text-2xl absolute left-4 top-5 -mt-2 lg:-mt-1 text-neutral-500 transition-colors duration-300" />
                            <input className={`text-sm lg:text-md xl:text-lg 2xl:text-2xl w-full p-2 lg:p-3 2xl:p-4 pl-9 lg:pl-10 xl:pl-11 2xl:pl-12 rounded-xl border focus:border-orange-400 focus:outline-none ${theme === 'light' ? 'bg-neutral-200 border-neutral-200 text-orange-500' : 'bg-neutral-900 border-neutral-900 text-orange-300'}`} type="text" id="name" placeholder="e.g John Doe" onFocus={(e) => e.target.previousSibling.classList.add('text-orange-400')} onBlur={(e) => e.target.previousSibling.classList.remove('text-orange-400')} />
                        </div>
                    </div>
                    <div className="mb-4 lg:mb-6 2xl:mb-8 relative">
                        <label className={`text-sm lg:text-md xl:text-lg 2xl:text-xl font-bold block mb-2 ${theme === 'light' ? 'text-neutral-800' : 'text-white'}`} htmlFor="email">Email</label>
                        <div className="relative">
                            <FaEnvelope className="text-sm lg:text-md xl:text-lg 2xl:text-2xl absolute left-4 top-5 -mt-2 lg:-mt-1 text-neutral-500 transition-colors duration-300" />
                            <input className={`text-sm lg:text-md xl:text-lg 2xl:text-2xl w-full p-2 lg:p-3 2xl:p-4 pl-9 lg:pl-10 xl:pl-11 2xl:pl-12 rounded-xl border focus:border-orange-400 focus:outline-none ${theme === 'light' ? 'bg-neutral-200 border-neutral-200 text-orange-500' : 'bg-neutral-900 border-neutral-900 text-orange-300'}`} type="email" id="email" placeholder="e.g johndoe@mail.com" onFocus={(e) => e.target.previousSibling.classList.add('text-orange-400')} onBlur={(e) => e.target.previousSibling.classList.remove('text-orange-400')} />
                        </div>
                    </div>
                    <div className="mb-4 lg:mb-6 2xl:mb-8 relative">
                        <label className={`text-sm lg:text-md xl:text-lg 2xl:text-xl font-bold block mb-2 ${theme === 'light' ? 'text-neutral-800' : 'text-white'}`} htmlFor="phone">Phone</label>
                        <div className="relative">
                            <FaPhone className="text-sm lg:text-md xl:text-lg 2xl:text-2xl absolute left-4 top-5 -mt-2 lg:-mt-1 text-neutral-500 transition-colors duration-300" />
                            <input className={`text-sm lg:text-md xl:text-lg 2xl:text-2xl w-full p-2 lg:p-3 2xl:p-4 pl-9 lg:pl-10 xl:pl-11 2xl:pl-12 rounded-xl border focus:border-orange-400 focus:outline-none ${theme === 'light' ? 'bg-neutral-200 border-neutral-200 text-orange-500' : 'bg-neutral-900 border-neutral-900 text-orange-300'}`} type="tel" id="phone" placeholder="Phone number" onFocus={(e) => e.target.previousSibling.classList.add('text-orange-400')} onBlur={(e) => e.target.previousSibling.classList.remove('text-orange-400')} />
                        </div>
                    </div>
                    <div className="mb-4 lg:mb-6 2xl:mb-8 relative">
                        <label className={`text-sm lg:text-md xl:text-lg 2xl:text-xl font-bold block mb-2 ${theme === 'light' ? 'text-neutral-800' : 'text-white'}`} htmlFor="message">Message</label>
                        <div className="relative">
                            <IonIcon icon={chatbubbles} className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl absolute left-4 top-5 -mt-3 lg:-mt-2 xl:-mt-1 2xl:mt-0 text-neutral-500 transition-colors duration-300" />
                            <textarea className={`text-sm lg:text-md xl:text-lg 2xl:text-2xl w-full h-40 p-2 lg:p-3 2xl:p-4 pl-10 lg:pl-11 xl:pl-12 2xl:pl-14 rounded-xl border focus:border-orange-400 focus:outline-none ${theme === 'light' ? 'bg-neutral-200 border-neutral-200 text-orange-500' : 'bg-neutral-900 border-neutral-900 text-orange-300'}`} id="message" placeholder="Write message..." onFocus={(e) => e.target.previousSibling.classList.add('text-orange-400')} onBlur={(e) => e.target.previousSibling.classList.remove('text-orange-400')}></textarea>
                        </div>
                    </div>
                    <button className={`text-sm lg:text-md xl:text-lg 2xl:text-2xl w-full p-2 2xl:p-4 font-bold border rounded-lg ${theme === 'light' ? 'bg-neutral-800 border-neutral-800 text-neutral-200 hover:bg-black' : 'bg-neutral-200 border-neutral-200 text-neutral-800 hover:bg-white'}`} type="submit">SEND</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
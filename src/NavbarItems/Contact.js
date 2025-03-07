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
        <div className="mt-64 px-8 pt-8 pb-40 mx-64 flex flex-col md:flex-row" id="contact">
            <div className="md:w-3/5 mr-16">
                <div className="mt-8 md:mt-0 flex items-start">
                    <div className="flex flex-col items-center justify-center mt-8">
                        <p className={`text-2xl text-center transform -rotate-90 mb-16 w-40 ${theme === 'light' ? 'text-neutral-600' : 'text-neutral-400 '}`}>CONTACT</p>
                        <div className={`w-1 h-24 ${theme === 'light' ? ' bg-neutral-600' : ' bg-neutral-400'}`}></div>
                    </div>
                    <div>
                        <h1 className={`text-6xl font-bold mb-12 leading-snug ${theme === 'light' ? 'text-neutral-800' : 'text-white'}`}>Have You Any Project? Please Drop a Message</h1>
                        <p className={`mb-12 text-2xl leading-relaxed ${theme === 'light' ? 'text-neutral-600' : 'text-neutral-400'}`}>
                            Get in touch and let me know how I can help. Fill out the form and I’ll be in touch as soon as possible.
                        </p>
                    </div>
                </div>
                <div className="ml-20">
                    <div className="mb-10">
                        <FaMapMarkerAlt className={`text-3xl inline-block mr-6 ${theme === 'light' ? 'text-neutral-800' : 'text-white'}`} />
                        <span className={`text-3xl font-bold ${theme === 'light' ? 'text-neutral-800' : 'text-white'}`}>Address:</span>
                        <p className={`text-2xl ml-14 ${theme === 'light' ? 'text-neutral-600' : 'text-neutral-400 '}`}>941 Saqrqorish Road, alandalos, grnata, wa 47122-4194</p>
                    </div>
                    <div className="mb-10">
                        <FaPhone className={`text-3xl inline-block mr-6 ${theme === 'light' ? 'text-neutral-800' : 'text-white'}`} />
                        <span className={`text-3xl font-bold ${theme === 'light' ? 'text-neutral-800' : 'text-white'}`}>Phone:</span>
                        <p className={`text-2xl ml-14 ${theme === 'light' ? 'text-neutral-600' : 'text-neutral-400 '}`}>(01) 234 567 789</p>
                        <p className={`text-2xl ml-14 ${theme === 'light' ? 'text-neutral-600' : 'text-neutral-400 '}`}>(09) 765 432 200</p>
                    </div>
                    <div className="mb-10">
                        <FaEnvelope className={`text-3xl inline-block mr-6 ${theme === 'light' ? 'text-neutral-800' : 'text-white'}`} />
                        <span className={`text-3xl font-bold ${theme === 'light' ? 'text-neutral-800' : 'text-white'}`}>Email:</span>
                        <p className={`text-2xl ml-14 ${theme === 'light' ? 'text-neutral-600' : 'text-neutral-400 '}`}>info@johndoe.com</p>
                        <p className={`text-2xl ml-14 ${theme === 'light' ? 'text-neutral-600' : 'text-neutral-400 '}`}>support@johndoe.com</p>
                    </div>
                    <div className="flex space-x-4 ml-14">
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
                                <a href="#" className={`text-2xl p-4 rounded-full border cursor-pointer hover:bg-orange-400 hover:border-orange-400 hover:text-white transition-colors duration-500 ${theme === 'light' ? 'bg-neutral-800 border-neutral-800 text-white' : 'bg-white border-white text-neutral-800'}`}>{item.icon}</a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="md:w-2/5">
                <form className={`p-12 rounded-xl border ${theme === 'light' ? 'bg-white border-white' : 'bg-neutral-800 border-neutral-800'}`}>
                    <div className="mb-8 relative">
                        <label className={`text-xl font-bold block mb-2 ${theme === 'light' ? 'text-neutral-800' : 'text-white'}`} htmlFor="name">Name</label>
                        <div className="relative">
                            <FaUser className="text-2xl absolute left-4 top-5 text-neutral-500 transition-colors duration-300" />
                            <input className={`text-2xl w-full p-4 pl-12 rounded-xl border focus:border-orange-400 focus:outline-none ${theme === 'light' ? 'bg-neutral-200 border-neutral-200 text-orange-500' : 'bg-neutral-900 border-neutral-900 text-orange-300'}`} type="text" id="name" placeholder="e.g John Doe" onFocus={(e) => e.target.previousSibling.classList.add('text-orange-400')} onBlur={(e) => e.target.previousSibling.classList.remove('text-orange-400')} />
                        </div>
                    </div>
                    <div className="mb-8 relative">
                        <label className={`text-xl font-bold block mb-2 ${theme === 'light' ? 'text-neutral-800' : 'text-white'}`} htmlFor="email">Email</label>
                        <div className="relative">
                            <FaEnvelope className="text-2xl absolute left-4 top-5 text-neutral-500 transition-colors duration-300" />
                            <input className={`text-2xl w-full p-4 pl-12 rounded-xl border focus:border-orange-400 focus:outline-none ${theme === 'light' ? 'bg-neutral-200 border-neutral-200 text-orange-500' : 'bg-neutral-900 border-neutral-900 text-orange-300'}`} type="email" id="email" placeholder="e.g johndoe@mail.com" onFocus={(e) => e.target.previousSibling.classList.add('text-orange-400')} onBlur={(e) => e.target.previousSibling.classList.remove('text-orange-400')} />
                        </div>
                    </div>
                    <div className="mb-8 relative">
                        <label className={`text-xl font-bold block mb-2 ${theme === 'light' ? 'text-neutral-800' : 'text-white'}`} htmlFor="phone">Phone</label>
                        <div className="relative">
                            <FaPhone className="text-2xl absolute left-4 top-5 text-neutral-500 transition-colors duration-300" />
                            <input className={`text-2xl w-full p-4 pl-12 rounded-xl border focus:border-orange-400 focus:outline-none ${theme === 'light' ? 'bg-neutral-200 border-neutral-200 text-orange-500' : 'bg-neutral-900 border-neutral-900 text-orange-300'}`} type="tel" id="phone" placeholder="Phone number" onFocus={(e) => e.target.previousSibling.classList.add('text-orange-400')} onBlur={(e) => e.target.previousSibling.classList.remove('text-orange-400')} />
                        </div>
                    </div>
                    <div className="mb-8 relative">
                        <label className={`text-xl font-bold block mb-2 ${theme === 'light' ? 'text-neutral-800' : 'text-white'}`} htmlFor="message">Message</label>
                        <div className="relative">
                            <IonIcon icon={chatbubbles} className="text-2xl absolute left-4 top-5 text-neutral-500 transition-colors duration-300" />
                            <textarea className={`text-2xl w-full h-40 p-4 pl-12 rounded-xl border focus:border-orange-400 focus:outline-none ${theme === 'light' ? 'bg-neutral-200 border-neutral-200 text-orange-500' : 'bg-neutral-900 border-neutral-900 text-orange-300'}`} id="message" placeholder="Write message..." onFocus={(e) => e.target.previousSibling.classList.add('text-orange-400')} onBlur={(e) => e.target.previousSibling.classList.remove('text-orange-400')}></textarea>
                        </div>
                    </div>
                    <button className={`text-2xl w-full p-4 font-bold border rounded-lg ${theme === 'light' ? 'bg-neutral-800 border-neutral-800 text-neutral-200 hover:bg-black' : 'bg-neutral-200 border-neutral-200 text-neutral-800 hover:bg-white'}`} type="submit">SEND</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
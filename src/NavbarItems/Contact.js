import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaUser } from "react-icons/fa";
import { IonIcon } from '@ionic/react';
import { chatbubbles } from 'ionicons/icons';
import { motion } from "framer-motion";

function Contact() {
    const [hovered, setHovered] = useState(null);
    const socialMedia = [
        { name: "Facebook", icon: <FaFacebookF />},
        { name: "Twitter", icon: <FaTwitter />},
        { name: "LinkedIn", icon: <FaLinkedinIn />},
        { name: "YouTube", icon: <FaYoutube />},
    ];

    return (
        <div className="bg-black mt-64 px-8 pt-8 pb-40 mx-64 flex flex-col md:flex-row">
            <div className="md:w-2/3">
                <div className="mt-8 md:mt-0 flex items-start">
                    <div className="flex flex-col items-center justify-center mt-8">
                        <p className="text-2xl text-neutral-400 text-center transform -rotate-90 mb-16 w-40">CONTACT</p>
                        <div className="w-1 h-24 bg-neutral-400"></div>
                    </div>
                    <div>
                        <h1 className="text-6xl text-white font-bold mb-12 leading-snug mr-32">Have You Any Project? Please Drop a Message</h1>
                        <p className="mb-12 text-2xl text-neutral-400 leading-relaxed mr-40">
                            Get in touch and let me know how I can help. Fill out the form and I’ll be in touch as soon as possible.
                        </p>
                    </div>
                </div>
                <div className="ml-20">
                    <div className="mb-10">
                        <FaMapMarkerAlt className="text-3xl text-white inline-block mr-6" />
                        <span className="text-3xl font-bold text-white">Address:</span>
                        <p className="text-neutral-400 text-2xl ml-14">941 Saqrqorish Road, alandalos, grnata, wa 47122-4194</p>
                    </div>
                    <div className="mb-10">
                        <FaPhone className="text-3xl text-white inline-block mr-6" />
                        <span className="text-3xl font-bold text-white">Phone:</span>
                        <p className="text-neutral-400 text-2xl ml-14">(01) 234 567 789</p>
                        <p className="text-neutral-400 text-2xl ml-14">(09) 765 432 200</p>
                    </div>
                    <div className="mb-10">
                        <FaEnvelope className="text-3xl text-white inline-block mr-6" />
                        <span className="text-3xl font-bold text-white">Email:</span>
                        <p className="text-neutral-400 text-2xl ml-14">info@johndoe.com</p>
                        <p className="text-neutral-400 text-2xl ml-14">support@johndoe.com</p>
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
                                <a href="#" className={`text-2xl bg-white text-black p-4 rounded-full border border-white cursor-pointer hover:bg-orange-400 hover:border-orange-400 hover:text-white transition-colors duration-500`}>{item.icon}</a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="md:w-1/3 mr-8">
                <form className="bg-neutral-800 p-12 rounded-xl">
                    <div className="mb-8 relative">
                        <label className="text-xl font-bold block text-white mb-2" htmlFor="name">Name</label>
                        <div className="relative">
                            <FaUser className="text-2xl absolute left-4 top-5 text-neutral-500 transition-colors duration-300" />
                            <input className="text-2xl w-full p-4 pl-12 bg-neutral-900 text-orange-300 rounded-xl border border-neutral-900 focus:border-orange-400 focus:outline-none" type="text" id="name" placeholder="e.g John Doe" onFocus={(e) => e.target.previousSibling.classList.add('text-orange-400')} onBlur={(e) => e.target.previousSibling.classList.remove('text-orange-400')} />
                        </div>
                    </div>
                    <div className="mb-8 relative">
                        <label className="text-xl font-bold block text-white mb-2" htmlFor="email">Email</label>
                        <div className="relative">
                            <FaEnvelope className="text-2xl absolute left-4 top-5 text-neutral-500 transition-colors duration-300" />
                            <input className="text-2xl w-full p-4 pl-12 bg-neutral-900 text-orange-300 rounded-xl border border-neutral-900 focus:border-orange-400 focus:outline-none" type="email" id="email" placeholder="e.g johndoe@mail.com" onFocus={(e) => e.target.previousSibling.classList.add('text-orange-400')} onBlur={(e) => e.target.previousSibling.classList.remove('text-orange-400')} />
                        </div>
                    </div>
                    <div className="mb-8 relative">
                        <label className="text-xl font-bold block text-white mb-2" htmlFor="phone">Phone</label>
                        <div className="relative">
                            <FaPhone className="text-2xl absolute left-4 top-5 text-neutral-500 transition-colors duration-300" />
                            <input className="text-2xl w-full p-4 pl-12 bg-neutral-900 text-orange-300 rounded-xl border border-neutral-900 focus:border-orange-400 focus:outline-none" type="tel" id="phone" placeholder="Phone number" onFocus={(e) => e.target.previousSibling.classList.add('text-orange-400')} onBlur={(e) => e.target.previousSibling.classList.remove('text-orange-400')} />
                        </div>
                    </div>
                    <div className="mb-8 relative">
                        <label className="text-xl font-bold block text-white mb-2" htmlFor="message">Message</label>
                        <div className="relative">
                            <IonIcon icon={chatbubbles} className="text-2xl absolute left-4 top-5 text-neutral-500 transition-colors duration-300" />
                            <textarea className="text-2xl w-full h-40 p-4 pl-12 bg-neutral-900 text-orange-300 rounded-xl border border-neutral-900 focus:border-orange-400 focus:outline-none" id="message" placeholder="Write message..." onFocus={(e) => e.target.previousSibling.classList.add('text-orange-400')} onBlur={(e) => e.target.previousSibling.classList.remove('text-orange-400')}></textarea>
                        </div>
                    </div>
                    <button className="text-2xl w-full p-4 bg-neutral-200 font-bold text-neutral-800 border border-neutral-200 rounded-lg hover:bg-white" type="submit">SEND</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
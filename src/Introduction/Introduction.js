import React from "react";
import { FaChevronRight } from "react-icons/fa";
import introIcon1 from "../Assets/Images/introIcon1.png";
import introIcon2 from "../Assets/Images/introIcon2.png";
import introIcon3 from "../Assets/Images/introIcon3.png";

const data = [
    { icon: introIcon1, count: "12+", company: "Years of Experience" },
    { icon: introIcon2, count: "230+", company: "Completed Projects" },
    { icon: introIcon3, count: "95+", company: "Happy Clients" },
];



function Introduction() {
    return (
        <div className="mx-auto py-8 px-64 mt-64">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="bg-neutral-800 rounded-xl p-12 flex items-center justify-between hover:transform hover:-translate-y-2 transition duration-300 cursor-pointer"
                    >
                        <img src={item.icon} alt="Sample" className="w-30 rounded-full bg-orange-400 p-4" />
                        <div className="text-center">
                            <p className="text-7xl font-extrabold text-orange-400 mb-4">{item.count}</p>
                            <p className="text-3xl font-bold text-white mt-4">{item.company}</p>
                        </div>
                        <FaChevronRight className="text-2xl text-gray-400" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Introduction;
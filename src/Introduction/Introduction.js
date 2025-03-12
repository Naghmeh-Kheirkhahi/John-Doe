import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
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
    const { theme } = useContext(ThemeContext);

    return (
        <div className="w-5/6 mx-auto mt-40 xl:mt-56 2xl:mt-64">
            <div className="md:flex md:gap-4 xl:gap-8 2xl:gap-12">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className={`mx-8 sm:mx-16 my-4 md:m-0 flex-1 rounded-xl p-6 md:p-4 lg:p-6 xl:p-8 2xl:p-12 flex items-center justify-between hover:transform hover:-translate-y-2 transition duration-300 cursor-pointer ${theme === "light" ? "bg-white" : "bg-neutral-800"}`}
                    >
                        <img src={item.icon} alt="Sample" className="w-1/6 md:w-1/4 rounded-full bg-orange-400 p-1 sm:p-2 md:p-1 xl:p-2 2xl:p-4" />
                        <div className="text-center">
                            <p className="text-3xl sm:text-5xl md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-7xl font-extrabold text-orange-400 mb-4">{item.count}</p>
                            <p className={`text-md sm:text-lg md:text-sm lg:text-md xl:text-xl 2xl:text-3xl font-bold mt-4 ${theme === 'light' ? 'text-neutral-800' : 'text-white'}`}>{item.company}</p>
                        </div>
                        <FaChevronRight className={`text-md sm:text-lg md:text-md lg:text-lg xl:text-xl 2xl:text-2xl ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Introduction;
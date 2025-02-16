
import React from "react";


function BlueButton() {
    return (
        <>
            <button className="bg-blue-400 hover:bg-blue-600 hover:text-orange-800 text-3xl text-orange-700 font-bold py-8 px-16 mb-8 mt-8 border-4 border-blue-800 rounded-xl">
                Blue Button
            </button>

            <div className="text-2xl bg-gray-400 text-green-800 text-center w-64 h-32 p-8 ml-auto mr-auto mt-8 mb-8 rounded-lg shadow-lightShadow bg-opacity-20">
                <p>This is a Practice of Tailwindcss.</p>
                {/* navbar and card for a product  practice display flex and ...*/}
            </div>
        </>
    );
}

export default BlueButton;
import React, { useState } from "react";
import { motion } from "framer-motion";
import ideathon from "../assets/ideathon.svg";
import six from "../assets/6.0.svg";
import icon from "../assets/icontop.svg";
import enigma from "../assets/enigma.svg";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-[#030B15] text-white px-4 py-3 z-30 absolute w-full">
            <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <img src={icon} alt="Logo" className="h-6 w-auto" />
                    <img src={ideathon} alt="Ideathon" className="h-4 w-auto" />
                    <img src={six} alt="6.0" className="h-4 w-auto" />
                </div>

                <ul className="hidden md:flex space-x-10">
                    <li><a href="#home" className="hover:text-[#00C4F4] transition-colors">Home</a></li>
                    <li><a href="#about" className="hover:text-[#00C4F4] transition-colors">About</a></li>
                    <li><a href="#tracks" className="hover:text-[#00C4F4] transition-colors">Tracks</a></li>
                    <li><a href="#faqs" className="hover:text-[#00C4F4] transition-colors">FAQs</a></li>
                    <li><a href="#contact" className="hover:text-[#00C4F4] transition-colors">Contact</a></li>
                </ul>

                <div className="md:hidden">
                    <button onClick={() => setIsOpen(true)}>
                        <span className="text-lg mr-3">☰</span>
                    </button>
                </div>

                <div className="hidden md:flex items-center space-x-4">
                    <button className="bg-[#00E0FF] text-[#030B15] px-4 py-2 md:mr-20 rounded hover:bg-[#00C4F4] transition-colors duration-300">
                        Certificate
                    </button>
                    <button onClick={() => window.open("https://www.ecellnmit.in/", "_blank")}>
                        <img src={enigma} alt="Enigma" className="h-8 w-auto" />
                    </button>
                </div>
            </div>

            {isOpen && (
                <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "-100%" }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="fixed top-0 left-4 w-3/4 h-full bg-[#030B15] text-white flex flex-col items-start space-y-6 p-6 z-40 shadow-lg"
                >
                    <button onClick={() => setIsOpen(false)} className="text-2xl self-end">
                        ✖
                    </button>

                    <a href="#home" className="hover:text-[#00C4F4]">Home</a>
                    <a href="#about" className="hover:text-[#00C4F4]">About</a>
                    <a href="#tracks" className="hover:text-[#00C4F4]">Tracks</a>
                    <a href="#faqs" className="hover:text-[#00C4F4]">FAQs</a>
                    <a href="#contact" className="hover:text-[#00C4F4]">Contact</a>

                    <button className="bg-[#00E0FF] text-[#030B15] px-4 py-2 rounded hover:bg-[#00C4F4] transition-colors duration-300">
                        Certificate
                    </button>
                    <button onClick={() => window.open("https://www.ecellnmit.in/", "_blank")}>
                        <img src={enigma} alt="Enigma" className="h-8 w-auto" />
                    </button>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;

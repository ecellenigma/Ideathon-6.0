import React from "react";
import { motion } from "framer-motion";
import heroSvg from "../assets/icontop.svg";
import ideathon from "../assets/ideathon.svg";
import Navbar from "../components/Navbar";
import six from "../assets/6.0.svg";
import year from "../assets/2025.svg";

const Landing = () => {
    return (
        <section className="text-white h-screen relative overflow-hidden">
            <Navbar />
            <motion.div
                className="relative z-10 h-full container mt-28 md:mt-0 mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                {/* Left Side - Image */}
                <motion.div
                    className="w-full md:w-1/2 flex justify-center md:justify-start z-50"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <img
                        src={heroSvg}
                        alt="Ideathon SVG"
                        className="max-w-xs md:max-w-sm mix-blend-screen h-full w-full rounded-full p-10 shadow-blue-400"
                    />
                </motion.div>

                {/* Right Side - Text */}
                <motion.div
                    className="w-full md:w-1/2 md:pl-8   md:mt-0"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                >
                    <div className="flex flex-col items-center py-2 w-full mt-10  md:mt-0">
                        {/* Main Image */}
                        <div className="w-[90vw] max-w-[400px] md:w-full md:max-w-2xl mx-auto overflow-hidden">
                            <img
                                className="w-full h-auto object-contain "
                                src={ideathon}
                                alt="Ideathon SVG"
                            />
                            <div className="flex justify-between items-center">
                                <img className="w-9 h-7 md:h-1/2 md:w-1/4 md:scale-90 " src={year} alt="Year" />
                                <img className="w-6 h-6 md:h-1/3 md:mr-5 md:scale-90  object-contain rotate-90" src={six} alt="Six" />
                            </div>
                        </div>

                    </div>


                    <p className="text-gray-300 mb-6 leading-relaxed text-center md:text-left px-4 md:px-0">
                        Ideathon is all about showcasing ideas and weighing their potential benefits to society. It is an ideal opportunity for you to provide a viable solution to society's problems or to come up with the best possible cocktail of idea and innovation. NMIT's ideathon is tailored to provide participants a first-hand trial of the Entrepreneurial journey. It offers a competitive model for showcasing original thinking and problem-solving aptitude among the participants.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-2 font-medium bg-[#00C4F4] text-white w-fit transition-all shadow-[3px_3px_0px_white] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
                      
                    

                   
                    <button className="px-6 py-2 font-medium bg-[#00C4F4] text-white w-fit transition-all shadow-[3px_3px_0px_white] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
                        Register
                        </button>
                        </motion.button>


                </motion.div>
            </motion.div>
        </section>
    );
};

export default Landing;

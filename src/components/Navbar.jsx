import React, { useEffect, useState } from "react";
import ideathon from "../assets/ideathon.svg";
import six from "../assets/6.0.svg";
import icon from "../assets/icontop.svg";
import enigma from "../assets/enigma.svg";

const Navbar = () => {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.6,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, options);

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);

    return (
        <nav className="text-white bg-[#060d19] px-1 py-1 z-30 w-full fixed ">
            <div className="grid grid-cols-[1fr_2fr_1fr] gap-4 w-full p-4">
                <div>
                    <div className="flex items-center mr-2.5 space-x-2">
                        <img
                            src={icon}
                            alt="Ideathon Logo"
                            className="h-6 w-auto"
                        />
                        <img
                            src={ideathon}
                            alt="Ideathon Logo"
                            className="h-4 w-auto"
                        />
                        <img    
                            src={six}
                            alt="Ideathon 6.0 Logo"
                            className="h-4 w-auto"
                        />
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <ul className="hidden md:flex space-x-10 mx-auto">
                        <li><a href="#home" className={`hover:text-[#00C4F4] transition-colors ${activeSection === "home" ? "text-[#00C4F4]" : ""}`}>Home</a></li>
                        <li><a href="#about" className={`hover:text-[#00C4F4] transition-colors ${activeSection === "about" ? "text-[#00C4F4]" : ""}`}>About</a></li>
                        <li><a href="#tracks" className={`hover:text-[#00C4F4] transition-colors ${activeSection === "tracks" ? "text-[#00C4F4]" : ""}`}>Tracks</a></li>
                        <li><a href="#faqs" className={`hover:text-[#00C4F4] transition-colors ${activeSection === "faqs" ? "text-[#00C4F4]" : ""}`}>FAQs</a></li>
                        <li><a href="#contact" className={`hover:text-[#00C4F4] transition-colors ${activeSection === "contact" ? "text-[#00C4F4]" : ""}`}>Contact</a></li>
                    </ul>
                </div>
                <div>
                    <div className="flex justify-evenly space-x-4">
                        <div>
                            <button className="bg-[#00E0FF] text-[#030B15] px-4 py-2 rounded hover:bg-[#00C4F4] transition-colors duration-300">
                                Certificate
                            </button>
                        </div>
                        <button onClick={() => window.open("https://www.ecellnmit.in/", "_blank")} className="flex items-center">
                            <img
                                src={enigma}
                                alt="Ideathon Logo"
                                className="h-8 w-auto"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

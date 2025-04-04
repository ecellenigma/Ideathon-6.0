import React from "react"
import { LINKS } from "../constants";
import Call from "../assets/call.svg";
import Mail from "../assets/mail.svg";
import Enigma from "../assets/enigma.svg";
import Ideathon from "../assets/ideathon.svg";
import Instagram from "../assets/insta.svg";
import Facebook from "../assets/facebook.svg";
import LinkedIn from "../assets/linkedin.svg";


const Footer = () => {
  return (
    <footer id='contact' className="text-white  mt-5 bg-[#030B15] w-full snap-start">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center md:items-start justify-between">
        
        <div className="md:w-1/3 mb-6 md:mb-0">
            <h2 className="pl-15 text-xl font-bold uppercase tracking-wide">CONTACT US</h2>
            <div className="flex items-center space-x-4 mt-2">
                <img
                    src={Call}
                    alt="Call img"
                    className="h-8 w-8"
                />
                <p>Aniketh: {LINKS.CONTACTS.ANIKETH}</p>
            </div>
            <div className="flex items-center space-x-4 mt-2">
                <img
                    src={Call}
                    alt="Call img"
                    className="h-8 w-8"
                />
                <p>Jahnavi: {LINKS.CONTACTS.JAHNAVI}</p>
            </div>
            <div className="flex items-center space-x-4 mt-2">
                <img
                    src={Mail}
                    alt="Mail img"
                    className="h-8 w-8"
                />
                <p>{LINKS.EMAIL}</p>
            </div>
        </div>
        
        <div className="flex flex-col items-center md:w-1/3">
          <img 
            src={Enigma}
            alt="Enigma Logo" 
            className="h-10 object-contain mb-4"
          />
          <img 
            src={Ideathon}
            alt="Ideathon 2025 Logo" 
            className="h-12 object-contain mb-2"
          />
          <p className="text-center text-sm md:text-base">
            Enigma - Entrepreneurship Cell NMIT
          </p>
        </div>

        <div className="md:w-1/3" />
      </div>
      

      <div className="border-t border-gray-700 mx-auto max-w-7xl" /> {/* divider */}


      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-center space-x-6"> {/* social icons */}
        <a 
          href={LINKS.INSTAGRAM}
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img 
            src={Instagram}
            alt="Instagram" 
            className="h-6 w-6 object-contain" 
          />
        </a>
        <a 
          href={LINKS.FACEBOOK}
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img 
            src={Facebook}
            alt="Facebook" 
            className="h-6 w-6 object-contain" 
          />
        </a>
        <a 
          href={LINKS.LINKEDIN}
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img 
            src={LinkedIn}
            alt="LinkedIn" 
            className="h-6 w-6 object-contain" 
          />
        </a>
        <a 
          href={`mailto:${LINKS.EMAIL}`} 
        >
          <img 
            src={Mail}
            alt="Gmail" 
            className="h-6 w-6 object-contain" 
          />
        </a>
      </div>
    </footer>
  )
}

export default Footer;
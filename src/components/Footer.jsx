import React from "react"

export default function Footer() {
  return (
    <footer className="bg-black text-white w-full">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center md:items-start justify-between">
        
        <div className="md:w-1/3 mb-6 md:mb-0">
          <h2 className="text-xl font-bold uppercase tracking-wide">CONTACT US</h2>
            <div className="flex items-center space-x-4 mt-2">
                <img
                    src="src/assets/call.svg"
                    alt="Question Mark"
                    className="h-8 w-8"
                />
                <p className="mt-2">+91-4545-3753</p>
            </div>
            <div className="flex items-center space-x-4 mt-2">
                <img
                    src="src/assets/mail.svg"
                    alt="Question Mark"
                    className="h-8 w-8"
                />
                <p className="mt-1">Soul2@gmail.com</p>
            </div>
        </div>
        
        <div className="flex flex-col items-center md:w-1/3">
          <img 
            src="src/assets/enigma.svg"
            alt="Enigma Logo" 
            className="h-10 object-contain mb-4"
          />
          <img 
            src="src/assets/ideathon.svg"
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
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img 
            src="src/assets/insta.svg"
            alt="Instagram" 
            className="h-6 w-6 object-contain" 
          />
        </a>
        <a 
          href="https://facebook.com" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img 
            src="src/assets/facebook.svg"
            alt="Facebook" 
            className="h-6 w-6 object-contain" 
          />
        </a>
        <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img 
            src="src/assets/linkedin.svg"
            alt="LinkedIn" 
            className="h-6 w-6 object-contain" 
          />
        </a>
        <a 
          href="mailto:Soul2@gmail.com" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img 
            src="src/assets/mail.svg"
            alt="Gmail" 
            className="h-6 w-6 object-contain" 
          />
        </a>
      </div>
    </footer>
  )
}

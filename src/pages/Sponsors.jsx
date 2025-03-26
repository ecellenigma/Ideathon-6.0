import React from 'react';
import sponsor1 from '../assets/sponsor_1.png';
import sponsor2 from '../assets/sponsor_2.png';
import sponsor3 from '../assets/sponsor_3.png';
import sponsor4 from '../assets/sponsor_4.png';
import sponsor5 from '../assets/sponsor_5.png';
import sponsor6 from '../assets/sponsor_6.png';
import sponsor7 from '../assets/sponsor_7.png';

export default function Sponsors() {
    return (
        <section id="sponsors" className="text-white flex flex-col items-center snap-start min-h-screen px-4 py-10">
            <div className="flex flex-col justify-between h-full w-full">
                {/* Knowledge Sponsor Section */}
                <div className="text-center">
                    <h2 className="text-2xl mt-10 md:text-4xl font-['Delivery'] text-[#00e5ff] font-bold mb-4">
                        OUR KNOWLEDGE SPONSOR
                    </h2>
                    <img src={sponsor1} alt="Knowledge Partner" className="mx-auto w-64 md:w-90" />
                </div>

                {/* Coding Sponsor Section */}
                <div className="text-center">
                    <h2 className="text-2xl md:text-3xl font-['Delivery'] text-[#00e5ff] font-bold mb-4 mt-10">
                        OUR CODING SPONSOR
                    </h2>
                    <img src={sponsor2} alt="Coding Sponsor" className="mx-auto w-54 md:w-70" />
                </div>

                {/* Marketing Sponsor Section */}
                <div className="text-center">
                    <h2 className="text-2xl md:text-xl font-['Delivery'] text-[#00e5ff] font-bold mb-4 mt-10">
                        OUR MARKETING SPONSOR
                    </h2>
                    <img src={sponsor5} alt="Marketing Sponsor" className="mx-auto w-40 md:w-54" />
                </div>

                {/* Other Sponsors Section */}
                <div className="text-center">
                    <h2 className="text-xl md:text-xl font-['Delivery'] text-[#00e5ff] font-bold mb-4 mt-10">
                        OUR OTHER PARTNERS
                    </h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        <img src={sponsor7} alt="Other Sponsor 1" className="w-20 md:w-38" />
                        <img src={sponsor4} alt="Other Sponsor 2" className="w-20 md:w-26" />
                        <img src={sponsor3} alt="Other Sponsor 3" className="w-20 md:w-26" />
                        <img src={sponsor6} alt="Other Sponsor 4" className="w-20 md:w-38" />
                    </div>
                </div>
            </div>
        </section>
    );
}

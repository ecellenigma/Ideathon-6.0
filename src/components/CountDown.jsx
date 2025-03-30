import { useState, useEffect } from "react";

export default function IdeathonCountdown() {
    const [daysLeft, setDaysLeft] = useState(0);

    useEffect(() => {
        const calculateDaysLeft = () => {
            const eventDate = new Date("2025-04-04");
            const today = new Date();
            const timeDiff = eventDate - today;
            const days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
            setDaysLeft(days);
        };

        calculateDaysLeft();
        const interval = setInterval(calculateDaysLeft, 86400000); // Update every 24 hours

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative bg-gradient-to-r mt-5 p-5 font-tektur  text-white   px-8 rounded-lg shadow-lg text-center">
            <p className="md:text-lg sm:text-xl">
               | Only <span className="text-[#00C4F4] font-semibold text-3xl">{daysLeft}</span> days left to start |
            </p>
        </div>
    );
}
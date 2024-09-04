import React, { useState, useEffect } from 'react';
import sendbutton from '../../../../src/assets/sendbutton.png'; // Placeholder for the accept icon image
import cancelbutton from '../../../../src/assets/cancelbutton.png'; // Placeholder for the decline icon image

const DriverNewDeliveryPage = () => {
    const [seconds, setSeconds] = useState(30);

    // Countdown logic
    useEffect(() => {
        if (seconds > 0) {
            const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [seconds]);

    return (
        <div className="flex items-center justify-center font-roboto  ">
            <div className="bg-customGreenDark pl-20 pr-20 pt-5 pb-5 rounded-xl text-center">
                {/* Title */}
                <h2 className="text-white textsm font-bold mb-6">
                    New Delivery
                </h2>

                {/* Countdown Circle */}
                <div className="relative flex items-center justify-center mb-8">
                    <div className="w-32 h-32 rounded-full border-8 border-gray-500 flex items-center justify-center">
                        <div className="text-white bg-black rounded-full h-20 w-20  flex items-center justify-center text-6xl font-bold p-2">
                            {seconds} <p className='text-[10px] text-'>s</p>
                        <p className="absolute bottom-8 text-white text-[10px]">
                            To accept
                        </p>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between gap-16 mt-4">
                    {/* Decline Button */}
                    <button className="flex items-center  rounded-full h-16 w-16">
                        <img
                            src={cancelbutton}
                            alt="Decline"
                            className="h-15 w-15"
                        />
                    </button>

                    {/* Accept Button */}
                    <button className="flex items-center   rounded-full h-16 w-16">
                        <img
                            src={sendbutton}
                            alt="Accept"
                            className="h-15 w-15"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DriverNewDeliveryPage;

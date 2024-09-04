import React, { useState } from 'react';
import deliveryschedule from '../../../../src/assets/deliveryschedule.png';
import delivery from '../../../../src/assets/delivery.png';

const DeliveryOptionsPage = () => {
    const [selectedOption, setSelectedOption] = useState('immediate');

    const handleOptionChange = option => {
        setSelectedOption(option);
    };
    // relative min-h-screen bg-custom-bg bg-cover bg-center font-roboto
    return (
        <div className="flex  min-h-screen justify-center bg-custom-bg bg-cover bg-center  font-roboto">
            <div className="bg-customGreenDark  m-12 p-8 rounded-lg w-1/2 shadow-lg">
                <div className="space-y-6 pt-8 ">
                    {/* Immediate Delivery Option */}
                    <div
                        className={`flex items-center p-3 rounded-lg cursor-pointer ${
                            selectedOption === 'immediate'
                                ? 'bg-customYellow'
                                : 'bg-customGreenLight'
                        }`}
                        onClick={() => handleOptionChange('immediate')}
                        tabIndex="0"
                        onKeyDown={(e) => e.key === 'Enter' && handleOptionChange('immediate')}
                    >
                        <img
                            src={delivery}
                            alt="Immediate delivery option"
                            className={`text-xl ${
                                selectedOption === 'immediate'
                                    ? 'text-yellow-500'
                                    : 'text-gray-400'
                            }`}
                        />
                        <span className="ml-4 text-xl font-semibold text-black">
                            Immediate Delivery
                        </span>
                    </div>

                    {/* Scheduled Delivery Option */}
                    <div
                        className={`flex items-center p-3 rounded-lg cursor-pointer ${
                            selectedOption === 'scheduled'
                                ? 'bg-customYellow'
                                : ' bg-customGreenLight'
                        }`}
                        onClick={() => handleOptionChange('scheduled')}
                        tabIndex="0"
                        onKeyDown={(e) => e.key === 'Enter' && handleOptionChange('scheduled')}
                    >
                        <img
                            src={deliveryschedule}
                            alt="Scheduled delivery option"
                            className={`text-xl ${
                                selectedOption === 'scheduled'
                                    ? 'text-black'
                                    : 'text-gray-400'
                            }`}
                        />
                        <span className="ml-4 text-xl  font-semibold text-black">
                            Scheduled Delivery
                        </span>
                    </div>
                </div>

                {/* Next Button */}
                <div className="mt-10  text-right text-xl ">
                    <button className="bg-customYellow text-black py-2 px-6 w-36 h-14 rounded-lg font-semibold">
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeliveryOptionsPage;

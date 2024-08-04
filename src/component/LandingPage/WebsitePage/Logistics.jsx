import React from 'react';
import input from '../../../assets/input.png';

const Logistics = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-customGreenDark ">
            <h1 className="text-4xl font-bold text-customGreenLight mb-20">
                Request Logistics
            </h1>

            <div className="flex flex-col md:flex-row   gap-y-6 items-center justify-between space-x-20 mb-12 ">
                <div className="text-center justify-center space-y-10  ">
                    <div>
                        <div className="text-3xl font-bold text-customGreenLight  ">
                            Schedule or
                        </div>
                        <div className="text-3xl font-bold text-customGreenLight ">
                            Immediate Delivery
                        </div>
                        <div className="text-3xl font-bold text-customGreenLight ">
                            Totally up to you
                        </div>
                    </div>

                    <div
                        className="flex items-center justify-center bg-customGreenLight h-16 w-48
      cursor-pointer  rounded-lg mt-4 m-14"
                    >
                        <div
                            className="text-xl  
          font-bold"
                        >
                            Request a Delivery
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-4xl bg-customVeryLightGray  rounded-lg shadow-lg p-8   ">
                    <form className="space-y-4">
                        <div className="relative w-full max-w-xs">
                            <div className="md:absolute left-2 top-1/2 transform -translate-y-1/2 bg-customGreenDark w-3 h-3 rounded-full"></div>
                            <input
                                type="text"
                                id="pickup"
                                placeholder="Enter Pickup Location"
                                className="w-80 h-16 pl-10 p-2 border-none  rounded-lg  "
                            />
                            <img
                                src={input}
                                alt="icon"
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-6 h-6"
                            />
                        </div>
                        <div className="relative w-full max-w-xs">
                            <div className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-customGreenDark w-3 h-3 rounded-full"></div>
                            <input
                                type="text"
                                id="pickup"
                                placeholder="Enter Delivery Location"
                                className="w-80 h-16 pl-10 p-2 border-none  rounded-lg  "
                            />
                        </div>
                        <div className="relative w-full max-w-xs">
                            <div className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-customGreenDark w-3 h-3 rounded-full"></div>
                            <input
                                type="text"
                                id="pickup"
                                placeholder="Type of Goods"
                                className="w-80 h-16 pl-10 p-2 border-none  rounded-lg  "
                            />
                        </div>

                        {/* BUUTTON */}
                        <div className="flex items-start ">
                            <button
                                type="submit"
                                className="bg-customGreenDark text-white text-lg font-bold py-2 px-4 w-40 h-12 rounded-lg"
                            >
                                See Prices
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Logistics;

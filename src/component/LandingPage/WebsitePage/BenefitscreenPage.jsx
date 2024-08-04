import React from 'react';

const BenefitscreenPage = () => {
    return (
        <div id='BenefitsreenPage' className="flex flex-col md:flex-row py-8  md:py-0 items-center justify-evenly min-h-screen bg-white gap-8 ">
            <div className="flex flex-col text-center justify-center">
                {/* First Row */}
                <div className=" text-customGreenDark text-4xl font-bold">
                    Your Market Day
                </div>
                <div className=" text-customGreenDark text-4xl font-bold">
                    Made Easy
                </div>
                <div className="text-customGreenDark text-4xl font-bold">
                    How <h1 className="inline text-customYellow">AgriLogiz</h1>
                    Helps
                </div>
            </div>

            <div className="flex   justify-center space-x-20 gap-6 ">
                {/* Second Row */}
                <div className="space-y-8">
                    <div className="flex flex-col items-center max-w-xs text-center">
                        <img
                            src="/time.png"
                            alt="time"
                            className="h-25 w-40 "
                        />
                        <p className=" font-bold text-xl">Convenience and</p>
                        <p className=" font-bold text-xl">Time-Saving</p>
                    </div>
                    <div className="flex flex-col items-center max-w-xs text-center">
                        <img
                            src="/reliabe.png"
                            alt="reliable"
                            className="h-25 w-40 "
                        />
                        <p className="font-bold text-xl">Reliable and Secure</p>
                        <p className="font-bold text-xl">Platform</p>
                    </div>
                </div>

                <div className="space-y-8">
                    <div className="flex flex-col items-center max-w-xs text-center">
                        <img
                            src="/naira.png"
                            alt="naira"
                            className="h-25 w-40 "
                        />
                        <p className=" font-bold text-xl">
                            Affordable Delivery
                        </p>
                        <p className=" font-bold text-xl">Options</p>
                    </div>
                    <div className="flex flex-col items-center max-w-xs text-center">
                        <img
                            src="/driver.png"
                            alt="driver"
                            className="h-25 w-40 "
                        />
                        <p className="font-bold text-xl">Experienced and </p>
                        <p className="font-bold text-xl">Qualified Drivers</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BenefitscreenPage;

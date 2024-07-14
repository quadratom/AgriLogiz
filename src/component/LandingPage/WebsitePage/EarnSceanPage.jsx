import React from 'react';

const EarnSceanPage = () => {
    return (
        <div className="min-h-screen bg-customGreenLight">
            <h1 className="text-2xl font-bold text-center mb-4 pt-4">
                Earn with AgriLogiz
            </h1>

            <div className="flex text-center justify-between">
                <div className="flex-3">
                    {/* First Row */}
                    <img
                        className="relative  "
                        src="/car.png"
                        alt="car.png"
                        style={{ width: '80%' }}
                    />
                </div>

                <div className="flex flex-col text-start items-start  justify-center  ">
                    {/* Second Row */}
                    <div className="text-3xl font-bold mb-4 pl-8">
                        Become a Logistics Driver
                    </div>
                    <div>
                        <div className="text-xl font-bold pl-8 ">
                            Drive more, earn more
                        </div>
                        <div className="flex items-center text-start justify-start ">
                            <div className="pr-4 bg-customGreenDark border rounded-full  p-2 text-sm">
                                1
                            </div>
                            <div className="text-lg">
                                Join our network and start earning money by
                                delivering farm produce with AgriLogiz.
                            </div>
                        </div>

                        <div>
                            <div className="text-xl font-bold pl-8 ">
                                Set your schedule
                            </div>
                            <div className="flex items-center text-start justify-start ">
                                <div className="pr-4 bg-customGreenDark border rounded-full  p-2 text-sm">
                                    2
                                </div>
                                <div className="text-lg">
                                    Drive on your own terms. Weekdays or
                                    weekends, you have the flexibility to choose
                                    when and how often you want to deliver farm
                                    produce.
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="text-xl font-bold pl-8 ">
                                Get paid each week
                            </div>
                            <div className="flex items-center text-start justify-start ">
                                <div className="pr-4 bg-customGreenDark border rounded-full  p-2 text-sm">
                                    3
                                </div>
                                <div className="text-lg">
                                    No more waiting for payday. At AgriLogiz,
                                    you receive your earnings at the end of each
                                    week, ensuring financial stability and
                                    convenience.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EarnSceanPage;

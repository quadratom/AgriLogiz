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

                <div className="flex flex-row  justify-center space-x-20 gap-6 ">
                    {/* Second Row */}
                    <div className="space-y-8">Earn with AgriLogiz</div>
                </div>
            </div>
        </div>
    );
};

export default EarnSceanPage;

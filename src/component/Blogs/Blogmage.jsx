import React from 'react';

const Blogmage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-customGreenDark ">
            <div className="flex items-center justify-center space-x-20 mb-6">
                <div className="bg-customGreenSemiLight h-40 w-60 rounded-lg">
                    <img
                        src="/agricultural.png"
                        alt="agriculture"
                        className="rounded-lg"
                    />
                    <div className="text-xs font-bold text-center mt-2 ">
                        <div>Why Farmers may Continue to </div>
                        <div>Experience low Crop Yield</div>
                    </div>
                </div>
                <div className="bg-customGreenSemiLight h-40 w-60  rounded-lg">
                    <img src="/tap.png" alt="tap" className="rounded-lg" />
                    <div className="text-xs font-bold text-center">
                        <div>The Modern Farmer: Exploring 21st</div>{' '}
                        <div>Century Farming Techniques and</div>
                        <div> Technologies</div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center space-x-20 mb-6">
                <div className="bg-customGreenSemiLight h-40 w-60 rounded-lg">
                    <img src="/Mask.png" alt="Mask" className="rounded-lg" />
                    <div className="text-xs font-bold text-center mt-2 ">
                        <div>The Roles of Satellite Technology </div>
                        <div>in Agriculture in Africa</div>
                    </div>
                </div>
                <div className="bg-customGreenSemiLight h-40 w-60  rounded-lg">
                    <img src="/man.png" alt="man" className="rounded-lg" />
                    <div className="text-xs font-bold text-center mt-2 ">
                        <div>Farmers Guide for Effective </div>
                        <div>Record Keeping</div>
                    </div>
                </div>
            </div>
            <div className="bg-customGreenSemiLight h-40 w-60  rounded-lg">
                <img src="/lorry.png" alt="lorry" className="rounded-lg" />
                <div className="text-xs font-bold text-center mt-2 ">
                    <div>Agricultural Marketing in the </div>
                    <div>21st Century</div>
                </div>
            </div>
        </div>
    );
};

export default Blogmage;

import React from 'react';
import userimage from '../../../../src/assets/userimage.png';
import motto from '../../../../src/assets/motto.png';

const DriverContactPage = () => {
    return (
        <div className="flex justify-center bg-custom-bg bg-cover bg-center font-roboto">
            <div className="bg-customGreenDark m-12 p-8 rounded-lg w-1/2 shadow-lg">
               

                <div className=" flex flex-col  space-y-8">
                  
                    <div className="bg-customGreenLight h-30 w-full p-4 space-y-2  rounded-lg">
                        <div className="flex gap-2">
                            <img
                                className="h-15 w-12 rounded-full"
                                src={userimage}
                                alt="userimage"
                            />
                            <div className="flex flex-col text-base font-medium ">
                                {' '}
                                <p>Daniel Idemudia</p>
                                <p>+234 000 0000 000</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <img
                                className="h-15 w-12 rounded-full"
                                src={motto}
                                alt="motto"
                            />
                            <div className="flex flex-col text-base font-medium ">
                                {' '}
                                <p>Black Camry</p>
                                <p>ED356073</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between text-2xl font-bold  bg-customGreenLight p-2 rounded-lg">
                        <div>Arrival time</div>
                        <div>5 mins</div>
                    </div>
                </div>
                <div className="mt-10  text-right text-xl ">
                    <button className="bg-customYellow text-black py-2 px-6 w-50 h-14 rounded-lg font-semibold">
                    Contact Driver
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DriverContactPage;

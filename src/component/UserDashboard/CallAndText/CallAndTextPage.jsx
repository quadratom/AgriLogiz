import React from 'react';
import userimage from '../../../../src/assets/userimage.png';
import motto from '../../../../src/assets/motto.png';
import tele from '../../../../src/assets/tele.png'
import wats from '../../../../src/assets/wats.png'

const CallAndTestPage = () => {
    return (
        <div className="flex min-h-screen justify-center bg-custom-bg bg-cover bg-center font-roboto">
            <div className="bg-customGreenDark m-12 p-8 rounded-lg w-1/2 shadow-lg ">
                <div className=" flex flex-col  space-y-8 pt-20">
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
                    <div className=" flex justify-between">
                        <div className='flex  bg-customGreenLight w-40 h-12 text-xl font-bold items-center justify-center gap-4 rounded-lg'>
                            <img className='h-8 w-8' src={tele} alt="tele" />

                            <div>Phone call</div>
                        </div>
                        <div className='flex  bg-customGreenLight w-40 h-12 text-xl font-bold items-center justify-center gap-4 rounded-lg'>
                            <img className='h-8 w-8' src={wats} alt="wats" />

                            <div>Phone call</div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CallAndTestPage;

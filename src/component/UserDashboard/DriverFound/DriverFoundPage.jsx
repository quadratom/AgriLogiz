import React from 'react';
import userimage from '../../../../src/assets/userimage.png';


const DriverFoundPage = () => {
    return (
        <div className="flex min-h-screen justify-center bg-custom-bg bg-cover bg-center font-roboto">
            <div className="bg-customGreenDark m-12 p-8 rounded-lg w-1/2 shadow-lg ">
                <div className=" flex flex-col  space-y-10 pt-20">
                    
                    <div className='bg-customGreenLight rounded-lg flex items-center justify-between p-4 pt-4'>
                        <div className='flex items-center gap-4 '>

                        <img className='w-10 h-10 rounded-full' src={userimage} alt="userimage" />
                        <p className='text-xl font-bold'>Connecting to Driver</p>
                        </div>
                        <div>***</div>
                    </div>

                    <div className='flex items-center justify-between text-xl font-bold pt-10'>
                        <div className='text-white text-2xl'>Driver Found</div>
                        <div className='bg-customYellow p-4 rounded-lg'>
                            <button>Click Here</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DriverFoundPage;

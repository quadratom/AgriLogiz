import React from 'react';
import clocky from '../../../src/assets/clocky.png';

const OrderSection = () => {
    return (
        <div className="grid grid-cols-5 m-4 h-full font-roboto ">
            {/* Orders Section */}
            <div className=" bg-customGreenMedium  col-span-1 text-white p-4  rounded-lg mr-4 ">
                <h3 className="text-2xl font-semibold  text-black py-2">
                    Recent Orders
                </h3>
                <div className="grid grid-rows-2 space-y-4">
                    <div className="mt-2 bg-customGreenLight h-14 w-auto rounded-lg ">
                        {/* Insert order details here */}
                    </div>
                    <div className="mt-2 bg-customGreenLight h-14 w-auto  rounded-lg  ">
                        {/* Insert order details here */}
                    </div>
                </div>
            </div>
            <div className="bg-customGreenMedium col-span-4 p-4 rounded-lg ">
                <h3 className="text-2xl font-semibold  text-black py-2">
                    Upcoming Deliveries
                </h3>
                <div className="grid grid-cols-2 place-items-center ">
                    <div className="mt-2 bg-customGreenLight font-bold h-15 w-1/2 rounded-lg ">
                        {/* Insert order details here */}
                        <div>
                            <div className="flex items-center justify-evenly">
                                <img
                                    className="h-8 w-8"
                                    src={clocky}
                                    alt="clocky"
                                />
                                <div className='flex flex-col'>
                                    <h1>13/08/24</h1>
                                    <h1> 12:00pm</h1>
                                </div>
                            </div>
                            <h1 className='flex justify-center'>Satana Market</h1>
                        </div>
                    </div>
                    <div className="mt-2 bg-customGreenLight font-bold h-15 w-1/2 rounded-lg ">
                        {/* Insert order details here */}
                        <div>
                            <div className="flex items-center justify-evenly">
                                <img
                                    className="h-8 w-8"
                                    src={clocky}
                                    alt="clocky"
                                />
                                <div className='flex flex-col'>
                                    <h1>13/08/24</h1>
                                    <h1> 12:00pm</h1>
                                </div>
                            </div>
                            <h1 className='flex justify-center'>Satana Market</h1>
                        </div>
                    </div>
                    <div className="mt-2 bg-customGreenLight font-bold h-15 w-1/2 rounded-lg ">
                        {/* Insert order details here */}
                        <div>
                            <div className="flex items-center justify-evenly">
                                <img
                                    className="h-8 w-8"
                                    src={clocky}
                                    alt="clocky"
                                />
                                <div className='flex flex-col'>
                                    <h1>13/08/24</h1>
                                    <h1> 12:00pm</h1>
                                </div>
                            </div>
                            <h1 className='flex justify-center'>Satana Market</h1>
                        </div>
                    </div>
                    <div className="mt-2 bg-customGreenLight font-bold h-15 w-1/2 rounded-lg ">
                        {/* Insert order details here */}
                        <div>
                            <div className="flex items-center justify-evenly">
                                <img
                                    className="h-8 w-8"
                                    src={clocky}
                                    alt="clocky"
                                />
                                <div className='flex flex-col'>
                                    <h1>13/08/24</h1>
                                    <h1> 12:00pm</h1>
                                </div>
                            </div>
                            <h1 className='flex justify-center'>Satana Market</h1>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default OrderSection;

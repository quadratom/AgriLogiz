import React from 'react';
import sendbutton from '../../../../src/assets/sendbutton.png'
import cancelbutton from '../../../../src/assets/cancelbutton.png'

const DriverDeliverDetailPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen  ">
            <div className="bg-customGreenDark p-8 rounded-xl ">
                <h2 className="text-white text-2xl font-bold mb-4 text-center">
                    Delivery Details
                </h2>
                
                <form className="space-y-4 text-xl">
                    {/* Recipient Name Input */}
                    <div>
                        <label className="text-white font-semibold" htmlFor="recipientName">Recipient Name</label>
                        <input
                            id="recipientName"
                            type="text"
                            className="w-full mt-1 p-2 bg-gray-200 rounded"
                            
                        />
                    </div>
                    
                    {/* Phone Number Input */}
                    <div>
                        <label className="text-white font-semibold" htmlFor="phoneNumber">Phone Number</label>
                        <input
                            id="phoneNumber"
                            type="text"
                            className="w-full mt-1 p-2 bg-gray-200 rounded"
                            
                        />
                    </div>

                    {/* Pickup Address Input */}
                    <div>
                        <label className="text-white font-semibold" htmlFor="pickupAddress">Pickup Address</label>
                        <input
                            id="pickupAddress"
                            type="text"
                            className="w-full mt-1 p-2 bg-gray-200 rounded"
                           
                        />
                    </div>

                    {/* Delivery Address Input */}
                    <div className="flex items-center">
                        <div className="w-full">
                            <label className="text-white font-semibold" htmlFor="deliveryAddress">Delivery Address</label>
                            <input
                                id="deliveryAddress"
                                type="text"
                                className="w-full mt-1 p-2 bg-gray-200 rounded"
                              
                            />
                        </div>
                        <button
                            type="button"
                            className="ml-2 bg-customYellow text-black font-bold py-2 px-3 rounded-lg"
                        >
                            View Map
                        </button>
                    </div>

                    {/* Estimated Delivery Time Input */}
                    <div>
                        <label className="text-white font-semibold" htmlFor="estimatedTime">Estimated Delivery Time</label>
                        <input
                            id="estimatedTime"
                            type="text"
                            className="w-full mt-1 p-2 bg-gray-200 rounded"
                      
                        />
                    </div>

                    {/* Package Description Input */}
                    <div>
                        <label className="text-white font-semibold" htmlFor="packageDescription">Package Description / Special Instructions</label>
                        <textarea
                            id="packageDescription"
                            className="w-full mt-1 p-2 bg-gray-200 rounded"
                           
                        />
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex justify-between items-center mt-4">
                        <button
                            type="button"
                            className=" text-white font-bold p-4 rounded-full"
                        >
                            <img className='h-13 w-12' src={cancelbutton} alt="cancelbutton" />
                        </button>
                        <button
                            type="submit"
                            className=" text-black font-bold p-4 rounded-full"
                        >
                           <img className='h-13 w-12' src={sendbutton} alt="sendbutton" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DriverDeliverDetailPage;

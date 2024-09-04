import React from 'react';

const DriverDeliveryLocationPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-customGreenDark p-6 rounded-xl">
                <h2 className="text-white text-2xl font-bold mb-4 text-center">
                    Delivery Location
                </h2>
                
                <form className="space-y-4 text-xl">
                    {/* Pickup Address Input */}
                    <div className="flex items-center justify-between">
                        <div className="w-full">
                            <label className="text-white font-semibold" htmlFor="pickupAddress">Pickup address</label>
                            <input
                                id="pickupAddress"
                                type="text"
                                className="w-full mt-1 p-2 bg-gray-200 rounded"
                            />
                        </div>
                    </div>

                    {/* Delivery Address Input */}
                    <div className="flex items-center justify-between">
                        <div className="w-full">
                            <label className="text-white font-semibold" htmlFor="deliveryAddress">Delivery address</label>
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

                    {/* Proceed Button */}
                    <div className="flex justify-end mt-4">
                        <button
                            type="submit"
                            className="bg-customYellow text-black font-bold py-2 px-8 rounded-lg"
                        >
                            Proceed
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DriverDeliveryLocationPage;

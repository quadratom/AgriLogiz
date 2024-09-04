import React from 'react';
import sendbutton from '../../../../src/assets/sendbutton.png'; // Placeholder for the check icon image

const DriverDeliveryStatusPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-customGreenDark pt-8 pb-16 pl-4 pr-4 rounded-xl ">
                <form className="space-y-4 text-xl">
                    {/* Arrived at Pickup Location */}
                    <div className="flex items-center justify-between gap-2">
                        <label
                            className="bg-customGreenLight rounded-lg   font-semibold w-full p-2"
                            htmlFor="arrivedPickup"
                        >
                            Arrived at Pickup Location
                        </label>
                        <button
                            type="button"
                            className="ml-2  p-2 rounded-full"
                        >
                            <img
                                className="h-10 w-12"
                                src={sendbutton}
                                alt="checkIcon"
                            />
                        </button>
                    </div>

                    {/* Picked Up Customer/Goods */}
                    <div className="flex items-center justify-between gap-2">
                        <label
                            className="bg-customGreenLight  rounded-lg font-semibold w-full p-2"
                            htmlFor="pickedUp"
                        >
                            Picked Up Customer/goods
                        </label>
                        <button
                            type="button"
                            className="ml-2  p-2 rounded-full"
                        >
                            <img
                                className="h-10 w-12"
                                src={sendbutton}
                                alt="checkIcon"
                            />
                        </button>
                    </div>

                    {/* Start Delivery Button */}
                    <div className="mt-10  text-right  text-xl ">
                        <button className="bg-customYellow text-black  p-2  w-40 h-10 rounded-md font-semibold">
                            Start Delivery
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DriverDeliveryStatusPage;

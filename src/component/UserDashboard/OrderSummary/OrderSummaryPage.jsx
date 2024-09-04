import React from 'react';
import userimage from '../../../../src/assets/userimage.png';
import motto from '../../../../src/assets/motto.png';

const OrderSummaryPage = () => {
    return (
        <div className="flex min-h-screen justify-center bg-custom-bg bg-cover bg-center font-roboto">
            <div className="bg-customGreenDark m-12 p-8 rounded-lg w-1/2 shadow-lg">
                <h1 className="text-white text-lg font-bold  mb-2">
                    Available Drivers
                </h1>

                <div className=" flex flex-col  space-y-4">
                    <textarea
                        className="h-30 w-full rounded-lg placeholder:text-black bg-customGreenLight p-2 "
                        name="text"
                        placeholder="Order summary"
                        id=""
                    ></textarea>
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
                        <div>Total Cost</div>
                        <div>₦3500</div>
                    </div>
                </div>
                <div className="mt-10  text-right text-xl ">
                    <button className="bg-customYellow text-black py-2 px-6 w-36 h-14 rounded-lg font-semibold">
                    Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderSummaryPage;

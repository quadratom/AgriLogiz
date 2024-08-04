import React from 'react';

const AppScreen = () => {
    return (
        <div className=" flex items-center justify-around min-h-screen bg-customGreenLight">
            <div className="">
                <div className="mb-10">
                    <div className="text-4xl font-bold">
                        Request Delivery in{' '}
                    </div>
                    <div className="text-4xl font-bold">
                        seconds, and we will be{' '}
                    </div>
                    <div className="text-4xl font-bold">at your door step</div>
                </div>

                <div className="text-lg font-bold">
                    Available for iOS and Android devices
                </div>

                <div className="mt-6">
                    <button className="bg-customYellow text-white text-lg font-bold px-4 py-2 rounded-full mt-1">
                        Get the app
                    </button>
                </div>
            </div>

            <div className="relative flex items-center justify-center bg-customGreenDark rounded-full overflow-hidden size-80">
                <img
                    src="/closeup-hand.png"
                    alt="closeup-hand"
                    className="absolute object-cover w-full h-full"
                />
                <img
                    src="/appAgri.png"
                    alt="appAgri"
                    className="absolute object-cover w-18 h-9  pl-4"
                />
            </div>
        </div>
    );
};

export default AppScreen;

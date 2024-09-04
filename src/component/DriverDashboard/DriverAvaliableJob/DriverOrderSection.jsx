import React from 'react';


const DriverOrderSection = () => {
    return (
        <div className=" m-4  font-roboto ">
            {/* Orders Section */}
            <div className=" bg-customGreenMedium  w-64 text-white p-4  rounded-lg  ">
                <h3 className="text-2xl font-semibold  text-black py-2">
                Completed Trips
                </h3>
                <div className="grid grid-rows-2 space-y-4">
                    <div className="mt-2 bg-customGreenLight h-14  rounded-lg ">
                        {/* Insert order details here */}
                    </div>
                    <div className="mt-2 bg-customGreenLight h-14   rounded-lg  ">
                        {/* Insert order details here */}
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default DriverOrderSection;

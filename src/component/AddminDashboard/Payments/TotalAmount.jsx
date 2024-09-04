import React from 'react';

const TotalAmount = () => {
    return (
        <div>
            <div className="flex flex-col bg-customGreenLight ml-10 mr-10 p-4 space-y-2 font-roboto  rounded-xl ">
                <div className=" text-black flex items-center justify-between  ">
                    <div className="">
                        Total Amount Generated per day
                    </div>
                    <div> 
                        <div className="text-2xl ">0000</div>
                    </div>
                </div>
                <div className=" text-black  flex items-center justify-between">
                    <div className="">
                        Total Amount Generated per week
                    </div>
                    <div> 
                        <div className="text-2xl ">0000</div>
                    </div>
                </div>
                <div className=" text-black flex items-center justify-between ">
                    <div className="">
                        Total Amount Generated per month
                    </div>
                    <div> 
                        <div className="text-2xl ">0000</div>
                    </div>
                </div>
                <div className=" text-black flex items-center justify-between ">
                    <div className="">
                        Total Amount Generated per year
                    </div>
                    <div> 
                        <div className="text-2xl ">0000</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TotalAmount;

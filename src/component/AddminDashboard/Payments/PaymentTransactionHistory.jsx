import React from 'react';

const PaymentTransactionHistory = () => {
    return (
        <div className='flex flex-col m-10 font-roboto bg-customGreenLight  rounded-xl justify-center items-center'>

        <div className="m-4">
            {' '}
            <div className="text-customGreenDark text-xl font-bold mb-4">
                Transaction History
            </div>
            <div className="flex  gap-2 mb-6">
                <div className=" bg-customGreenDark w-1/2  text-white p-2 rounded-xl">
                    <div className='flex items-center justify-between space-y-2 gap-2'>
                        <div className="">Total User</div>
                        <div className="">0000</div>
                    </div> 
                    <div className='flex items-center justify-between gap-2'>
                        <div className="">Amount Generated</div>
                        <div className="">0000</div>
                    </div>
                </div>

                <div className=" bg-customGreenDark text-white p-4 rounded-xl">
                    <div className='flex items-center justify-between gap-2'>
                        <div className="">Total Driver's Paid</div>
                        <div className="">0000</div>
                    </div>
                    <div className='flex  items-center justify-between gap-2'>
                        <div className="">Amount Paid</div>
                        <div className="">0000</div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default PaymentTransactionHistory;

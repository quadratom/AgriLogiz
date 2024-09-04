import React from 'react';
import { Link } from 'react-router-dom';

const Payment = () => {
    return (
        <>
          
            <div className="flex flex-col min-h-screen font-roboto bg-customGreenLight justify-center items-center">
                <div className="p-8 w-full max-w-5xl">
                   

                    
                    <div className="bg-white rounded-lg p-4">
                        <h3 className="text-customGreenDark font-bold mb-4">Customer's Chart</h3>
                        <div className="w-full">
                            {/* Place your chart component here */}
                        </div>
                    </div>
                </div>
            </div>
           
        </>
    );
};

export default Payment;

import React from 'react';

const DriverLists = () => {
    return (
        <div className='p-10 pl-20'>
            {' '}
            {/* Customer's List Section */}
            <div className="col-span-3 p-4 bg-customGreenLight rounded-lg ">
                <h3 className="text-xl font-bold text-black mb-4 ">
                Driver’s List 
                </h3>
                <div className="grid grid-cols-8 gap-2 text-center justify-center ">
                    {[
                        "Customer's ID",
                        'Name',
                        'Email Address',
                        'Phone Number',
                        'Location',
                        'Account Status',
                        'Last Order',
                        'Total Spent'
                    ].map(item => (
                        <div
                            key={item}
                            className="bg-custom-green-gradient from-custom-green-medium to-custom-green-dark text-white text-center items-center justify-center p-2 rounded-full  overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DriverLists ;

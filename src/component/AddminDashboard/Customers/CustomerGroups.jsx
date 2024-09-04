import React from 'react';

const CustomerGroups = () => {
    return (
        <div>
            {/* Customer's Group Section */}
            <div className="col-span-1 p-4 bg-customGreenLight  rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-black mb-4 ">
                    Customer's Group
                </h3>
                <div className="grid grid-cols-4 gap-2">
                    {[
                        'Purchase History',
                        'Location',
                        'Customers Review',
                        'Customer Loyalty'
                    ].map(item => (
                        <div
                            key={item}
                            className="bg-custom-green-gradient from-custom-green-medium to-custom-green-dark text-white text-center p-2 rounded-full overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CustomerGroups;

import React, { useState } from 'react';
import delivery from '../../../../src/assets/delivery.png';
import search from '../../../../src/assets/search.png';

const DeliveryOptionsPageTwo = () => {
    const [pickupLocation, setPickupLocation] = useState('');
    const [deliveryDestination, setDeliveryDestination] = useState('');
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const validationErrors = {};
        let isValid = true;

        // Validate Pickup Location
        if (!pickupLocation.trim()) {
            validationErrors.pickupLocation = 'Pickup location is required';
            isValid = false;
        } else if (pickupLocation.length < 3) {
            validationErrors.pickupLocation = 'Pickup location must be at least 3 characters long';
            isValid = false;
        }

        // Validate Delivery Destination
        if (!deliveryDestination.trim()) {
            validationErrors.deliveryDestination = 'Delivery destination is required';
            isValid = false;
        } else if (deliveryDestination.length < 3) {
            validationErrors.deliveryDestination = 'Delivery destination must be at least 3 characters long';
            isValid = false;
        }

        setErrors(validationErrors);
        return isValid;
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // If validation passes, submit the form
        if (validateForm()) {
            console.log('Pickup Location:', pickupLocation);
            console.log('Delivery Destination:', deliveryDestination);

            // Reset the form after submission
            setPickupLocation('');
            setDeliveryDestination('');
            setErrors({});
        }
    };

    return (
        <div className="flex min-h-screen justify-center bg-custom-bg bg-cover bg-center font-roboto">
            <div className="bg-customGreenDark m-12 p-8 rounded-lg w-1/2 shadow-lg">
                <form onSubmit={handleFormSubmit}>
                    <div className="space-y-6 pt-8">
                        {/* Pickup location */}
                        <div className="relative flex flex-col">
                            <div className="relative flex items-center">
                                {/* Image */}
                                <img
                                    src={delivery}
                                    alt="delivery"
                                    className="absolute left-3 h-8 w-8"
                                />

                                {/* Input field */}
                                <input
                                    className={`placeholder:text-black font-bold text-2xl h-16 w-full rounded-lg pl-14 ${
                                        errors.pickupLocation ? 'border-2 border-red-500' : ''
                                    }`} 
                                    type="text"
                                    value={pickupLocation}
                                    onChange={(e) => setPickupLocation(e.target.value)}
                                    placeholder="Pickup Location"
                                />
                            </div>
                            {/* Error message for Pickup Location */}
                            {errors.pickupLocation && (
                                <p className="text-red-500 text-sm mt-2">{errors.pickupLocation}</p>
                            )}
                        </div>

                        {/* Delivery Destination */}
                        <div className="relative flex flex-col">
                            <div className="relative flex items-center">
                                {/* Image */}
                                <img
                                    src={search}
                                    alt="search"
                                    className="absolute left-3 h-8 w-8"
                                />

                                {/* Input field */}
                                <input
                                    className={`placeholder:text-black font-bold text-2xl h-16 w-full rounded-lg pl-14 ${
                                        errors.deliveryDestination ? 'border-2 border-red-500' : ''
                                    }`} 
                                    type="text"
                                    value={deliveryDestination}
                                    onChange={(e) => setDeliveryDestination(e.target.value)}
                                    placeholder="Delivery Destination"
                                />
                            </div>
                            {/* Error message for Delivery Destination */}
                            {errors.deliveryDestination && (
                                <p className="text-red-500 text-sm mt-2">{errors.deliveryDestination}</p>
                            )}
                        </div>
                    </div>

                    {/* Next Button */}
                    <div className="mt-10 text-right text-xl">
                        <button
                            type="submit"
                            className="bg-customYellow text-black py-2 px-6 w-36 h-14 rounded-lg font-semibold"
                        >
                            Next
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DeliveryOptionsPageTwo;

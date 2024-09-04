import React, { useState } from 'react';
import avat from '../../../../src/assets/avat.png';
import motto from '../../../../src/assets/motto.png';
import network from '../../../../src/assets/network.png';

const DeliveryOptionsPageThree = () => {
    const [selectedOption, setSelectedOption] = useState('shared');
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState({ option: '', description: '' });

    const handleOptionChange = (option) => {
        setSelectedOption(option);
        setErrors({ ...errors, option: '' }); // Clear error when option is selected
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let formIsValid = true;
        const newErrors = { option: '', description: '' };

        if (!selectedOption) {
            newErrors.option = 'Please select a delivery option.';
            formIsValid = false;
        }

        if (!description.trim()) {
            newErrors.description = 'Description is required.';
            formIsValid = false;
        }

        if (formIsValid) {
            // Add form submission logic here
            console.log('Selected Delivery Option:', selectedOption);
            console.log('Description:', description);
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <div className="flex min-h-screen justify-center bg-custom-bg bg-cover bg-center font-roboto">
            <div className="bg-customGreenDark m-12 p-8 rounded-lg w-1/2 shadow-lg">
                <form onSubmit={handleSubmit}>
                    <div className="space-y-6 pt-8">
                        {/* Shared Delivery Option */}
                        <div
                            className={`flex justify-between items-center p-3 rounded-lg cursor-pointer ${
                                selectedOption === 'shared'
                                    ? 'bg-customYellow'
                                    : 'bg-customGreenLight'
                            }`}
                            onClick={() => handleOptionChange('shared')}
                        >
                            <div className="flex items-center">
                                <div className="flex items-center justify-center space-x-2">
                                    <img
                                        src={network}
                                        alt="network"
                                        className="h-8 w-8"
                                    />
                                    <img
                                        src={motto}
                                        alt="motto"
                                        className="h-12 w-12"
                                    />
                                </div>
                                <span className="ml-4 text-lg font-semibold text-black">
                                    Shared Delivery
                                </span>
                            </div>
                            <span className="text-lg font-semibold text-black">₦1500</span>
                        </div>

                        {/* Express Delivery Option */}
                        <div
                            className={`flex justify-between items-center p-3 rounded-lg cursor-pointer ${
                                selectedOption === 'express'
                                    ? 'bg-customYellow'
                                    : 'bg-customGreenLight'
                            }`}
                            onClick={() => handleOptionChange('express')}
                        >
                            <div className="flex items-center">
                                <div className="flex items-center justify-center">
                                    <img
                                        src={avat}
                                        alt="avat"
                                        className="h-12 w-12"
                                    />
                                    <img
                                        src={motto}
                                        alt="motto"
                                        className="h-12 w-14"
                                    />
                                </div>
                                <span className="ml-4 text-lg font-semibold text-black">
                                    Express Delivery
                                </span>
                            </div>
                            <span className="text-lg font-semibold text-black">₦3500</span>
                        </div>

                        {/* Description with Placeholder */}
                        <div className="flex flex-col">
                            <textarea
                                className={`h-40 w-full p-4 rounded-lg placeholder-bold placeholder:text-black ${errors.description ? 'border-red-500' : ''}`}
                                placeholder="Description: Add a detailed description of goods to be transported."
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                            {errors.description && (
                                <p className="text-red-500 text-sm mt-1">{errors.description}</p>
                            )}
                        </div>

                        {/* Validation Error for Option */}
                        {errors.option && (
                            <p className="text-red-500 text-sm">{errors.option}</p>
                        )}
                    </div>

                    {/* Book Ride Button */}
                    <div className="mt-10 text-right">
                        <button
                            type="submit"
                            className="bg-customYellow text-black py-2 px-6 w-36 h-14 rounded-lg font-semibold"
                        >
                            Book Ride
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DeliveryOptionsPageThree;

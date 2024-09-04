import React, { useState } from 'react';
import TopBar from '../../Navbar/TopBar';
import UserHomeBar from '../UserHomeBar';
import UserFooter from '../UserFooter';
import car from '../../../assets/car.png'; // Ensure this path is correct

const DriverSignUpWithDetailTwo = () => {
    const [formData, setFormData] = useState({
        vehicleType: '',
        vehicleModelYear: '',
        licensePlateNumber: '',
        insuranceInformation: '',
        drivingExperience: '',
        drivingHistory: '',
        vehicleImage: null
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = e => {
        const { name, files } = e.target;
        setFormData({ ...formData, [name]: files[0] });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        const data = new FormData();
        Object.keys(formData).forEach(key => {
            data.append(key, formData[key]);
        });

        try {
            const response = await fetch('/api/driver-signup', {
                method: 'POST',
                body: data
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            console.log(result);
            // Handle success (e.g., show a success message, redirect)
        } catch (error) {
            console.error(error);
            // Handle error (e.g., show an error message)
        }
    };

    return (
        <div className="min-h-screen flex flex-col font-roboto bg-customGreenLight">
            <TopBar />
            <UserHomeBar />
            <div className="flex flex-grow justify-center items-center">
                <form onSubmit={handleSubmit} className="p-8 w-full max-w-4xl">
                    <h2 className="text-3xl font-bold text-customGreenDark mb-8 text-start">
                        Sign up as a Driver
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-40">
                        <div>
                            <h3 className="text-xl font-bold text-customGreenDark mb-4">
                                Vehicle Information
                            </h3>
                            <div className="flex flex-col space-y-4">
                                {/* <div className="flex justify-between items-center border border-customGreenDark rounded-lg p-2">
                                    <input
                                        type="file"
                                        name="vehicleImage"
                                        className=""
                                        onChange={handleFileChange}
                                        id="vehicleImage"
                                    />
                                    <label
                                        htmlFor="vehicleImage"
                                        className="bg-customGreenDark text-white py-1 px-4 rounded cursor-pointer"
                                    >
                                        Upload
                                    </label>
                                </div> */}
                                <div>
                                    <input
                                        type="text"
                                        name="vehicleType"
                                        placeholder="Vehicle Type"
                                        className="w-full px-3 py-2 border bg-customGreenLight placeholder:text-customGreenDark font-bold border-customGreenDark rounded-lg focus:outline-none focus:border-customGreenDark"
                                        value={formData.vehicleType}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="vehicleModelYear"
                                        placeholder="Vehicle Model and Year"
                                        className="w-full px-3 py-2 border bg-customGreenLight placeholder:text-customGreenDark font-bold border-customGreenDark rounded-lg focus:outline-none focus:border-customGreenDark"
                                        value={formData.vehicleModelYear}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="licensePlateNumber"
                                        placeholder="License Plate Number"
                                        className="w-full px-3 py-2 border bg-customGreenLight placeholder:text-customGreenDark font-bold border-customGreenDark rounded-lg focus:outline-none focus:border-customGreenDark"
                                        value={formData.licensePlateNumber}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="insuranceInformation"
                                        placeholder="Insurance Information"
                                        className="w-full px-3 py-2 border bg-customGreenLight placeholder:text-customGreenDark font-bold border-customGreenDark rounded-lg focus:outline-none focus:border-customGreenDark"
                                        value={formData.insuranceInformation}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <img
                                src={car} // Replace with your image path
                                alt="Car"
                                className="w-full h-auto mb-4"
                            />
                        </div>
                    </div>
                    <h3 className="text-xl font-bold text-customGreenDark mt-8 mb-4">
                        Driving History
                    </h3>
                    <div className="flex flex-col space-y-4">
                        <div className=' space-y-3'>
                            <div className="text-customGreenDark font-bold flex flex-col">
                                <div>How many years of driving experience</div>
                                <div> do you have?</div>
                            </div>
                            <input
                                type="text"
                                name="drivingExperience"
                                placeholder=""
                                className="w-1/2 px-3 py-2 border bg-customGreenLight placeholder:text-customGreenDark font-bold border-customGreenDark rounded-lg focus:outline-none focus:border-customGreenDark"
                                value={formData.drivingExperience}
                                onChange={handleChange}
                            />
                        </div>
                        <div  className=' space-y-3'>
                            <div className="text-customGreenDark font-bold flex flex-col">
                               <div> Give a brief driving history, including any</div>
                                <div>traffic violations or accidents.</div>
                            </div>
                            <textarea
                                name="drivingHistory"
                                placeholder=""
                                className="w-1/2 px-3 py-2 border bg-customGreenLight placeholder:text-customGreenDark font-bold border-customGreenDark rounded-lg focus:outline-none focus:border-customGreenDark"
                                value={formData.drivingHistory}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col items-end justify-end mt-8">
                        <button
                            type="submit"
                            className="bg-customYellow text-customGreenDark font-bold text-xl py-2 px-8 rounded-lg"
                        >
                            Next
                        </button>
                        <div className="text-end font-bold">
                            <a
                                href="#"
                                className="text-customGreenDark text-xs underline"
                            >
                                Already have an account?{' '}
                                <span className="text-customred">Sign in</span>
                            </a>
                        </div>
                    </div>
                </form>
            </div>
            <UserFooter />
        </div>
    );
};

export default DriverSignUpWithDetailTwo;

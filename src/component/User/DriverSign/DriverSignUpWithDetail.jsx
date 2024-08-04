import React, { useState } from 'react';
import TopBar from '../../Navbar/TopBar';
import UserHomeBar from '../UserHomeBar';
import UserFooter from '../UserFooter';
import car from '../../../assets/car.png'; // Ensure this path is correct

const DriverSignUpWithDetail = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        dateOfBirth: '',
        email: '',
        phone: '',
        address: '',
        driversLicense: null,
        idCard: null,
        votersCard: null,
        passport: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData({ ...formData, [name]: files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        Object.keys(formData).forEach((key) => {
            data.append(key, formData[key]);
        });

        try {
            const response = await fetch('/api/driver-signup', {
                method: 'POST',
                body: data,
                // No need to set 'Content-Type' header
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
                                Personal Information
                            </h3>
                            <div className="flex flex-col space-y-4">
                                <div>
                                    <input
                                        type="text"
                                        name="fullName"
                                        placeholder="Full Name"
                                        className="w-full px-3 py-2 border bg-customGreenLight placeholder:text-customGreenDark font-bold border-customGreenDark rounded-lg focus:outline-none focus:border-customGreenDark"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <input
                                        type="date"
                                        name="dateOfBirth"
                                        placeholder="Date of Birth"
                                        className="w-full px-3 py-2 border bg-customGreenLight placeholder:text-customGreenDark font-bold border-customGreenDark rounded-lg focus:outline-none focus:border-customGreenDark"
                                        value={formData.dateOfBirth}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        className="w-full px-3 py-2 border bg-customGreenLight placeholder:text-customGreenDark font-bold border-customGreenDark rounded-lg focus:outline-none focus:border-customGreenDark"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone Number"
                                        className="w-full px-3 py-2 border bg-customGreenLight placeholder:text-customGreenDark font-bold border-customGreenDark rounded-lg focus:outline-none focus:border-customGreenDark"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="address"
                                        placeholder="Home address"
                                        className="w-full px-3 py-2 border bg-customGreenLight placeholder:text-customGreenDark font-bold border-customGreenDark rounded-lg focus:outline-none focus:border-customGreenDark"
                                        value={formData.address}
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
                        Means of Identification
                    </h3>
                    <div className="flex flex-col w-1/2 gap-4">
                        <div className="flex justify-between items-center border border-customGreenDark rounded-lg p-2">
                            <span className="text-customGreenDark">Driver's License</span>
                            <input
                                type="file"
                                name="driversLicense"
                                className="hidden"
                                onChange={handleFileChange}
                                id="driversLicense"
                            />
                            <label
                                htmlFor="driversLicense"
                                className="bg-customGreenDark text-white py-1 px-4 rounded cursor-pointer"
                            >
                                Upload
                            </label>
                        </div>
                        <div className="flex justify-between items-center border border-customGreenDark rounded-lg p-2">
                            <span className="text-customGreenDark">Valid ID Card</span>
                            <input
                                type="file"
                                name="idCard"
                                className="hidden"
                                onChange={handleFileChange}
                                id="idCard"
                            />
                            <label
                                htmlFor="idCard"
                                className="bg-customGreenDark text-white py-1 px-4 rounded cursor-pointer"
                            >
                                Upload
                            </label>
                        </div>
                        <div className="flex justify-between items-center border border-customGreenDark rounded-lg p-2">
                            <span className="text-customGreenDark">Voter's Card</span>
                            <input
                                type="file"
                                name="votersCard"
                                className="hidden"
                                onChange={handleFileChange}
                                id="votersCard"
                            />
                            <label
                                htmlFor="votersCard"
                                className="bg-customGreenDark text-white py-1 px-4 rounded cursor-pointer"
                            >
                                Upload
                            </label>
                        </div>
                        <div className="flex justify-between items-center border border-customGreenDark rounded-lg p-2">
                            <span className="text-customGreenDark">Recent Passport</span>
                            <input
                                type="file"
                                name="passport"
                                className="hidden"
                                onChange={handleFileChange}
                                id="passport"
                            />
                            <label
                                htmlFor="passport"
                                className="bg-customGreenDark text-white py-1 px-4 rounded cursor-pointer"
                            >
                                Upload
                            </label>
                        </div>
                    </div>
                    <div className="flex flex-col items-end justify-end mt-8">
                        <button type="submit" className="bg-customYellow text-customGreenDark font-bold text-xl py-2 px-8 rounded-lg">
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

export default DriverSignUpWithDetail;

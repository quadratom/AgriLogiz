import React, { useState } from 'react';
import TopBar from '../../Navbar/TopBar';
import UserHomeBar from '../UserHomeBar';
import UserFooter from '../UserFooter';
import car from '../../../assets/car.png'; // Ensure this path is correct

const DriverSignUpWithDetailThree = () => {
    const [formData, setFormData] = useState({
        backgroundCheckConsent: '',
        availabilitySchedule: '',
        bankName: '',
        accountNumber: '',
        accountName: '',
        reference: null,
        termsAccepted: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
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
                            <h3 className="text-lg  text-customGreenDark mb-4">
                                Background Check
                            </h3>
                            <div className="flex flex-col space-y-4">
                                <div>
                                    <div className=' text-customGreenDark mb-2'>Do we have your consent to undergo a background check which may include criminal history and driving record check?</div>
                                    <textarea
                                        name="backgroundCheckConsent"
                                        placeholder=""
                                        className="w-full px-3 py-2 border bg-customGreenLight placeholder:text-customGreenDark font-bold border-customGreenDark rounded-lg focus:outline-none focus:border-customGreenDark"
                                        value={formData.backgroundCheckConsent}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <div className=' text-customGreenDark mb-2' >Availability Schedule</div>
                                    <input
                                        type="text"
                                        name="availabilitySchedule"
                                        placeholder=""
                                        className="w-full px-3 py-2 border bg-customGreenLight placeholder:text-customGreenDark font-bold border-customGreenDark rounded-lg focus:outline-none focus:border-customGreenDark"
                                        value={formData.availabilitySchedule}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <h3 className="text-lg  text-customGreenDark mt-8 mb-4">
                                Payment Details
                            </h3>
                            <div className="flex flex-col space-y-4">
                                <div>
                                    <input
                                        type="text"
                                        name="bankName"
                                        placeholder="Bank Name"
                                        className="w-full px-3 py-2 border bg-customGreenLight placeholder:text-customGreenDark font-bold border-customGreenDark rounded-lg focus:outline-none focus:border-customGreenDark"
                                        value={formData.bankName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="accountNumber"
                                        placeholder="Account Number"
                                        className="w-full px-3 py-2 border bg-customGreenLight placeholder:text-customGreenDark font-bold border-customGreenDark rounded-lg focus:outline-none focus:border-customGreenDark"
                                        value={formData.accountNumber}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="accountName"
                                        placeholder="Account Name"
                                        className="w-full px-3 py-2 border bg-customGreenLight placeholder:text-customGreenDark font-bold border-customGreenDark rounded-lg focus:outline-none focus:border-customGreenDark"
                                        value={formData.accountName}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <h3 className="text-lg text-customGreenDark mt-8 mb-4">
                                Reference
                            </h3>
                            <div className="flex flex-col space-y-4">
                                <div className="flex flex-col justify-start items-start   ">
                                    <span className="text-customGreenDark pb-2">From previous employer or colleagues</span>
                                    <input
                                        type="file"
                                        name="reference"
                                        className="hidden  "
                                        onChange={handleFileChange}
                                        id="reference"
                                    />
                                    <label
                                        htmlFor="reference"
                                        className="bg-customGreenDark text-white py-1 px-4 rounded cursor-pointer"
                                    >
                                        Upload
                                    </label>
                                </div>
                            </div>
                            <div className="flex items-center justify-between mt-4">
                            <label htmlFor="termsAccepted" className="text-customGreenDark font-bold">
                                    Terms & Conditions
                                </label>
                                <input
                                    type="checkbox"
                                    name="termsAccepted"
                                    id="termsAccepted"
                                    checked={formData.termsAccepted}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                               
                            </div>
                        </div>
                        <div className="flex  justify-center items-center">
                            <img
                                src={car} // Replace with your image path
                                alt="Car"
                                className="w-full h-auto mb-40"
                            />
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

export default DriverSignUpWithDetailThree;

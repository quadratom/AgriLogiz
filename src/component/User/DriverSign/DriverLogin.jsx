import React, { useState } from 'react';
import TopBar from '../../Navbar/TopBar';
import UserHomeBar from '../UserHomeBar';
import UserFooter from '../UserFooter';

const DriverLogin = () => {
    const [formData, setFormData] = useState({
        emailOrPhone: '',
        password: '',
        terms: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.terms) {
            alert('You must agree to the terms and conditions.');
            return;
        }

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Login successful!');
                // Optionally redirect the user or clear the form
            } else {
                const error = await response.json();
                alert(`Login failed: ${error.message}`);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div className="flex flex-col min-h-screen font-roboto bg-customGreenLight">
            <TopBar />
            <UserHomeBar />
            <div className="flex flex-grow justify-center items-center">
                <form
                    onSubmit={handleSubmit}
                    className=" p-8  w-full max-w-md"
                >
                    <h2 className="text-customGreenDark text-2xl font-bold text-center pr-8">
                        Welcome,
                    </h2>
                    <p className="text-customGreenDark text-xl pb-6 text-center">
                        Glad to see you!
                    </p>
                    <div className="mb-8">
                        <input
                            type="text"
                            name="emailOrPhone"
                            value={formData.emailOrPhone}
                            onChange={handleChange}
                            placeholder="Phone Number/Email Address"
                            className="w-full px-3 py-2 border-2 bg-customGreenLight placeholder:text-customGreenDark font-bold border-customGreenDark rounded-lg focus:outline-none focus:border-customGreenDark"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Password"
                            className="w-full px-3 py-2 border-2 bg-customGreenLight placeholder:text-customGreenDark font-bold border-customGreenDark rounded-lg focus:outline-none focus:border-customGreenDark"
                        />
                        <div className="text-right pt-2">
                            <a href="#" className="text-customGreenDark text-sm ">
                                Forgot Password?
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-between mb-4 pt-6">
                        <label className="text-customGreenDark text-lg font-bold">
                            Terms & Conditions
                        </label>
                        <input
                            type="checkbox"
                            name="terms"
                            checked={formData.terms}
                            onChange={handleChange}
                            className="mr-2 h-4 custom-checkbox"
                        />
                    </div>
                    <div className='flex flex-col pt-8 items-end'>
                        <button
                            type="submit"
                            className="bg-customYellow text-xl font-bold text-customGreenDark w-1/3 h-12 py-2 rounded-lg hover:bg-customGreenDark hover:text-white transition duration-200"
                        >
                            Login
                        </button>
                        <div className="text-end font-bold pt-12">
                            <a href="#" className="text-customGreenDark text-xs underline">
                                Already have an account?
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

export default DriverLogin;

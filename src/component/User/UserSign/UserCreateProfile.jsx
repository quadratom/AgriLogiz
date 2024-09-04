import React, { useState } from 'react';
import UserFooter from '../UserFooter';
import UserHomeBar from '../UserHomeBar';
import TopBar from '../../Navbar/TopBar';
import { Link } from 'react-router-dom';

const UserCreateProfile = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        dob: '',
        email: '',
        phone: '',
        address: '',
        paymentOption: ''
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(null);

        try {
            const response = await fetch('YOUR_BACKEND_ENDPOINT_HERE', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'An error occurred');
            }

            setSuccess('Profile created successfully!');
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <TopBar />
            <UserHomeBar />
            <div className="flex flex-col min-h-screen font-roboto bg-customGreenLight justify-center items-center">
                <form onSubmit={handleSubmit} className="p-8 w-full max-w-md">
                    <h2 className="text-customGreenDark text-xl font-bold text-center mb-4">
                        Create Profile
                    </h2>
                    <p className="text-customGreenDark text-base font-bold text-center mb-4">
                        Personal Information
                    </p>
                    {error && (
                        <p className="text-red-500 text-center">{error}</p>
                    )}
                    {success && (
                        <p className="text-green-500 text-center">{success}</p>
                    )}
                    <div className="mb-4">
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border-2 bg-customGreenLight placeholder:text-customGreenDark text-customGreenDark font-bold border-customGreenDark rounded-lg"
                            placeholder="Full Name"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            name="dob"
                            value={formData.dob}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border-2 bg-customGreenLight placeholder:text-customGreenDark text-customGreenDark font-bold border-customGreenDark rounded-lg"
                            placeholder="Date of Birth"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border-2 bg-customGreenLight placeholder:text-customGreenDark text-customGreenDark font-bold border-customGreenDark rounded-lg"
                            placeholder="Email Address"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border-2 bg-customGreenLight placeholder:text-customGreenDark text-customGreenDark font-bold border-customGreenDark rounded-lg"
                            placeholder="Phone Number"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border-2 bg-customGreenLight placeholder:text-customGreenDark text-customGreenDark font-bold border-customGreenDark rounded-lg"
                            placeholder="Home Address"
                        />
                    </div>
                    <div className="mb-4">
                        <p className="text-customGreenDark text-base font-bold text-center mb-4">
                            Others
                        </p>
                        <select
                            name="paymentOption"
                            value={formData.paymentOption}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border-2 bg-customGreenLight text-customGreenDark font-bold border-customGreenDark rounded-lg"
                        >
                            <option className="bg-customGreenDark text-customGreenLight" value="" disabled>
                                Preferred payment option
                            </option>
                            <option className="text-customGreenDark" value="Credit Card">Credit Card</option>
                            <option className="text-customGreenDark" value="Debit Card">Debit Card</option>
                            <option className="text-customGreenDark" value="PayPal">PayPal</option>
                            <option className="text-customGreenDark" value="Bank Transfer">Bank Transfer</option>
                        </select>
                    </div>
                    <div className="flex flex-col items-end">
                        <button
                            type="submit"
                            className="bg-customYellow text-xl font-bold text-customGreenDark w-1/3 h-12 py-2 rounded-lg hover:bg-customGreenDark hover:text-white transition duration-200"
                            disabled={loading}
                        >
                            {loading ? 'Signing up...' : 'Sign up'}
                        </button>
                        <div className="text-end font-bold">
                            <Link to="/userlogin"
                                href="#"
                                className="text-customGreenDark text-xs underline"
                            >
                                Already have an account?{' '}
                                <span className="text-customred">Sign in</span>
                            </Link >
                        </div>
                    </div>
                </form>
            </div>
            <UserFooter />
        </>
    );
};

export default UserCreateProfile;

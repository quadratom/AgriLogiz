import React, { useState } from 'react';
import TopBar from '../../Navbar/TopBar';
import UserHomeBar from '../UserHomeBar';
import UserFooter from '../UserFooter';
import { Link } from 'react-router-dom';

const UserSignUp = () => {
    const [formData, setFormData] = useState({
        emailOrPhone: '',
        password: '',
        confirmPassword: '',
        terms: false,
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(null);

        try {
            const response = await fetch('YOUR_BACKEND_ENDPOINT_HERE', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    emailOrPhone: formData.emailOrPhone,
                    password: formData.password,
                    confirmPassword: formData.confirmPassword,
                    terms: formData.terms,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'An error occurred');
            }

            setSuccess("Account created successfully! Please check your email for verification.");
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col min-h-screen font-roboto bg-customGreenLight">
            <TopBar />
            <UserHomeBar />
            <div className="flex flex-grow justify-center items-center">
                <form onSubmit={handleSubmit} className="p-8 mt-6 w-full max-w-md">
                    <h2 className="text-customGreenDark text-2xl font-bold text-center">
                        Create an Account
                    </h2>
                    <p className="text-customGreenDark text-xl pb-4 text-center">
                        To get started now!
                    </p>
                    {error && <p className="text-red-500 text-center">{error}</p>}
                    {success && <p className="text-green-500 text-center">{success}</p>}
                    <div className="mb-6">
                        <input
                            type="text"
                            name="emailOrPhone"
                            value={formData.emailOrPhone}
                            onChange={handleChange}
                            placeholder="Phone Number/Email Address"
                            className="w-full px-3 py-2 border-2 bg-customGreenLight placeholder:text-customGreenDark font-bold border-customGreenDark rounded-lg focus:outline-none focus:border-customGreenDark"
                        />
                    </div>

                    <div className="mb-6">
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Password"
                            className="w-full px-3 py-2 border-2 bg-customGreenLight placeholder:text-customGreenDark font-bold border-customGreenDark rounded-lg focus:outline-none focus:border-customGreenDark"
                        />
                    </div>
                    <div className="mb-6">
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="Confirm Password"
                            className="w-full px-3 py-2 border-2 bg-customGreenLight placeholder:text-customGreenDark font-bold border-customGreenDark rounded-lg focus:outline-none focus:border-customGreenDark"
                        />
                    </div>
                    <div className="flex justify-between mt-8 mb-4 pt-2">
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
                    <div className="flex flex-col items-end">
                        <Link to="/userverifyemail">
                        <button
                            type="submit"
                            className="bg-customYellow text-xl font-bold text-customGreenDark h-12 w-24 py-2 rounded-lg hover:bg-customGreenDark hover:text-white transition duration-200"
                            disabled={loading}
                        >
                            {loading ? 'Signing up...' : 'Sign up'}
                        </button>
                            </Link>
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
        </div>
    );
};

export default UserSignUp;

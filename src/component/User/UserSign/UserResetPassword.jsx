import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import TopBar from '../../Navbar/TopBar';
import UserHomeBar from '../UserHomeBar';
import UserFooter from '../UserFooter';
import arrow from '../../../assets/arrow.png';

const UserResetPassword = () => {
    const { token } = useParams();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'password') {
            setPassword(value);
        } else {
            setConfirmPassword(value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        // Send new password to backend
        fetch('/api/auth/reset-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token, password }),
        }).then(response => response.json())
        .then(data => {
            // Handle response
            console.log(data);
        });
    };

    return (
        <div>
            <TopBar />
            <UserHomeBar />
            <div className="flex flex-col min-h-screen bg-customGreenLight font-roboto">
                <div className="flex justify-center items-center flex-grow">
                    <form onSubmit={handleSubmit} className="bg-customGreenDark rounded-3xl p-8 w-1/3 shadow-lg">
                        <h2 className="text-customGreenLight text-3xl pb-8 text-center">Reset Password</h2>
                        <div className="mb-6">
                            <input
                                type="password"
                                name="password"
                                value={password}
                                onChange={handleChange}
                                placeholder="Enter New Password"
                                className="w-full px-3 py-2 border-2 bg-customGreenLight placeholder:text-customGreenDark font-bold border-customGreenDark rounded-lg focus:outline-none focus:border-customGreenDark"
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="password"
                                name="confirmPassword"
                                value={confirmPassword}
                                onChange={handleChange}
                                placeholder="Confirm Password"
                                className="w-full px-3 py-2 border-2 bg-customGreenLight placeholder:text-customGreenDark font-bold border-customGreenDark rounded-lg focus:outline-none focus:border-customGreenDark"
                            />
                        </div>
                        <div className="flex justify-end items-end">
                            <a
                                href="#"
                                className="text-customGreenLight flex items-center gap-2 text-base"
                            >
                                <img
                                    src={arrow}
                                    alt="arrow"
                                    className="w-16 h-4"
                                />
                                Proceed to Sign in
                            </a>
                        </div>
                    </form>
                </div>
                <UserFooter />
            </div>
        </div>
    );
};

export default UserResetPassword ;

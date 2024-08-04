import React, { useState } from 'react';
import TopBar from '../../Navbar/TopBar';
import UserHomeBar from '../UserHomeBar';
import UserFooter from '../UserFooter';

const SignSelection = () => {
    const [activeButton, setActiveButton] = useState('driver');

    return (
        <div>
            <TopBar />
            <UserHomeBar />
            <div className="flex flex-col min-h-screen bg-customGreenLight bg-custom-bg bg-cover bg-center font-roboto">
                <div className="flex justify-center items-center flex-grow">
                    <div className="bg-customGreenDark pt-20 rounded-3xl p-8 w-96 h-80 shadow-lg">
                        <h2 className="text-white text-2xl  mb-6 ">
                            Sign up as
                        </h2>
                        <div className="flex justify-between text-2xl text-customGreenDark font-bold mb-4 pt-2 gap-6">
                            <button
                                className={`w-40 py-2 h-14 rounded-lg ${
                                    activeButton === 'driver'
                                        ? 'bg-customYellow'
                                        : 'bg-customGreenLight'
                                }`}
                                onClick={() => setActiveButton('driver')}
                            >
                                Driver
                            </button>
                            <button
                                className={`w-40 py-2 rounded-lg ${
                                    activeButton === 'user'
                                        ? 'bg-customYellow'
                                        : 'bg-customGreenLight'
                                }`}
                                onClick={() => setActiveButton('user')}
                            >
                                User
                            </button>
                        </div>
                        <div className="">
                            <a
                                href="#"
                                className="text-white text-xs underline"
                            >
                                Already have an account? Sign in
                            </a>
                        </div>
                    </div>
                </div>
                <UserFooter />
            </div>
        </div>
    );
};

export default SignSelection;

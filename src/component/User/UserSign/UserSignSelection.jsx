import React, { useState } from 'react';
import TopBar from '../../Navbar/TopBar';
import UserHomeBar from '../UserHomeBar';
import UserFooter from '../UserFooter';
import { Link } from 'react-router-dom';

const UserSignSelection = () => {
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
                        <div className="flex items-center justify-between text-2xl text-customGreenDark font-bold mb-4 pt-2 gap-6">
                            <Link to="/driversignup">
                            <button
                                className={`w-40 py-2 h-14 rounded-lg ${
                                    activeButton === 'driver'
                                        ? 'bg-customGreenLight'
                                        : 'bg-customYellow'
                                }`}
                                onClick={() => setActiveButton('driver')}
                            >
                                Driver
                            </button>
                            </Link>
                            <Link to="/usersignup" >
                            <button
                                className={`w-40 py-2 h-14 rounded-lg ${
                                    activeButton === 'user'
                                        ? 'bg-customGreenLight'
                                        : 'bg-customYellow'
                                }`}
                                onClick={() => setActiveButton('user')}
                            >
                                User
                            </button>
                            </Link>
                        </div>
                        <Link to="/userlogin" className="">
                            <a
                                href="#"
                                className="text-white text-xs underline"
                            >
                                Already have an account? Sign in
                            </a>
                        </Link>
                    </div>
                </div>
                <UserFooter />
            </div>
        </div>
    );
};

export default UserSignSelection;

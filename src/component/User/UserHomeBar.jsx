import React from 'react';

const UserHomeBar = () => {
    return (
        <div className="bg-customGreenMedium text-lg font-roboto ">
            <nav className="flex p-4 justify-around items-center font-bold">
                <a
                    href="#HomeScreen"
                    className="text-customGreenLight hover:text-white"
                >
                    Home
                </a>
                <a
                    href="#AboutScreen"
                    className="text-customGreenLight hover:text-white"
                >
                    About Us
                </a>
                <a
                    href="#BenefitsreenPage"
                    className="text-customGreenLight hover:text-white"
                >
                    Services
                </a>
                <a
                    href="#ContactUs"
                    className="text-customGreenLight hover:text-white"
                >
                    Contact Us
                </a>
                <a
                    href="#SignIn"
                    className="text-customGreenLight hover:text-white"
                >
                    Login
                </a>
                <a
                    href="#SignUp"
                    
                >
                   
                    <button className="bg-customGreenLight text-customGreenMedium px-4 py-2 rounded-lg mt-1">
                        Sign up
                    </button>
                </a>
            </nav>
        </div>
    );
};

export default UserHomeBar;

import React from 'react';
// import { useHistory } from 'react-router-dom'; // Assuming you are using react-router for navigation
import profilecreate from '../../../assets/profilecreate.png'; // Ensure this path is correct
import TopBar from '../../Navbar/TopBar';
import UserHomeBar from '../UserHomeBar';

const ProfileCreate = () => {
    // const history = useHistory();

    // const handleProceed = () => {
    //     history.push('/dashboard'); // Adjust the path as needed
    // };

    return (
        <>
         <TopBar />
         <UserHomeBar />
        <div className="min-h-screen flex flex-col justify-center items-center bg-customGreenDark">
                
            <div className="bg-customGreenLight p-8 rounded-lg shadow-lg text-center max-w-md w-full">
                <h2 className="text-xm  text-black mb-4">Profile Created</h2>
                <img src={profilecreate} alt="Profile Created" className="w-32 h-32 mx-auto mb-4" />
                <p className="text-black text-base mb-2">
                    <p>Application Status: <span className="text-black font-bold">Pending</span></p>
                </p>
                <p className="text-customGreenDark text-sm mb-4">
                    Your application is being reviewed. Check your mail in 5 to 10 working days to confirm approval.
                </p>
                <button
                    // onClick={handleProceed}
                    className="bg-customGreenDark text-white font-bold py-2 px-4 rounded-lg hover:bg-customGreenDarker"
                >
                    Proceed to Dashboard
                </button>
            </div>
        </div>
        </>
    );
};

export default ProfileCreate;

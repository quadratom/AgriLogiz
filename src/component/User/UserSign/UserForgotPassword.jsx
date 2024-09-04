import React from 'react';
import forgotpassword from '../../../assets/Forgotpassword.png'
import TopBar from '../../Navbar/TopBar';
import UserHomeBar from '../UserHomeBar';
import UserFooter from '../UserFooter';

const UserForgotPassword = () => {
    return (
        < >
            <TopBar />
            <UserHomeBar />
            <div className="flex flex-col min-h-screen font-roboto bg-customGreenLight  justify-center items-center">
                <div className='items-center justify-center text-center'>
                    <div className='text-customGreenDark text-4xl font-bold mt-4'>Forgot Password?</div>
                    <img src={forgotpassword} alt="password" className='h-80 w-45' />
                    <div className='text-customGreenDark text-lg'>
                        <h1>A Reset Link has being sent to you mail</h1>
                        <h1>Please Click on the Link to reset password</h1>
                    </div>
                    <div className="text-end pt-8 ">
                            <a href="#" className="text-customGreenDark text-xs underline">
                            Didn’t receive the mail?
                                <span className="text-customred underline"> Resend Link</span>
                            </a>
                        </div>
                </div>
               
            </div>
            <UserFooter />
        </>
    );
};

export default UserForgotPassword;

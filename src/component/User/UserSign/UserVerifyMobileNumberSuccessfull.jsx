import React, { useState, useEffect } from 'react';
import TopBar from '../../Navbar/TopBar';
import UserHomeBar from '../UserHomeBar';
import UserFooter from '../UserFooter';
import verifyImage from '../../../assets/verify-image.png'; // Replace with the correct path to your image
import verifynumbersuccessfull from '../../../assets/verifynumbersuccessful.png';

const UserVerifyMobileNumberSuccesfull = () => {
    const [otp, setOtp] = useState(new Array(6).fill(''));
    const [time, setTime] = useState(300);
    const [isVerified, setIsVerified] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            if (time > 0) {
                setTime(time - 1);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [time]);

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    const handleResend = () => {
        setOtp([...otp.map(v => '')]);
        setTime(300); // Reset the timer to 5 minutes
    };

    const handleSubmit = e => {
        e.preventDefault();
        setIsVerified(true);
    };

    return (
        <>
            <TopBar />
            <UserHomeBar />
            <div className="min-h-screen flex flex-col font-roboto bg-customGreenLight relative">
                <div className="flex flex-col flex-grow justify-center items-center">
                    {!isVerified ? (
                        <div className="p-6 w-96 text-center">
                            <img
                                src={verifyImage}
                                alt="Verify"
                                className="w-60 h-60 mx-auto mb-4"
                            />
                            <h2 className="text-2xl font-bold text-black mb-2">
                                Verify Your Mobile Number
                            </h2>
                            <div className="text-black font-bold mb-4">
                                <p>A 6 digit code has been sent to</p>
                                <p>
                                    +234 903 4454 567{' '}
                                    <a
                                        href="#"
                                        className="text-customGreenDark underline"
                                    >
                                        Change
                                    </a>
                                </p>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="flex justify-center mb-4">
                                    {otp.map((data, index) => (
                                        <input
                                            className="w-10 h-12 mx-1 font-bold text-center border bg-customGreenSemiLight border-customGreenDark focus:outline-none focus:border-customGreenDark"
                                            type="text"
                                            name="otp"
                                            maxLength="1"
                                            key={index}
                                            value={data}
                                            onChange={e =>
                                                handleChange(e.target, index)
                                            }
                                            onFocus={e => e.target.select()}
                                        />
                                    ))}
                                </div>
                                <p className="text-black text-base mb-4">
                                    The OTP will expire in{' '}
                                    {`${Math.floor(time / 60)}:${(time % 60)
                                        .toString()
                                        .padStart(2, '0')}`}
                                    <br />
                                    Didn't receive the code?{' '}
                                    <span
                                        onClick={handleResend}
                                        className="text-customGreenDark underline cursor-pointer"
                                    >
                                        Resend
                                    </span>
                                </p>
                                <button
                                    type="submit"
                                    className="bg-customGreenDark text-white text-xl font-bold w-full py-2 px-4 rounded-lg hover:bg-customYellow"
                                >
                                    Verify
                                </button>
                            </form>
                        </div>
                    ) : (
                        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-customGreenDark bg-opacity-75">
                            <div className="bg-customGreenLight p-6 rounded-xl text-center shadow-lg">
                                <img
                                    src={verifynumbersuccessfull} // Replace with the correct path to your verification image if different
                                    alt="verifynumbersuccessfull"
                                    className="w-24 h-24 mx-auto mb-4"
                                />
                                <h2 className="text-2xl font-bold text-black mb-2">
                                    Verified!
                                </h2>
                                <p className="flex flex-col text-black font-bold mb-4">
                                    <p>You have successfully verified</p>
                                    <p> your phone number</p>
                                </p>
                                <button className="bg-customGreenDark text-white text-xl font-bold w-full py-2 px-4 rounded-lg hover:bg-customYellow active:hover:bg-customGreenDark">
                                    Proceed to Create Profile
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <UserFooter />
        </>
    );
};

export default UserVerifyMobileNumberSuccesfull;

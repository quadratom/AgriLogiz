import React, { useState } from 'react';
import TopBar from '../Navbar/TopBar';
import BlogNavBar from '../Blogs/BlogNavBar';

const SignUp = () => {
    const [identifier, setIdentifier] = useState(''); // Can be email or phone number
    const [password, setPassword] = useState('');
    const [agreeTerms, setAgreeTerms] = useState(false);

    const handleSubmit = async e => {
        e.preventDefault();
        if (!agreeTerms) {
            alert('You must agree to the terms and conditions');
            return;
        }
        try {
            const response = await axios.post('', {
                identifier,
                password
            });
            localStorage.setItem('token', response.data.token);
        } catch (error) {
            console.error('Sign In Error:', error);
        }
    };

    return (
        <div  className="  ">
            <TopBar />
            <BlogNavBar />
            {/* min-h-screen flex flex-col items-center justify-center bg-gray-100 */}
            <div className="px-40  py-12 bg-customGreenDark mx-80 my-10 shadow-md rounded-2xl  ">
                <form
                    className="flex flex-col text-center items-center    "
                    onSubmit={handleSubmit}
                >
                    <input
                        className=" flex h-12 w-80 px-3 py-2 my-4 border placeholder-customGreenDark rounded text-gray-700 font-bold focus:outline-none focus:shadow-outline"
                        type="text"
                        value={identifier}
                        onChange={e => setIdentifier(e.target.value)}
                        placeholder="Phone Number/Email Address"
                        required
                    />
                    <input
                        className=" flex h-12 w-80 px-3 py-2 mt-2 border placeholder-customGreenDark rounded text-gray-700 font-bold focus:outline-none focus:shadow-outline"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                    />
                    {/* <a
                        href="/forgot-password"
                        className="text-white text-base ps-40 py-2 items-center justify-end"
                    >
                        Forgot Password?
                    </a> */}
                    <div className="flex items-center py-8  justify-between w-full">
                        <span className="">
                            <a
                                href="/terms"
                                className="text-white text-base font-bold"
                            >
                                Terms and Conditions
                            </a>
                        </span>
                        <input
                            className="h-6 w-6 border-2 border-white  bg-customGreenDark text-customGreenDark rounded focus:ring-0 focus:ring-offset-0"
                            type="checkbox"
                            checked={agreeTerms}
                            onChange={e => setAgreeTerms(e.target.checked)}
                        />
                    </div>
                    <div className="flex justify-end items-center ">
                        <button
                            type="submit"
                            className="bg-customYellow text-white font-bold px-4 py-2  rounded-lg my-10"
                        >
                           Sign up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;

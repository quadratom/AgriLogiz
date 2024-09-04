import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../../src/assets/image.png';
import userdashboard from '../../../src/assets/userdashboard.png';
import order from '../../../src/assets/order.png';
import message from '../../../src/assets/message.png';
import help from '../../../src/assets/help.png';
import logout2 from '../../../src/assets/logout2.png';



const UserSideBar = () => {
    return (
       
            <div className=" md:w-64  mt-10 ml-4 pb-8 rounded-lg bg-customGreenLight  font-roboto hidden md:flex  flex-col">
                <div className="flex items-center justify-center mr-10 mt-5">
                    <div className="bg-customGreenMedium m-4 h-16 w-40  rounded-lg flex items-center justify-center gap-2">
                        <div className="bg-white  flex items-center justify-center rounded-full h-10 w-10">
                            <img
                                className="h-5 w-5 flex items-center justify-center "
                                src={image}
                                alt="image"
                            />
                        </div>
                        <div className="px-1">
                            <h1 className="text-sm font-bold">XXXX</h1>
                            <p className="text-xs">View Profile</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start pl-12 space-y-6">
                    <Link
                        to=""
                        className="flex items-center gap-2"
                    >
                        <img
                            className="h-6 w-6"
                            src={userdashboard}
                            alt="userdashboard"
                        />
                        <div className="text-lg hover:font-bold">Dashboard</div>
                    </Link>
                    <Link
                        to=""
                        className="flex items-center gap-2"
                    >
                        <img
                            className="h-6 w-6"
                            src={order}
                            alt="order"
                        />
                        <div className="text-lg hover:font-bold">My Orders</div>
                    </Link>

                    <Link
                        to=""
                        className="flex items-center gap-2"
                    >
                        <img className="h-6 w-6" src={message} alt="message" />
                        <div className="text-lg hover:font-bold">Notification</div>
                    </Link>
                    <Link
                        to=""
                        className="flex items-center gap-2"
                    >
                        <img className="h-6 w-6" src={help} alt="payment" />
                        <div className="text-lg hover:font-bold">Help</div>
                    </Link>
                    <a href="#" className="flex items-center gap-2">
                        <img
                            className="h-6 w-6"
                            src={logout2}
                            alt="logout2"
                        />
                        <div className="text-lg hover:font-bold">Logout</div>
                    </a>
                  
                </div>
            </div>
       
    );
};

export default UserSideBar;

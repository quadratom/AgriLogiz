import React from 'react';

import { Link } from 'react-router-dom';
import image from '../../../src/assets/image.png';
import dashboardtwo from '../../../src/assets/dashboardtwo.png';
import customer from '../../../src/assets/customer.png';
import driver from '../../../src/assets/dashboarddriver.png';
import payment from '../../../src/assets/payment.png';
import inventory from '../../../src/assets/inventory.png';
import report from '../../../src/assets/report.png';
import settings from '../../../src/assets/settings.png';


const AdminDashboardSidebar = () => {
    return (
        <div className=" md:w-64  h-1/2  mt-10 ml-4 rounded-lg bg-customGreenLight  font-roboto hidden md:flex  flex-col">
            <div className="flex items-center justify-center mr-10 mt-5">
                <div className="bg-customGreenMedium m-4 h-16 w-40  rounded-lg flex items-center justify-center gap-2">
                    <div className="bg-white  flex items-center justify-center rounded-full h-10 w-10">
                        <img
                            className="h-5 w-5 flex items-center justify-center "
                            src={image}
                            alt="image"
                        />
                    </div>
                    <div className="px-2">
                        <h1 className="text-sm font-bold">Name</h1>
                        <p className="text-xs">View Profile</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-start pl-12 space-y-2">
            
                <Link to="/admindashboard" className="flex items-center gap-2">
                    <img
                        className="h-4 w-4"
                        src={dashboardtwo}
                        alt="dashboardtwo"
                    />
                    <div className="text-lg hover:font-bold">Dashboard</div>
                </Link>
                <Link to="/admindashboardcustomer" className="flex items-center gap-2">
                    <img
                        className="h-4 w-4"
                        src={customer}
                        alt="dashboardtwo"
                    />
                    <div className="text-lg hover:font-bold">Customers</div>
                </Link>
            
                <Link to="/admindashboarddriver" className="flex items-center gap-2">
                    <img
                        className="h-6 w-6"
                        src={driver}
                        alt="driver"
                    />
                    <div className="text-lg hover:font-bold">Drivers</div>
                </Link>
                <Link to="/admindashboardpayment" className="flex items-center gap-2">
                    <img
                        className="h-6 w-6"
                        src={payment}
                        alt="payment"
                    />
                    <div className="text-lg hover:font-bold">Payment</div>
                </Link>
                <a href="#" className="flex items-center gap-2">
                    <img
                        className="h-6 w-6"
                        src={inventory}
                        alt="inventory"
                    />
                    <div className="text-lg hover:font-bold">Inventory</div>
                </a>
                <a href="#" className="flex items-center gap-2">
                    <img
                        className="h-6 w-6"
                        src={report}
                        alt="report"
                    />
                    <div className="text-lg hover:font-bold">Report</div>
                </a>
                <a href="#" className="flex items-center gap-2 pb-4">
                    <img
                        className="h-6 w-6"
                        src={settings}
                        alt="settings"
                    />
                    <div className="text-lg hover:font-bold">
                        Settings
                    </div>
                </a>
            </div>
        </div>
    );
};

export default AdminDashboardSidebar;

import React from 'react';
import AdminDashboardHeader from '../AddminDashboard/AdminDashboardHeader';
import AdminDashboardSearch from '../AddminDashboard/AdminDashboardSearch';

import UserSideBar from './UserSideBar';
import Map from './Map';
import OrderSection from './OrderSection';
import UserDashboardFooter from './UserDasboardFooter';

const UserDashboard = () => {
    return (
        <div className='flex flex-col'>
            <div className="flex flex-col  gap-10">
                <AdminDashboardHeader />
                <AdminDashboardSearch />
            </div>

            <div className='flex   '>
                <UserSideBar />
                <Map />
            </div>
            <div className='space-y-20'>
                <OrderSection />
                < UserDashboardFooter />
            </div>
        </div>
    );
};

export default UserDashboard;

import React from 'react';
import AdminDashboardHeader from '../AddminDashboard/AdminDashboardHeader';
import AdminDashboardSearch from '../AddminDashboard/AdminDashboardSearch';
import UserDashboardFooter from '../UserDashboard/UserDasboardFooter';
import DriverDashboardSidebar from './DriverDashboardSidebar';
import DriverMap from './DriverMap';
import DriverOrderSection from './DriverOrderSection';


const DriverDashboard = () => {
    return (
        <div className='flex flex-col'>
            <div className="flex flex-col  gap-10">
                <AdminDashboardHeader />
                <AdminDashboardSearch />
            </div>

            <div className='flex   '>
                <DriverDashboardSidebar />
                < DriverMap  />
            </div>
            <div className='space-y-20'>
                <DriverOrderSection />
                < UserDashboardFooter />
            </div>
        </div>
    );
};

export default DriverDashboard;

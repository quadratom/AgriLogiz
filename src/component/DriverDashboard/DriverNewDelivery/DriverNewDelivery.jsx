import React from 'react';
import AdminDashboardHeader from '../../AddminDashboard/AdminDashboardHeader';
import AdminDashboardSearch from '../../AddminDashboard/AdminDashboardSearch';
import DriverNewDeliveryPage from './DriverNewDeliveryPage';



const DriverNewDelivery = () => {
    return (
        <div className="flex flex-col gap-20">
            <div className="flex flex-col  gap-10">
                <AdminDashboardHeader />
                <AdminDashboardSearch />
            </div>
            <div>
                <DriverNewDeliveryPage  />
            </div>
        </div>
    );
};

export default DriverNewDelivery;

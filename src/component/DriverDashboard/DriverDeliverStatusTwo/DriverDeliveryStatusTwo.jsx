import React from 'react';
import AdminDashboardHeader from '../../AddminDashboard/AdminDashboardHeader';
import AdminDashboardSearch from '../../AddminDashboard/AdminDashboardSearch';
import DriverDeliveryStatusTwoPage from './DriverDeliveryStatusTwoPage';


const DriverDeliveryStatusTwo = () => {
    return (
        <div className="flex flex-col gap-20">
            <div className="flex flex-col  gap-10">
                <AdminDashboardHeader />
                <AdminDashboardSearch />
            </div>
            <div>
                <DriverDeliveryStatusTwoPage />
            </div>
        </div>
    );
};

export default DriverDeliveryStatusTwo;

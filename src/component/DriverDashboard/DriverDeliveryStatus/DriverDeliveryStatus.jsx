import React from 'react';
import AdminDashboardHeader from '../../AddminDashboard/AdminDashboardHeader';
import AdminDashboardSearch from '../../AddminDashboard/AdminDashboardSearch';
import DriverDeliveryStatusPage from './DriverDeliveryStatusPage';

const DriverDeliveryStatus = () => {
    return (
        <div className="flex flex-col gap-20">
            <div className="flex flex-col  gap-10">
                <AdminDashboardHeader />
                <AdminDashboardSearch />
            </div>
            <div>
                <DriverDeliveryStatusPage />
            </div>
        </div>
    );
};

export default DriverDeliveryStatus;

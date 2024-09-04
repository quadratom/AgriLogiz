import React from 'react';
import AdminDashboardHeader from '../../AddminDashboard/AdminDashboardHeader';
import AdminDashboardSearch from '../../AddminDashboard/AdminDashboardSearch';
import UserDashboardFooter from '../../UserDashboard/UserDasboardFooter';
import DriverDeliveryLocationPage from './DriverDeliveryLocationPage';





const DriverDeliveryLocation = () => {
    return (
        <div className='flex flex-col gap-20'>
            <div className="flex flex-col  gap-10">
                <AdminDashboardHeader />
                <AdminDashboardSearch />
            </div>
            <div>
                < DriverDeliveryLocationPage />
            </div>

            <div >
              
                < UserDashboardFooter />
            </div>
        </div>
    );
};

export default DriverDeliveryLocation;

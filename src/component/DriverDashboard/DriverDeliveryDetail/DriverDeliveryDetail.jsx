import React from 'react';
import AdminDashboardHeader from '../../AddminDashboard/AdminDashboardHeader';
import AdminDashboardSearch from '../../AddminDashboard/AdminDashboardSearch';
import UserDashboardFooter from '../../UserDashboard/UserDasboardFooter';
import DriverDeliverDetailPage from './DriverDeliverDetailPage';





const DriverDeliveryDetail = () => {
    return (
        <div className='flex flex-col gap-20'>
            <div className="flex flex-col  gap-10">
                <AdminDashboardHeader />
                <AdminDashboardSearch />
            </div>
            <div>
                < DriverDeliverDetailPage />
            </div>

            <div >
              
                < UserDashboardFooter />
            </div>
        </div>
    );
};

export default DriverDeliveryDetail;

import React from 'react';
import AdminDashboardHeader from '../../AddminDashboard/AdminDashboardHeader';
import AdminDashboardSearch from '../../AddminDashboard/AdminDashboardSearch';
import UserDashboardFooter from '../UserDasboardFooter';
import DeliveryOptionsPage from './DeliveryOptionPage';


const DeliverOption = () => {
    return (
        <div className='flex flex-col gap-20'>
            <div className="flex flex-col  gap-10">
                <AdminDashboardHeader />
                <AdminDashboardSearch />
            </div>
            <div>
                < DeliveryOptionsPage />
            </div>

            <div >
              
                < UserDashboardFooter />
            </div>
        </div>
    );
};

export default DeliverOption;

import React from 'react';
import AdminDashboardHeader from '../../AddminDashboard/AdminDashboardHeader';
import AdminDashboardSearch from '../../AddminDashboard/AdminDashboardSearch';
import UserDashboardFooter from '../UserDasboardFooter';
import DeliveryOptionsPageThree from './DeliveryOptionPageThree';



const DeliveryPageThree = () => {
    return (
        <div className='flex flex-col gap-20'>
            <div className="flex flex-col  gap-10">
                <AdminDashboardHeader />
                <AdminDashboardSearch />
            </div>
            <div>
                < DeliveryOptionsPageThree />
            </div>

            <div >
              
                < UserDashboardFooter />
            </div>
        </div>
    );
};

export default DeliveryPageThree;

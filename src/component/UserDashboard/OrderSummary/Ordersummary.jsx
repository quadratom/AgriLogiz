import React from 'react';
import AdminDashboardHeader from '../../AddminDashboard/AdminDashboardHeader';
import AdminDashboardSearch from '../../AddminDashboard/AdminDashboardSearch';
import OrderSummaryPage from './OrderSummaryPage';
import UserDashboardFooter from '../UserDasboardFooter';






const OrderSummary = () => {
    return (
        <div className='flex flex-col gap-20'>
            <div className="flex flex-col  gap-10">
                <AdminDashboardHeader />
                <AdminDashboardSearch />
            </div>
            <div>
                < OrderSummaryPage />
            </div>

            <div >
              
                < UserDashboardFooter />
            </div>
        </div>
    );
};

export default OrderSummary;

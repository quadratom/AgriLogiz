import React from 'react';
import AdminDashboardSidebar from '../AdminDashboardSidebar';
import AdminDashboardSearch from '../AdminDashboardSearch';
import AdminDashboardHeader from '../AdminDashboardHeader';
import PaymentTransactionHistory from './PaymentTransactionHistory';
import TotalAmount from './TotalAmount'
import PaymentChart from './PaymentChart'



const AdminDashboardPayments = () => {
    return (
        <div className="font-roboto ">
            <div className="flex flex-col gap-10">
                <AdminDashboardHeader />
                <AdminDashboardSearch />
            </div>
            <div className="flex ">
                <AdminDashboardSidebar />
                <div className="flex flex-col   ">
                  <PaymentTransactionHistory />
                  <TotalAmount />
                  <PaymentChart />
                  
                  

                </div>
            </div>
        </div>
    );
};

export default AdminDashboardPayments;

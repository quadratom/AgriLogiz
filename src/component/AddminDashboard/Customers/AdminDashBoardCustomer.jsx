import React from 'react';
import AdminDashboardSidebar from '../AdminDashboardSidebar';
import AdminDashboardSearch from '../AdminDashboardSearch';
import AdminDashboardHeader from '../AdminDashboardHeader';
import CustomerLists from './CustomerLists';
import CustomerDetail from './CustomerDetail';
import CustomerGroups from './CustomerGroups';
import CustomerChart from './CustomerChart';

const AdminDashboardCustomer = () => {
    return (
        <div className="font-roboto">
            <div className="flex flex-col gap-10">
                <AdminDashboardHeader />
                <AdminDashboardSearch />
            </div>
            <div className="flex ">
                <AdminDashboardSidebar />
                <div className="flex flex-col  ">
                    <CustomerLists />
                    <div className='flex  gap-4 p-10 pl-20'>
                        <CustomerDetail />
                        <CustomerGroups />
                    </div>
                    <CustomerChart />
                </div>
            </div>
        </div>
    );
};

export default AdminDashboardCustomer;

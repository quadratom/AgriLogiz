import React from 'react';
import AdminDashboardSidebar from '../AdminDashboardSidebar'
import AdminDashboardSearch from '../AdminDashboardSearch';
import AdminDashboardHeader from '../AdminDashboardHeader';
import AdminDashboardStat from '../AdminDashboardStat';
import AdmindashboardSalesDetails from '../AdminDasshboardSalesDetails';

const AdminDashboard = () => {
    return (
        <div className="font-roboto">
            <div className="flex flex-col gap-10">
                <AdminDashboardHeader />
                <AdminDashboardSearch />
            </div>
            <div className="flex ">
                <AdminDashboardSidebar />
                <div className="flex flex-col">
                    <AdminDashboardStat />
                    {/* chart */}
                    <AdmindashboardSalesDetails />
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;

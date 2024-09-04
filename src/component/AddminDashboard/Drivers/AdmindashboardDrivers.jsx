import React from 'react';
import AdminDashboardSidebar from '../AdminDashboardSidebar';
import AdminDashboardSearch from '../AdminDashboardSearch';
import AdminDashboardHeader from '../AdminDashboardHeader';


import DriverLists from './DriverLists';
import DriverDetails from './DriverDetails';
import DriverTasks from './DriverTasks';

const AdminDashboardDriver = () => {
    return (
        <div className="font-roboto">
            <div className="flex flex-col gap-10">
                <AdminDashboardHeader />
                <AdminDashboardSearch />
            </div>
            <div className="flex ">
                <AdminDashboardSidebar />
                <div className="flex flex-col  ">
                   <DriverLists  />
                    <DriverDetails />
                   <DriverTasks />
                    {/* <CustomerChart /> */}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboardDriver;

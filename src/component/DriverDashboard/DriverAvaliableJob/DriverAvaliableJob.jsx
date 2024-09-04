import React from 'react';
import AdminDashboardHeader from '../../AddminDashboard/AdminDashboardHeader';
import AdminDashboardSearch from '../../AddminDashboard/AdminDashboardSearch';
import DriverDashboardSidebar from '../DriverDashboardSidebar';
import UserDashboardFooter from '../../UserDashboard/UserDasboardFooter';
import DriverOrderSection from './DriverOrderSection';
import DriverAvaliableJobPage from './DriverAvaliableJobPage';

const DriverAvaliableJob = () => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col  gap-10">
                <AdminDashboardHeader />
                <AdminDashboardSearch />
            </div>

            <div className="flex">
                <div>
                    <DriverDashboardSidebar />
                    <DriverOrderSection />
                </div>
                <div className=''>

                <DriverAvaliableJobPage />
                </div>
            </div>
            <div className="space-y-20">
                <UserDashboardFooter />
            </div>
        </div>
    );
};

export default DriverAvaliableJob;

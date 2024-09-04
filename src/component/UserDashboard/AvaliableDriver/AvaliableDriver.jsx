import React from 'react';
import AdminDashboardHeader from '../../AddminDashboard/AdminDashboardHeader';
import AdminDashboardSearch from '../../AddminDashboard/AdminDashboardSearch';
import AvaliableDriverPage from './AvaliableDriverPage';
import UserDashboardFooter from '../UserDasboardFooter';




const AvaliableDriver = () => {
    return (
        <div className='flex flex-col gap-20'>
            <div className="flex flex-col  gap-10">
                <AdminDashboardHeader />
                <AdminDashboardSearch />
            </div>
            <div>
                < AvaliableDriverPage />
            </div>

            <div >
              
                < UserDashboardFooter />
            </div>
        </div>
    );
};

export default AvaliableDriver;

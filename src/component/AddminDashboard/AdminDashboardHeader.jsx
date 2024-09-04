import React from 'react';
import agridashboard from '../../../src/assets/agridashboard.png'

const AdminDashboardHeader = () => {
    return (
        <div className="bg-customGreenLight flex items-center justify-between ">
            <div className="text-customGreenDark">
                <img className='h-12 w-12' src={agridashboard } alt="agridashboard " />
            </div>
        </div>
    );
};

export default AdminDashboardHeader;

import React from 'react';
import customer from '../../../src/assets/customer.png';
import dashboarddriver from '../../../src/assets/dashboarddriver.png';
import union from '../../../src/assets/union.png';

const stats = [
    { title: 'Total Users', value: '3300', change: '1%', icon: customer },
    {
        title: 'Total Drivers',
        value: '300',
        change: '1%',
        icon: dashboarddriver
    },
    { title: 'Total Orders', value: '2980', change: '1%', icon: customer },
    { title: 'Pending Orders', value: '28', change: '1%', icon: customer }
];

const AdminDashboardStat = () => {
    return (
        <div className="flex gap-4 p-10 pl-16">
            {stats.map((stat, index) => (
                <div
                    key={index}
                    className="bg-customGreenLight p-4 rounded-lg shadow-md flex  overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                >
                    <div className="flex flex-col items-start justify-between">
                        <div className="mb-3">
                            {stat.title}
                        </div>
                        <div className="text-2xl font-bold">
                            {stat.value}
                        </div>
                        <div className="text-xs flex flex-row items-center justify-center gap-1 mt-3">
                            <img
                                className="h-2 w-2 mr-1"
                                src={union}
                                alt="union"
                            />
                            <div className="flex  items-center justify-center">
                                <div>{stat.change}</div>
                                <div style={{ fontSize: '10px' }}>
                                    {' '}
                                    Up from Yesterday
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-customGreenSemiLight h-12 w-12  rounded-full  ml-4">
                        <img src={stat.icon} alt="icon" className="h-12 w-12" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AdminDashboardStat;

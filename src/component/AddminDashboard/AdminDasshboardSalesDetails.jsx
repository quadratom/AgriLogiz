import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: '5k', uv: 20,  amt: 24 },
    { name: '10k', uv: 30,  amt: 22},
    { name: '15k', uv: 20, amt: 22 },
    { name: '20k', uv: 200,  amt: 20 },
    { name: '25k', uv: 100, amt: 21 },
    { name: '30k', uv: 200,  amt: 25 },
    { name: '35k', uv: 34,  amt: 21 },
];

const AdmindashboardSalesDetails = () => {
    return (
        <div>
        {' '}
        {/* Customer's Chart Section */}
        <div className="ml-4 mr-10 mt-10 flex flex-col">
            <h3  className="pl-10 pb-4 text-lg">
                Sales Details
            </h3>
            <div>
                {/* Placeholder for Customer's Chart Component */}
                <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line
                            type="monotone"
                            dataKey="pv"
                            stroke="#8884d8"
                            activeDot={{ r: 8 }}
                        />
                        <Line
                            type="monotone"
                            dataKey="uv"
                            stroke="#82ca9d"
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    </div>
    );
};

export default AdmindashboardSalesDetails;

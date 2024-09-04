import React from 'react';
const Customerlist = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen font-roboto ">
                <div className="flex flex-col p-8">
                    <div className="grid grid-cols-3 gap-4">
                       
                        
                      

                        

                       
                    </div>
                </div>
            </div>
           
        </>
    );
};

// Dummy SalesChart Component for reference
const SalesChart = () => {
    // This is where you would include the Recharts component from the earlier example.
    // For simplicity, a placeholder div is used here.
    return <div className="h-48 bg-gray-200 rounded-lg">Sales Chart Placeholder</div>;
};

export default Customerlist;

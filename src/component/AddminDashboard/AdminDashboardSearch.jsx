import React from 'react';
import dashboardmenu from '../../../src/assets/dashboardmenu.png';
import search from '../../../src/assets/search.png';

const AdminDashboardSearch = () => {
    return (
        <div className="flex items-center justify-between mx-6 ">
            <a
                className="bg-customGreenLight rounded-full h-14 w-14 flex items-center justify-center"
                href="#"
            >
                <img
                    className="h-8 w-8  flex items-center justify-center"
                    src={dashboardmenu}
                    alt="dashboardmenu "
                />
            </a>

            <div className="w-4/5 relative flex items-center justify-center">
    <div className="relative w-full">
        <img
            className="h-5 w-5 absolute top-1/2 left-2 transform -translate-y-1/2"
            src={search}
            alt="search"
        />
        <input
            type="text"
            placeholder="Search"
            className="w-full p-2 pl-12 bg-customGreenLight border-none rounded-lg"
        />
    </div>
</div>

        </div>
    );
};

export default AdminDashboardSearch;

import React from 'react';
import menu from '../../../src/assets/menu.png';
import dash from '../../../src/assets/dashboard.png';
import blogmanage from '../../../src/assets/blogmanage.png';
import categories from '../../../src/assets/categories.png';
import comment from '../../../src/assets/coment.png';
import analytic from '../../../src/assets/analytics.png';
import user from '../../../src/assets/user.png';
import setting from '../../../src/assets/setting.png';
import logout from '../../../src/assets/logout.png';

const AdminSidebar = () => {
    const menuItems = [
        { src: dash, alt: 'dash', label: 'Dashboard' },
        { src: blogmanage, alt: 'blogmanage', label: 'Blog Management' },
        { src: categories, alt: 'categories', label: 'Categories' },
        { src: comment, alt: 'comment', label: 'Comments' },
        { src: analytic, alt: 'analytic', label: 'Analytics' },
        { src: user, alt: 'user', label: 'Users' },
        { src: setting, alt: 'settings', label: 'Settings' },
        { src: logout, alt: 'logout', label: 'Logout' },
    ];

    return (
        <div className="bg-customgreenBlack absolute text-white h-screen w-16 md:w-64">
            <div>
                <h1 className="text-2xl font-bold py-4 px-4 hidden md:block border-b-2">
                    Agrilogiz Admin
                </h1>
                <img className="h-14 px-4 py-3 cursor-pointer" src={menu} alt="menu" />
            </div>
            <div className="mt-2">
                <ul className="flex flex-col text-lg space-y-4 px-1">
                    {menuItems.map((item, index) => (
                        <li
                            key={index}
                            className="flex items-center space-x-4 hover:rounded-md hover:cursor-pointer hover:bg-customGreenSemiLight hover:text-customgreenBlack"
                        >
                            <img className="h-8 px-4 py-2" src={item.src} alt={item.alt} />
                            <span className="hidden md:inline">{item.label}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AdminSidebar;

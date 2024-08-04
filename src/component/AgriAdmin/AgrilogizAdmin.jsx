import React from 'react';
import TopBar from '../Navbar/TopBar';
import BlogNavBar from '../Blogs/BlogNavBar';
import AdminSidebar from './AdminSidebar';
import AgriAdmindDash from './AgriAdmindDash';

const AgrilogizAdmin = () => {
    return (
        <>
        <div >
            <TopBar />
            <BlogNavBar />
            <div className='flex'>
                <AdminSidebar />
            
                <div className='ml-16 md:ml-64'>
                    <AgriAdmindDash  />
                </div>
                </div>
                </div>
        </>
    );
};

export default AgrilogizAdmin;

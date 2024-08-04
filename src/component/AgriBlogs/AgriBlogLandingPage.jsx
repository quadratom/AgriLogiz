import React from 'react';
import TopBar from '../Navbar/TopBar';
import BlogNavBar from '../Blogs/BlogNavBar';
import AgriBlogLandingPageText from './AgriBlogLandingPageText';
import BottomPageScreenGreen from '../Navbar/BottomPageScreenGreen';

const AgriBlogLandingPage = () => {
    return (
        <div>
            <TopBar />
            <BlogNavBar />
            <AgriBlogLandingPageText />

            <BottomPageScreenGreen />
        </div>
    );
};

export default AgriBlogLandingPage;

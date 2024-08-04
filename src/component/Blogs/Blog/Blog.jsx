import React from 'react';
import TopBar from '../../Navbar/TopBar';
import BlogNavBar from '../BlogNavBar';
import BlogText from './BlogText';
import BottomPageScreenGreen from '../../Navbar/BottomPageScreenGreen';

const Blog = () => {
    return (
        <>
            <TopBar />
            <BlogNavBar />
            <BlogText />
            <BottomPageScreenGreen />
        </>
    );
};

export default Blog;

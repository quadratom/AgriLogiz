import React from 'react';
import TopBar from '../../Navbar/TopBar';
import BlogNavBar from '../BlogNavBar';
import BlogOneText from './BlogOneText';
import Blogmage from '../Blogmage';
import BottomPageScreenGreen from '../../Navbar/BottomPageScreenGreen';

const BlogOne = () => {
    return (
        <>
            <TopBar />
            <BlogNavBar />
            <BlogOneText />
            <Blogmage />
            <BottomPageScreenGreen />
        </>
    );
};

export default BlogOne;

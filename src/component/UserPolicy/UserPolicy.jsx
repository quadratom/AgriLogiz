import React from 'react';
import TopBar from '../Navbar/TopBar';
import HomeBar from '../Navbar/HomeBar';
import UserPolicyText from './UserPolicyText';
import BottomPageScreenGreen from '../Navbar/BottomPageScreenGreen';

const UserPolicy = () => {
    return (
        <>
            <TopBar />
            <HomeBar />
            <UserPolicyText />
            <BottomPageScreenGreen />
        </>
    );
};

export default UserPolicy;

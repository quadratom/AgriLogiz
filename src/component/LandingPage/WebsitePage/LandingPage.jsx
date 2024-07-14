import React from 'react';
import TopBar from '../../Navbar/TopBar';
import HomeBar from '../../Navbar/HomeBar';
import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';
import BenefitscreenPage from './BenefitscreenPage';
import Logistics from './Logistics';
import EarnSceanPage from './EarnSceanPage';
import ContactUs from './ContactUs';
import AppScreen from './AppScreen';
import BottomPageScreen from '../../Navbar/BottomPageScreen';

const LandingPage = () => {
    return (
        <>
            <TopBar />
            <HomeBar />
            <HomeScreen />
            <AboutScreen />
            <BenefitscreenPage />
            <Logistics />
            <EarnSceanPage />
            <ContactUs />
            <AppScreen />
            <BottomPageScreen />
            
            
        </>
    );
};

export default LandingPage;

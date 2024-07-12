import React from 'react'
import TopBar from './LandingPage/TopBar'
import HomeBar from './LandingPage/HomeBar'
import HomeScreen from './LandingPage/WebsitePage/HomeScreen'
import AboutScreen from './LandingPage/WebsitePage/AboutScreen'
import BenefitscreenPage from './LandingPage/WebsitePage/BenefitscreenPage'
import Logistics from './LandingPage/WebsitePage/Logistics'
import EarnSceanPage from './LandingPage/WebsitePage/EarnSceanPage'


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
   
    </>
    

  )
}

export default LandingPage
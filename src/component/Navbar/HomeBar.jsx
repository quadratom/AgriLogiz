import React from 'react'
import { Link } from 'react-router-dom'

const HomeBar = () => {
  return (
    <div className="bg-customGreenMedium  ">
      <nav className="flex p-4 justify-around items-center font-bold">
        <a href="#HomeScreen" className="text-customGreenLight hover:text-white">Home</a>
        <a href="#AboutScreen" className="text-customGreenLight hover:text-white">About Us</a>
        <a href="#BenefitsreenPage" className="text-customGreenLight hover:text-white">Services</a>
        <a href="#ContactUs" className="text-customGreenLight hover:text-white">Contact</a>
        <Link to="/usersignselection" className="text-customGreenLight hover:text-white">Login</Link>
        <Link to="/usersignselection" className="text-customGreenLight hover:text-white">Signup</Link>
      </nav>
    </div>
  )
}

export default HomeBar
import React from 'react'

const HomeBar = () => {
  return (
    <div className="bg-customGreenMedium ">
      <nav className="flex p-4 justify-around items-center font-bold">
        <a href="#" className="text-customGreenLight hover:text-white">Home</a>
        <a href="#" className="text-customGreenLight hover:text-white">About Us</a>
        <a href="#" className="text-customGreenLight hover:text-white">Services</a>
        <a href="#" className="text-customGreenLight hover:text-white">Contact</a>
        <a href="#" className="text-customGreenLight hover:text-white">Login</a>
        <a href="#" className="text-customGreenLight hover:text-white">Signup</a>
      </nav>
    </div>
  )
}

export default HomeBar
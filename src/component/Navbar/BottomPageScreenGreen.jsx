import React from 'react'
import Google from '../../assets/googleplaystore.png';
import Apple from '../../assets/applestore.png';
import Agrilogo from '../../assets/Agrilogo.png'

const BottomPageScreenGreen = () => {
  return (
    <footer className="min-h-screen bg-customGreenMedium pt-10 pl-20  pb-10 pr-20 ">
            <div className=" ">
                <div className="mb-10 md:mb-0">
                    <img
                        src={Agrilogo}
                        alt="Agrilogiz Logo"
                        className="h-12 mx-auto md:mx-0"
                    />
                    <a href="#" className="text-black text-2xl font-bold mt-6 block">
                        Visit Help Center
                    </a>
                </div>

                <div className="flex space-x-10 my-16 ">
                    <div className="mb-10 md:mb-0">
                        <h3 className="font-bold text-4xl">Company</h3>
                        <ul>
                            <li className="mt-2">
                                <a href="#" className="text-black text-2xl font-bold">
                                    About Us
                                </a>
                            </li>
                            <li className="mt-2">
                                <a href="#" className="text-black text-2xl font-bold">
                                    Our Services
                                </a>
                            </li>
                            <li className="mt-2">
                                <a href="#" className="text-black text-2xl font-bold">
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="  mb-10 md:mb-0">
                        <h3 className="font-bold text-4xl">Products</h3>
                        <ul>
                            <li className="mt-2">
                                <a href="#" className="text-black text-2xl font-bold">
                                    Ride
                                </a>
                            </li>
                            <li className="mt-2">
                                <a href="#" className="text-black text-2xl font-bold">
                                    Drive
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row  ">

                <div className="flex r mb-10 md:mb-0 space-x-10">
                    <a href="#" className="mx-2">
                        <img
                            src={Google}
                            alt="Get it on Google Play"
                            className="h-12"
                        />
                    </a>
                    <a href="#" className="mx-2">
                        <img
                            src={Apple}
                            alt="Download it on Apple Store"
                            className="h-12"
                        />
                    </a>
                </div>

            </div>
                <div className="flex justify-between my-4 pt-10">
          <p>&copy; 2024 Agrilogiz Company</p>
          <div className=" space-x-4">
            <a href="#" className="text-black font-bold ">Privacy</a>
            <a href="#" className="text-black font-bold">Accessibility</a>
            <a href="#" className="text-black font-bold">Terms</a>
          </div>
        </div>
        </footer>
  )
}

export default BottomPageScreenGreen
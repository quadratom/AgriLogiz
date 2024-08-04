import React from 'react'
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';
import instagram from '../../assets/instagram.png';


const UserFooter = () => {
  return (
    <footer className="bg-white py-4">
    <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-sm flex flex-col">
            <a href="#" className="text-gray-600 mr-4">
                Privacy Policy
            </a>
            <a href="#" className="text-gray-600">
                Terms and Conditions
            </a>
        </div>
        <div className="text-sm text-center">
            <p>Contact us at agrilogiz@gmail.com</p>
            <div className="flex justify-center space-x-4 mt-2">
                <a
                    href="https://facebook.com"
                    className="text-gray-600"
                >
                    <img src={facebook} alt="facebook" />
                </a>
                <a
                    href="https://twitter.com"
                    className="text-gray-600"
                >
                    <img src={twitter} alt="twitter" />
                </a>
                <a
                    href="https://instagram.com"
                    className="text-gray-600"
                >
                    <img src={instagram} alt="instagram" />
                </a>
                <a
                    href="mailto:agrilogiz@gmail.com"
                    className="text-gray-600"
                >
                     <p className='pt-1'>@agrilogiz</p>
                </a>
            </div>
        </div>
    </div>
</footer>
  )
}

export default UserFooter
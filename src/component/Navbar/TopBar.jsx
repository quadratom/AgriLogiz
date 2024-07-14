import React from 'react'
import agri from '../../../src/assets/agri.png'
import location from '../../../src/assets/location.png'
import clock from '../../../src/assets/clock.png'
import support from '../../../src/assets/support.png'
import whatsapp from '../../../src/assets/whatsapp.png'


const TopBar = () => {
  return (
    <div className='bg-customGreenLight h-24 flex items-center justify-between ' >
        <div>
            <img className='h-16' src={agri} alt="agri" />
        </div>

        <div className='flex space-x-8 mt-10 p-4'>
          <div className='flex space-x-4'>
            <div className='text-end text-sm'>
              <div className='font-normal'> WE ARE HERE</div>
              <div className='font-medium'>EDO STATE-NIGERIA</div>
            </div>
            <div>
            <img className='h-8 w-8' src={location} alt='location' /> 
            </div>
          </div>
          <div className='flex space-x-4  '>
            <div className='text-end text-sm'>
              <div className='font-normal'> WE ARE OPEN</div>
              <div className='font-medium'>8 AM-6 PM</div>
            </div>
            <div>
            <img className='h-8 w-8' src={clock} alt='clock' /> 
            </div>
          </div>
          <div className='flex space-x-4 '>
            <div className='text-end text-sm'>
              <div className='font-normal'> CALL US ON</div>
              <div className='font-medium'>+2340 000 000 000</div>
            </div>
            <div>
            <img className='h-8 w-8' src={support} alt='support' /> 
            </div>
          </div>
          <div className='flex space-x-4 '>
            <div className='text-end text-sm'>
              <div className='font-normal'>CHAT WITH US ON</div>
              <div className='font-medium'>+2340 000 000 000</div>
            </div>
            <div>
            <img className='h-8 w-8' src={whatsapp} alt='whatsapp' /> 
            </div>
          </div>
        </div>
    </div>
  )
}

export default TopBar
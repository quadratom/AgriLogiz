import React from 'react'


const HomeScreen = () => {
  return (
    <div 
    className="h-screen bg-cover bg-center flex items-center justify-center" 
    style={{ 
      backgroundImage: ` url('/Rectangle-color.png'), url('/Rectangle.png')`, 
      backgroundSize: 'cover, cover', // Adjust background size for both images
      backgroundPosition: 'center, center' // Adjust background position for both images
    }}
  >
    <div className='flex  items-center justify-center ml-20 gap-10 '>

    <div className="text-start space-y-8">
      <div className="text-8xl text-white  font-bold mb-4">AgriLogiz!</div>
      <div className='text-start'>
      <p className="text-2xl font-bold text-white">Connecting Farmers,</p>
      <p className="text-2xl font-bold text-white">Markets, and Communities</p>
      </div>

      <div className="group flex items-center justify-center bg-customGreenLight h-16 w-48
      hover:bg-customGreenMedium  cursor-pointer  rounded-lg mt-4 m-14">
          <div className="text-2xl text-customGreenDark group-hover:text-customGreenLight font-bold">Learn More</div>
        </div>

    </div>

    <div className='mx-10'>
      <img className=' relative  ' src='/Ellipse.png' alt='Eclipse'  style={{ width: '90%', height: '90%' }}  />
    </div>

    </div>

  </div>
  )
}

export default HomeScreen



// <div>Your Market Day </div>
// <div>Made Easy </div>
// <div>How <h1>AgriLogiz</h1> Helps</div>
import React from 'react';

const Map = () => {
    return (
      
          
        <div className="w-full h-auto mt-8 mb-14 ml-4 mr-6 ">
                {/* Map Section */}
              <div className=' flex justify-end  mb-4 '>
                    <button className="bg-customGreenDark text-white px-4 py-2 rounded-lg">
                        Place an Order
                    </button>
              

              </div>
            
                    {/* Insert Google Map or map image here */}
                    <iframe
                    className=' rounded-2xl shadow-xl '
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509827!2d144.9537353153205!3d-37.81627937975152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f3f1e3fb%3A0x5045675218ce7e0!2sVictoria%20St%2C%20Melbourne%20VIC%203009%2C%20Australia!5e0!3m2!1sen!2sau!4v1613976475810!5m2!1sen!2sau"
                        width="100%"
                        height="100%"
                        frameborder="0"
                        style={{ border: 10 }}
                        allowfullscreen=""
                        aria-hidden="false"
                        tabindex="0"
                        title="Google Maps"
                    ></iframe>
               
            </div>
       
    );
};

export default Map;

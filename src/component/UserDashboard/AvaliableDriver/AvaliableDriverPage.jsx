import React from 'react';

const AvaliableDriverPage = () => {
    return (
        <div className="flex min-h-screen justify-center bg-custom-bg bg-cover bg-center font-roboto">
            <div className="bg-customGreenDark m-12 p-4 rounded-lg w-1/2 shadow-lg">
                <h1 className="text-white text-lg font-bold mb-2">
                    Available Drivers
                </h1>

                <div className=" flex flex-col space-y-4">
                    <div className=" bg-customGreenLight w-full h-30 flex items-center justify-between rounded-lg">
                        <div className="flex  items-center p-2 gap-2">
                            <div className="bg-customGreenDark rounded-full h-20 w-20  "></div>

                            <div className="text-base font-semibold">
                                <div>Emmanuel Alliu</div>
                                <div>Vehicle Name</div>
                                <div>Arrives in ....</div>
                                <div>Rating</div>
                            </div>
                        </div>
                        <div className='p-2 space-y-4'>
                            <button
                                type="button"
                                className="bg-customYellow flex items-center text-customGreenDark py-2 px-4 w-18 h-8 rounded-lg border-2 border-customGreenDark font-semibold"
                            >
                              Express
                            </button>
                            <div className='flex flex-col text-center'>
                                <h5 className='text-[10px] '>Estimated Cost</h5>
                                <button
                                type="button"
                                className="bg-customYellow flex items-center text-customGreenDark py-2 px-4 w-18 h-8 rounded-lg border-2 border-customGreenDark font-semibold"
                            >
                             ₦4,000
                            </button>
                            </div>
                        </div>
                    </div>
                    <div className=" bg-customGreenLight w-full h-30 flex items-center justify-between rounded-lg">
                        <div className="flex  items-center p-2 gap-2">
                            <div className="bg-customGreenDark rounded-full h-20 w-20  "></div>

                            <div className="text-base font-semibold">
                                <div>Emmanuel Alliu</div>
                                <div>Vehicle Name</div>
                                <div>Arrives in ....</div>
                                <div>Rating</div>
                            </div>
                        </div>
                        <div className='p-2 space-y-4'>
                            <button
                                type="button"
                                className="bg-customYellow flex items-center text-customGreenDark py-2 px-4 w-18 h-8 rounded-lg border-2 border-customGreenDark font-semibold"
                            >
                              Express
                            </button>
                            <div className='flex flex-col text-center'>
                                <h5 className='text-[10px] '>Estimated Cost</h5>
                                <button
                                type="button"
                                className="bg-customYellow flex items-center text-customGreenDark py-2 px-4 w-18 h-8 rounded-lg border-2 border-customGreenDark font-semibold"
                            >
                             ₦4,000
                            </button>
                            </div>
                        </div>
                    </div>
                    <div className=" bg-customGreenLight w-full h-30 flex items-center justify-between rounded-lg">
                        <div className="flex  items-center p-2 gap-2">
                            <div className="bg-customGreenDark rounded-full h-20 w-20  "></div>

                            <div className="text-base font-semibold">
                                <div>Emmanuel Alliu</div>
                                <div>Vehicle Name</div>
                                <div>Arrives in ....</div>
                                <div>Rating</div>
                            </div>
                        </div>
                        <div className='p-2 space-y-4'>
                            <button
                                type="button"
                                className="bg-customYellow flex items-center text-customGreenDark py-2 px-4 w-18 h-8 rounded-lg border-2 border-customGreenDark font-semibold"
                            >
                              Express
                            </button>
                            <div className='flex flex-col text-center'>
                                <h5 className='text-[10px] '>Estimated Cost</h5>
                                <button
                                type="button"
                                className="bg-customYellow flex items-center text-customGreenDark py-2 px-4 w-18 h-8 rounded-lg border-2 border-customGreenDark font-semibold"
                            >
                             ₦4,000
                            </button>
                            </div>
                        </div>
                    </div>
                    <div className=" bg-customGreenLight w-full h-30 flex items-center justify-between rounded-lg">
                        <div className="flex  items-center p-2 gap-2">
                            <div className="bg-customGreenDark rounded-full h-20 w-20  "></div>

                            <div className="text-base font-semibold">
                                <div>Emmanuel Alliu</div>
                                <div>Vehicle Name</div>
                                <div>Arrives in ....</div>
                                <div>Rating</div>
                            </div>
                        </div>
                        <div className='p-2 space-y-4'>
                            <button
                                type="button"
                                className="bg-customYellow flex items-center text-customGreenDark py-2 px-4 w-18 h-8 rounded-lg border-2 border-customGreenDark font-semibold"
                            >
                              Express
                            </button>
                            <div className='flex flex-col text-center'>
                                <h5 className='text-[10px] '>Estimated Cost</h5>
                                <button
                                type="button"
                                className="bg-customYellow flex items-center text-customGreenDark py-2 px-4 w-18 h-8 rounded-lg border-2 border-customGreenDark font-semibold"
                            >
                             ₦4,000
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AvaliableDriverPage;


// import React from 'react';

// // DriverCard Component
// const DriverCard = ({ name, vehicleName, arrivalTime, rating, estimatedCost, deliveryType }) => {
//     return (
//         <div className="bg-customGreenLight w-full flex items-center justify-between rounded-lg p-2 gap-2">
//             <div className="flex items-center">
//                 <div className="bg-customGreenDark rounded-full h-20 w-20"></div>
//                 <div className="ml-2 text-base font-semibold">
//                     <div>{name}</div>
//                     <div>{vehicleName}</div>
//                     <div>{arrivalTime}</div>
//                     <div>{rating}</div>
//                 </div>
//             </div>
//             <div className="p-2 space-y-4 text-center">
//                 <button
//                     type="button"
//                     className="bg-customYellow text-customGreenDark py-2 px-4 w-20 h-8 rounded-lg border-2 border-customGreenDark font-semibold"
//                 >
//                     {deliveryType}
//                 </button>
//                 <div className="flex flex-col">
//                     <h5 className="text-[10px]">Estimated Cost</h5>
//                     <button
//                         type="button"
//                         className="bg-customYellow text-customGreenDark py-2 px-4 w-20 h-8 rounded-lg border-2 border-customGreenDark font-semibold"
//                     >
//                         ₦{estimatedCost}
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// // Main Page Component
// const AvaliableDriverPage = () => {
//     const drivers = [
//         {
//             name: "Emmanuel Alliu",
//             vehicleName: "Vehicle Name",
//             arrivalTime: "Arrives in ...",
//             rating: "Rating",
//             estimatedCost: "4,000",
//             deliveryType: "Express",
//         },
//         {
//             name: "Jane Doe",
//             vehicleName: "Vehicle XYZ",
//             arrivalTime: "Arrives in 5 mins",
//             rating: "★★★★☆",
//             estimatedCost: "5,000",
//             deliveryType: "Standard",
//         },
//         // Add more drivers as needed
//     ];

//     return (
//         <div className="flex min-h-screen justify-center bg-custom-bg bg-cover bg-center font-roboto">
//             <div className="bg-customGreenDark m-12 p-4 rounded-lg w-1/2 shadow-lg">
//                 <h1 className="text-white text-lg font-bold mb-2">
//                     Available Drivers
//                 </h1>

//                 <div className="flex flex-col space-y-4">
//                     {drivers.map((driver, index) => (
//                         <DriverCard
//                             key={index}
//                             name={driver.name}
//                             vehicleName={driver.vehicleName}
//                             arrivalTime={driver.arrivalTime}
//                             rating={driver.rating}
//                             estimatedCost={driver.estimatedCost}
//                             deliveryType={driver.deliveryType}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AvaliableDriverPage;


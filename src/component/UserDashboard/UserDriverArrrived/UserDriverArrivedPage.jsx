import React from 'react';
import userarrived from '../../../../src/assets/userarrived.png';

const UserDriverArrivedPage = () => {
    return (
        <div className="flex justify-center bg-custom-bg bg-cover bg-center font-roboto">
            <div className="bg-customGreenDark   rounded-lg w-1/2 shadow-lg ">
                <div className='flex items-center justify-between '>
                    <p className='text-2xl text-customYellow font-bold pl-10'>Your Driver has Arrived</p>
                    <img className='w-80 h-50 hidden md:flex' src={userarrived} alt="userarrived" />
                </div>
            </div>
        </div>
    );
};

export default UserDriverArrivedPage;

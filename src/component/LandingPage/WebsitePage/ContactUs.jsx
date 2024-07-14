import React from 'react';
import telephone from '../../../assets/telephone.png';
import whatsapp2 from '../../../assets/whatsapp2.png';

const ContactUs = () => {
    return (
        <div id='ContactUs' className="min-h-screen bg-customGreenDark">
            <div className="flex items-center justify-around gap-20 ">
                <div className="mt-20">
                    <img
                        src="/contact.png"
                        alt="Contact"
                        className="w-90 h-80"
                    />
                </div>
                <div>
                    <h2 className="text-4xl font-bold text-customYellow mb-4">
                        Contact us
                    </h2>
                    <div className="text-start mb-4">
                        <p className="text-lg text-white font-semibold mb-2">
                            Give us a phone call
                        </p>
                        <div className="flex items-center justify-between bg-customGreenLight w-full p-2 rounded-md font-bold">
                            <div>
                                <p>+2340 000 000 000</p>
                                <p>+2340 000 000 000</p>
                            </div>
                            <img
                                src={telephone}
                                alt="Phone Icon"
                                className="w-6 h-6 ml-2"
                            />
                        </div>
                    </div>
                    <div className="text-start mb-4">
                        <p className="text-lg text-white font-semibold mb-2">
                            via WhatsApp
                        </p>
                        <div className="flex items-center justify-between bg-customGreenLight p-2 rounded-md font-bold">
                            <div>
                                <p>+2340 000 000 000</p>
                                <p>+2340 000 000 000</p>
                            </div>
                            <img
                                src={whatsapp2}
                                alt="WhatsApp Icon"
                                className="w-6 h-6 ml-2"
                            />
                        </div>
                    </div>
                    <div className="flex justify-end items-center">
                        <div className="text-white mr-2">
                            <h1 className="inline text-customYellow">
                                Chat with Agrochic
                            </h1>
                        </div>
                        <button className="bg-customYellow text-white px-4 py-2 rounded-full mt-1">
                            Click Here
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;

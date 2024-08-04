import React from 'react';
import Blogmage from '../Blogmage';

const BlogText = () => {
    return (
        <div className=" bg-customGreenLight ">
            <div className="px-10 py-10">
                {/* first view */}
                <div>
                    <div className="text-2xl font-bold">
                        The Everyday Life of a Nigerian Farmer: A Celebration of
                        Hard Work and Resilience
                    </div>

                    <div className="bg-customGreenSemiLight h-60 rounded-lg flex items-center mt-4 ">
                        <img
                            src="/Handplanting.png"
                            alt="Handplanting.png"
                            className="h-60 w-1/2 rounded-lg"
                        />
                        <div className="px-5 py-5">
                            <div className="text-2xl font-bold">
                                The Everyday Hero: A Salute to Nigerian Farmers
                            </div>
                            <div className="text-xl ">1st May, 2024</div>
                            <div className="text-xl ">
                                Nigeria's heart beats to the rhythm of
                                agriculture. Millions of farmers tirelessly
                                cultivate the land, providing food for the
                                nation.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* image view */}
            <Blogmage />

            {/* View more */}
            <div className="bg-customGreenSemiLight h-24  text-lg underline text-center items-center justify-center ">
               <div> View more stories</div>
            </div>
        </div>
    );
};

export default BlogText;

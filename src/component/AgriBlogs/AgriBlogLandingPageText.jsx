import React, { useEffect, useState } from 'react';
// import { useEffect, useState } from 'react';
import data from '../../assets/blogs.json';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const AgriBlogLandingPageText = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        // Simulate API call
        setBlogs(data.blogs);
    }, []);

    return (
        <div>
            <div className=" bg-customGreenLight ">
                <div className="px-10 py-10">
                    {/* first view */}
                    <div>
                        <div className="text-2xl font-bold">
                            The Everyday Life of a Nigerian Farmer: A
                            Celebration of Hard Work and Resilience
                        </div>

                        <div className="bg-customGreenSemiLight h-60 rounded-lg flex items-center mt-4 ">
                            <img
                                src="/Handplanting.png"
                                alt="Handplanting.png"
                                className="h-60 w-1/2 rounded-lg"
                            />
                            <div className="px-5 py-5">
                                <div className="text-2xl font-bold">
                                    The Everyday Hero: A Salute to Nigerian
                                    Farmers
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
                <div className=' items-center  min-h-screen bg-customGreenDark px-10 py-10 '>
                <ul className='flex  flex-wrap items-center justify-center cursor-pointer ' >
                    {blogs.map(blog => (
                        <li className='w-1/2 md:w-1/2 p-4 ' key={blog.id }>
                            <Link to={`/AgriBlogPosts/${blog.id}`}>

                            <div className=" ">
                                <div className=" ">
                                    <div className="bg-customGreenSemiLight h-40 w-60  rounded-lg  overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                           
                                        <img
                                            src={blog.image}
                                            alt={blog.imagetitle}
                                            className="rounded-lg"
                                        />
                                        <div className="text-xs font-bold text-center mt-2 ">
                                            <div>
                                             {blog.title}
                                          
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            </Link>
                        </li>
                    ))}
                </ul>

                </div>

                {/* View more */}
                <div className="bg-customGreenSemiLight h-24  text-lg underline text-center items-center justify-center ">
                    <div> View more stories</div>
                </div>
            </div>
        </div>
    );
};

export default AgriBlogLandingPageText;

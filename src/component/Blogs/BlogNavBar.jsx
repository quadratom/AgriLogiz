import React from 'react';

const BlogNavBar = () => {
    return (
        <div>
            {/* nav bar */}
            <div className="bg-customGreenMedium ">
                <nav className="flex p-4 items-center justify-between ">
                    <div>
                        <a
                            href="#"
                            className="text-customGreenLight text-lg hover:text-white"
                        >
                            Agrilogiz Blog
                        </a>
                    </div>

                    <div className="space-x-4  gap-4 items-center text-lg font-bold hidden lg:flex">
                        <a
                            href="#"
                            className="text-customGreenLight hover:text-white"
                        >
                            News
                        </a>
                        <a
                            href="#"
                            className="text-customGreenLight hover:text-white"
                        >
                            Search
                        </a>

                        <button className="bg-customGreenLight text-customGreenMedium px-4 py-2 rounded-full mt-1">
                        Sign up
                        </button>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default BlogNavBar;

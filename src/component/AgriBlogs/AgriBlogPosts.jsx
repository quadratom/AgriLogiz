import React from 'react';
import { useEffect, useState } from 'react';
import data from '../../assets/blogs.json';
import { useParams } from 'react-router-dom';

const AgriBlogPosts = () => {
   

    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    
    useEffect(() => {
        //   Simulate API call
        const foundBlog = data.blogs.find(b => b.id === parseInt(id));
        setBlog(foundBlog);
      
    }, [id]);

    if (!blog) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className="bg-customGreenLight">
                <div className="px-10 py-20">
                    <div className="flex flex-col items-center text-center justify-center">
                        <div className="text-4xl font-bold">{blog.title}</div>
                    </div>

                    <div className="flex items-center justify-center py-10">
                        <img
                            src={blog.image}
                            alt={blog.imagetitle}
                            className="items-center justify-center rounded-2xl"
                            style={{ width: '50%', height: '60%' }}
                        />
                    </div>

                    {/* text */}
                    <div className="p-8 text-lg">
                        <div>
                            {blog.summary}
                        </div>

                        <div className=" text-start pt-8">
                            <div>
                          {blog.content}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AgriBlogPosts;

import React, { useEffect, useState } from 'react';
import data from '../../assets/blogs.json';
import { Link, useNavigate } from 'react-router-dom';
import TopBar from '../Navbar/TopBar';
import BlogNavBar from '../Blogs/BlogNavBar';

const AdminPanel = () => {
    const [blogs, setBlogs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Simulate API call
        setBlogs(data.blogs);
    }, []);

    const handleEdit = id => {
        navigate(`/edit/${id}`);
    };

    const handleDelete = id => {
        const updatedBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(updatedBlogs);
        // console.log(`Deleted blog with ID: ${id}`);
    };

    return (
        <>
            <TopBar />
            <BlogNavBar />
            <div>
                <h1>Admin Panel</h1>
                <ul>
                    {blogs.map(blog => (
                        <li key={blog.id}>
                            <h2>{blog.title}</h2>
                            <button
                                className="bg-yellow-400"
                                onClick={() => handleEdit(blog.id)}
                            >
                                Edit
                            </button>
                            <button
                                className="bg-red-300"
                                onClick={() => handleDelete(blog.id)}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default AdminPanel;

// useEffect(() => {
//     fetch(data)
//         .then(response => response.json())
//         .then(data => setBlogs(data.blogs));
// }, []);

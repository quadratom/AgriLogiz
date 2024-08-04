import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import data from '../../assets/blogs.json';
import TopBar from '../Navbar/TopBar';
import BlogNavBar from '../Blogs/BlogNavBar';

const EditBlog = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const blogToEdit = data.blogs.find(blog => blog.id === parseInt(id));
        if (blogToEdit) {
            setBlog(blogToEdit);
            setTitle(blogToEdit.title);
            setContent(blogToEdit.content);
        }
    }, [id]);

    const handleSave = () => {
        const updatedBlog = { ...blog, title, content };
        console.log('Updated blog:', updatedBlog);
        navigate('/admin');
    };

    if (!blog) return <div>Loading...</div>;

    return (
        <>
         <TopBar />
         <BlogNavBar />
            <div>
                <h1>Edit Blog</h1>
                <form onSubmit={e => e.preventDefault()}>
                    <div>
                        <label>Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Content</label>
                        <textarea
                            value={content}
                            onChange={e => setContent(e.target.value)}
                        ></textarea>
                    </div>
                    <button onClick={handleSave}>Save</button>
                </form>
            </div>
        </>
    );
};

export default EditBlog;

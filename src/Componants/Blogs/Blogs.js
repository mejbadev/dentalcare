import React, { useEffect, useState } from 'react';
import banner from '../../images/Banner/Banner1.jpg';
import Blog from '../Blog/Blog';
const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('./fakeDbBlog.json')
        .then(res => res.json())
        .then(data=>{
            setBlogs(data);
        })
    },[])
    return (
        <div className='container' id='blogs'>
            <div className='service-container row gx-2'>
                <h2 className='text-primary'>Blogs</h2>
                <p className='text-info'>Learn about your teeth</p>
                {
                    blogs.map(blog=><Blog key={blog.id} blog={blog}></Blog>)
                }
            </div>
            
        </div>
    );
};

export default Blogs;
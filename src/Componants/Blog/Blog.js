import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';


const Blog = (props) => {
    const {id, title, img, detail } = props.blog;
 
    return (
        <div className='col-lg-6 col-sm-12 col-12 g-2'>
        <div className='blog-detail  mb-3 p-3' >
            <div className='d-flex'>
            <img className= 'img-fluid' src={img} alt="" />
            <div className='p-2'>
            <h4>{title}</h4>
            <p>{detail.slice(0,330)} <Link to='/'>See More..</Link> </p>
            </div>
            
            
        </div>
        </div>
        </div>
        
    );
};

export default Blog;
import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';


const Service = (props) => {
    const {name, image,detail, id} = props.service;
    const link=`./services/${id}`;
    return (
        <div className=' col-lg-4 col-md-2 col-sm-2 col-12 g-2'>
        <div className='service-detail  mb-3 p-3' >
            <div className=' '>
            <img className= 'img-fluid' width='100px' height='100px' src={image} alt="" />
            <h2>{name}</h2>
            <p>{detail.slice(0,150)}</p>
            <Link to={link}><button className='btn btn-info px-3'>Details</button></Link>
            
        </div>
        </div>
        </div>
        
        
    );
};

export default Service;
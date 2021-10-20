import React from 'react';
import { Link } from 'react-router-dom';
import './Doctor.css';


const Doctor = (props) => {
    const {id, name,cost, profession,detailProfile,rate, img} = props.doctor;
    return (
        <div className=' col-lg-4 col-md-2 col-sm-2 col-12 g-2'>
        <div className='doctor-detail  mb-3 p-3' >
            <div className=' '>
            <img className= 'img-fluid' width='100px' height='100px' src={img} alt="" />
            <h4 className='text-primary'>{name.toUpperCase()}</h4>
            <h6>{profession}</h6>
            <h6>Visit: {cost}</h6>
            <p>{detailProfile.slice(0,120)}</p>
            <p className='text-dark'> <i className="far fa-star text-warning"></i> {rate}</p>
            <br />
            <Link to='/' ><button className='btn btn-info p-2'>Get Appoint</button></Link>
            
        </div>
        </div>
        </div>
        
    );
};

export default Doctor;
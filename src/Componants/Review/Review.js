import React from 'react';
import { Link } from 'react-router-dom';
import './Review.css';


const Review = (props) => {

    const {name} = props.review;
    console.log(props);

    return (
        <div className=' col-lg-4 col-md-2 col-sm-2 col-12 g-2'>
        <div className='service-detail  mb-3 p-3' >
            <h2>
                {name}
            </h2>
            
        </div>
        </div>
       
        
        
    );
};

export default Review;
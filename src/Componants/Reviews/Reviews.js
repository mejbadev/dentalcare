import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        fetch('/fakeDbResponse.json')
        .then(res => res.json())
        .then(data=>{
            console.log(data);
            setReviews(data);
        }).catch(error=>{
            console.log(error);
        })
    },[])
    return (
        <div className='container mt-4 mb-4' id='services'>
            <div className='service-container row gx-2'>
                <h2 className='text-primary'>Reviews</h2>
                <p className='text-info'>Whats our clients say</p>
                {
                    reviews.map(review=><Review key={review.id} review = {review}></Review>)
                }
            </div>
            
        </div>
    );
};

export default Reviews;
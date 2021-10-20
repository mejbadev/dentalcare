import React, { useEffect, useState } from 'react';
import banner from '../../images/Banner/Banner1.jpg';
import Service from '../Service/Service';
const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('./fakeDbServices.json')
        .then(res => res.json())
        .then(data=>{
            setServices(data);
        }).catch(error=>{
            console.log(error);
        })
    },[])
    return (
        <div className='container mt-4 mb-4' id='services'>
            <div className='service-container row gx-2'>
                <h2 className='text-primary'>OUR SERVICES</h2>
                <p className='text-info'>Get your health service from us</p>
                {
                    services.map(service=><Service key={service.id} service={service}></Service>)
                }
            </div>
            
        </div>
    );
};

export default Services;
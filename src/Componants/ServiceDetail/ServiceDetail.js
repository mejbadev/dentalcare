
import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import './ServiceDetail.css';


const ServiceDetail = () => {
    const params = useParams();
    const {serviceId}= params;
    const [s, setS] = useState([]);
    console.log(serviceId);
  
    useEffect(()=>{
            fetch('/fakeDbServices.json')
            .then(res => res.json())
            .then(data=>{
             const serviceData=  data.find(d => d.id == serviceId);
             setS(serviceData);
            })
        },[])

    
    const {image, name, detail} = s;
    
    return (
        <div className='container service-detail-individual'>
        <h2>Services detail of {name}</h2>
        {s && <div>
            <img src={image} alt="" />
            <h2 className="text-primary ">{name}</h2>
            <p>{detail}</p>

        </div>
        }    
        </div>
        
    );
};

export default ServiceDetail;
import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(()=>{
        fetch('./fakeDbDoctor.json')
        .then(res => res.json())
        .then(data=>{
            setDoctors(data);
        })
    },[])
    return (
        <div className='container' id='team'>
            <div className='service-container row mb-3 gx-3'>
                <h2 className='text-primary '>OUR TEAM</h2>
                <p className='text-info '>Who care for you</p>
                {
                    doctors.map(doctor=><Doctor key={doctor.id} doctor={doctor}></Doctor>)
                }
            </div>
            
        </div>
    );
};

export default Doctors;
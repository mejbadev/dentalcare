import React from 'react';
import './GetAppointment.css';

const GetAppointMent = () => {
    return (
        <div className='container mb-3 mt-3' id='contact'>
            <h2 className='text-primary'>Get Appointment</h2>
            <p className='text-info'>Booking a doctor</p>
            <div className='login-form bg-info bg-opacity-25 w-75 mx-auto p-5 mt-3'>
             
                <label>Your name: </label>
                <input className='p-2 bg-info bg-opacity-25'  type="text" name="name" id="" placeholder='Name' />
                <br /><br />
                <label>Mobile No: </label>
                <input className='p-2 bg-info bg-opacity-25'  type="text" name="email" id="" placeholder='Mobile No' />
                <br /><br />
                <label>Your Email: </label>
                <input className='p-2 bg-info bg-opacity-25'  type="text" name="email" id="" placeholder='Email' />
                <br /><br />
                <label>Doctor Name: </label>
                <input className='p-2 bg-info bg-opacity-25'  type="text" name="email" id="" placeholder='Doctor Name' />
                <br /><br />
                <label>Visit Date: </label>
                <input className='p-2 bg-info bg-opacity-25' type="date" name="" id="" />

                <br /><br />
                
                <button className='btn btn-primary p-2' type="submit">Submit</button>
                
           </div>
        </div>
    );
};

export default GetAppointMent;
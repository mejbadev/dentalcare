import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Register.css';

const Register = () => {
    const {user, handleGoogleLogin, createUser} = useAuth();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const getEmail =(e)=>{
        console.log(e.target.value);
        setEmail(e.target.value);
    }
    const getName =(e)=>{
        console.log(e.target.value);
        setName(e.target.value);
    }
    const getPassword =(e)=>{
        console.log(e.target.value);
        setPassword(e.target.value);
    }
    const registerHandle =(e)=>{
          createUser(name, email, password);
          e.preventDefault();

    }
    return (
        <div className='container  mt-2 mb-3'>
            
            <div className='login-form bg-info bg-opacity-25 w-50 mx-auto p-3 mt-3'>
            <h2 className='text-primary'>Register</h2>
           
             
                <label>Your name: </label>
                <input className='p-2 bg-info bg-opacity-25' onChange={getName} type="text" name="name" id="" placeholder='Name' />
                <br /><br />
                <label>username: </label>
                <input className='p-2 bg-info bg-opacity-25' onChange={getEmail} type="text" name="email" id="" placeholder='Email' />
                <br /><br />
                <label>password: </label>
                <input className='p-2 bg-info bg-opacity-25' onChange={getPassword} type="password" name="password" id="" placeholder='Password'/>
                <br /><br />
                <button onClick={registerHandle} className='btn btn-primary p-2' type="submit">Register</button>
            
                <br /><br />
                <Link to='/login'>Already Register?</Link>
                
                


            </div>
            
        </div>
    );
};

export default Register;
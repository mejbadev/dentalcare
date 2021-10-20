import React, { useState } from 'react';
import { Link, useLocation} from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

import './Login.css';

const Login = () => {
    const location = useLocation();
    console.log('came from',location.state?.from);
    const {user, handleGoogleLogin, login} = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const getEmail =(e)=>{
    
        setEmail(e.target.value);
    }
    const getPassword =(e)=>{
   
        setPassword(e.target.value);
    }
    const signWithEmail =(e)=>{
        login(email, password);
        e.preventDefault();
    

    }
    return (
        <div className='container mt-2 mb-3 '>
            
            <div className='login-form bg-info bg-opacity-25 w-50 mx-auto p-3 mt-3'>
            <h2 className='text-primary'>Login</h2>
                <label>username: </label>
                <input className='p-2 bg-info bg-opacity-25' onChange={getEmail} type="text" name="email" id="" placeholder='Email' />
                <br /><br />
                <label>password: </label>
                <input className='p-2 bg-info bg-opacity-25' onChange={getPassword} type="password" name="password" id="" placeholder='Password'/>
                <br /><br />
                <button onClick={signWithEmail} className='btn btn-primary p-2' type="submit">Login</button><br /><br />
                <Link to='/register'>Not Register Yet?</Link>
                <div className='mt-3'>
                <button className='btn btn-warning' onClick={handleGoogleLogin}>Google Log in</button>
            
                </div>
                


            </div>
            
        </div>
    );
};

export default Login;
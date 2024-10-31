import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';

export default function LoginForm () {
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    });
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
    const [showUploadModal, setShowUploadModal] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        });
    };

    const login = async (credentials) => {
        try {
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });

            const data = await response.json();
            console.log("Login response data:", data);

            if (data && data.data) {

                localStorage.setItem('user', JSON.stringify(data.data));
                localStorage.setItem('token', data.token);
                setIsLoggedIn(true); 
                setShowUploadModal(true);
                toast.success('Login successful!');
                navigate('/Home');
            } else {
                toast.error('An error occurred during login. Please try again.');
            }
            if (data?.data?.role === 1) {
                navigate('/AdminDashboard');
            } 
            return data;
        } catch (error) {
            console.error("Login error:", error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        login(credentials);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setIsLoggedIn(false);
        setShowUploadModal(false);
        navigate('/Home');
    };

    return (
    <div>
    <div className="container-fluid">
    <div className='row'>
    <div className='col-lg-12 col-md-12 col-sm-12 colo'>
    <Link to='/Home'><img src='./logo-pets.png' className='login_log' style={{marginLeft:'-1rem'}} alt='Logo' /></Link>
    </div>
    <div className='col-lg-12 col-md-12 col-sm-12 colo'>
    <h2 className='login'>Login to continue</h2>
    </div>
    </div>
    {!isLoggedIn && (
    <form autoComplete='off' style={{ marginTop: '2rem' }} onSubmit={handleSubmit}>
    <div className='row'>
    <div className='col-lg-12 col-md-12 col-sm-12 colo'>
    <input type="email" name="email" className='input-fields2' value={credentials.email} onChange={handleInputChange} placeholder='Email' required/>
    </div>
    </div>
    <div className='row' style={{ marginBottom: '1rem' }}>
    <div className='col-lg-12 col-md-12 col-sm-12 colo'>
    <input type="password" name="password" className='input-fields2' value={credentials.password} onChange={handleInputChange} placeholder='Password' required/>
    </div>
    </div>
    <div className='row'>
    <div className='col-lg-12 col-md-12 col-sm-12 colo'>
    <span className='check-box'>
    <input type='checkbox' /><span>Remember me</span>
    </span>
    <span><Link to='/ForgetPassword' className='forget2'>Forget Password?</Link></span>
    </div>
    </div>
    <div className='row mt-3'>
    <div className='col-lg-12 col-md-12 col-sm-12 colo'>
    <button className='login_btn' type='submit'>Login</button>
    </div>
    </div>
    </form>
    )}

    {isLoggedIn && (
    <div>
        <button className='logout_btn' onClick={handleLogout}>Logout</button>
    </div>
    )}
    {showUploadModal && (
    <div className="upload-modal">
    <h3>Upload Pet Information</h3>
    <button onClick={() => setShowUploadModal(false)}>Close</button>
    </div>
    )}
    </div>
    </div>
    );
}



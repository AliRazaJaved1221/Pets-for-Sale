import React from 'react';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';

const initialValues = {
    username: '',
    email: '',
    mobileContact: '',
    password: '',
};

const onSubmit = async (values, { resetForm }, navigate) => {
    debugger;
    const req = {
        username: values.username,
        email: values.email,
        mobileContact: values.mobileContact,
        password: values.password,
    };

try {
    const response = await fetch('http://localhost:5000/api/auth/signup', {
       method: 'POST',
       headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(req),
        });
        

    if (!response.ok) {
         throw new Error(`HTTP error! status: ${response.status}`);
    }
    localStorage.setItem('userDetail', JSON.stringify(req));
      
    const data = await response.json();
    toast.success("Registration successful!");
    resetForm();
    navigate('/Home');
    return data;
    } catch (error) {
    console.error('Error:', error);
    toast.error("Registration failed. Please try again.");
    }
};

export default function SignUpForm() {
const navigate = useNavigate();

const formik = useFormik({
initialValues,
onSubmit: (values, formikHelpers) => onSubmit(values, formikHelpers, navigate),
});
console.log('Errors',formik.errors)

return (
<div>
    <div className="container-fluid">
        <div className='row'>
        <div className='col-lg-12 col-md-12 col-sm-12 colo'>
        <Link to='/Home'><img src='./logo-pets.png' className='login_logo' style={{marginLeft:'-1rem'}} alt='Logo' /></Link>
        </div>
        <div className='col-lg-12 col-md-12 col-sm-12 colo'>
        <h2 className='signup'>Sign Up to continue</h2>
        </div>
        </div>
        <form autoComplete='off' style={{ marginTop: '2rem' }} onSubmit={formik.handleSubmit}>
        <div className='row'>
        <div className='col-lg-12 col-md-12 col-sm-12 colo'>
        <input type="text" className='input-fields2' onChange={formik.handleChange} value={formik.values.username} placeholder='UserName' id='username' name='username' required /></div>
        </div>
        <div className='row'>
        <div className='col-lg-12 col-md-12 col-sm-12 colo'>
        <input type="email" className='input-fields2' onChange={formik.handleChange} value={formik.values.email} placeholder='Email' id='email' name='email' required /></div>
        </div>
        <div className='row'>
        <div className='col-lg-12 col-md-12 col-sm-12 colo'>
        <input type="text" className='input-fields2' onChange={formik.handleChange} value={formik.values.mobileContact} placeholder='Number' id='mobileContact' name='mobileContact' required /></div>
        </div>
        <div className='row'>
        <div className='col-lg-12 col-md-12 col-sm-12 colo'>
        <input type="text" className='input-fields2' onChange={formik.handleChange} value={formik.values.password} placeholder='Password' id='password' name='password' required /></div>
        </div>
        <div className='row'>
        <div className='col-lg-12 col-md-12 col-sm-12 colo'>
        <span className='check-box'><input type='checkbox' /><span>Remember me</span></span>
        <span><Link to='/ForgetPassword'className='forget2'>Forget Password?</Link></span>
        </div>
        </div>
        <div className='row mt-3'>
        <div className='col-lg-12 col-md-12 col-sm-12 colo'>
        <button className='signup_btn' type='submit'>SignUp</button>
        </div>
        </div>
        <div className='row'>
        <div className='col-lg-12 col-md-12 col-sm-12 colo'>
        <div><Link to='/' style={{color: '#06048c', textDecoration: 'none' }}>Privacy and Terms & Conditions</Link></div>
        </div>
        </div>
        <div className='row'>
        <div className='col-lg-12 col-md-12 colo'>
        <div><Link to='/LoginForm' style={{ color: 'black', fontWeight: 'bold', textDecoration: 'none' }}>Already Exists, Login</Link></div>
        </div>
        </div>
        </form>
        </div>
        </div>
    )
}

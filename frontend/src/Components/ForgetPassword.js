import React from 'react'
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';

export default function ForgetPassword() {
    const initialValues = {
        email: ''
    }
    const onSubmit = values => {
        console.log('Given values: ', values)
    }
    const validate = values => {
        let errors = {}
        if (!values.email) {
            errors.email = 'This is required';
        }
        return errors
    }
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })
  return (
    <div>
    <div className="container-fluid">
        <div className='row'>
        <div className='col-lg-5 col-md-0 col-sm-0'></div>
        <div className='col-lg-7 col-md-12 col-sm-12'>
        <Link to='/Home'><img src='./logo-pets.png' className='login_logo' alt='Logo' /></Link>
        <h2 className='login'>Account Recovery</h2>
        </div>
        </div>
        <form autoComplete='off' style={{ marginTop: '2rem' }} onSubmit={formik.handleSubmit}>
            <div className='row'>
                <div className='col-lg-5 col-md-12 col-sm-12'></div>
                <div className='col-lg-7 col-md-12 col-sm-12'><input type="email" className='input-fields2' onChange={formik.handleChange} value={formik.values.email} placeholder='Email Address' id='email' name='email' required /></div>
            </div>
            <div className='row mt-3'>
                <div className='col-lg-5 col-md-4'></div>                        
                <div className='col-lg-7 col-md-8'>
                    <button className='signup_btn' type='submit'>Submit</button>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-5 col-md-4'></div>                        
                <div className='col-lg-7 col-md-8'>
                <div><Link to='/' style={{marginLeft:'2.5rem', color: '#06048c', textDecoration: 'none' }}>Privacy and Terms & Conditions</Link></div>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-5 col-md-4'></div>                        
                <div className='col-lg-7 col-md-8'>
                <div><Link to='/SignUpForm' style={{marginLeft:'5rem', color: 'black', fontWeight: 'bold', textDecoration: 'none' }}>Create an account</Link></div>
                </div>
            </div>
        </form>
    </div>
</div>
    )
}

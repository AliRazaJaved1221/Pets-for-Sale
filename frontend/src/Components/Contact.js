import React from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <>
    <div className='col-lg-12 col-md-12 col-sm-12 colo'>
        <Link to='/Home'><img src='./logo-pets.png' className='login_log' style={{ marginLeft: '-1rem'}} alt='Logo' /></Link>
      </div>
    <div>
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Do you have any questions? Please don't hesitate to contact us directly. Our team will respond within hours to help you.</p>
      </div>
      
      <div className="contact-container">
        <div className="contact-section">
          <h3>Personal Information</h3>
          <form>
            <div className="form-group">
              <input type="text" name="fullName" placeholder="First Name" className='input-fields2' required style={{marginRight:'1rem'}}/>
              <input type="email" name="email" placeholder="Last Name (Optional)" className='input-fields2' required />
            </div>
            <div className="form-group">
              <input type="text" name="fullName" placeholder="Email" className='input-fields2' required style={{marginRight:'1rem'}}/>
              <input type="email" name="email" placeholder="Contact no." className='input-fields2' required />
            </div>
            <div className="form-group">
              <textarea name="message" placeholder="Message"  className='input-fields3'required></textarea>
            </div>
            <button type="submit" style={{marginLeft: '13rem', marginTop:'1rem'}} className="btn-submit">Send Message</button>
          </form>
        </div>

        <div className="contact-section">
          <h3>Our Address</h3>
          <div style={{ height:'68%', border:'2px solid black', borderRadius:'5px'}}>
          <p style={{padding:'3px'}}>Pets For Sale</p>
          <p style={{padding:'3px'}}>M. A. Jinnah Campus, Defence Rd, off Raiwand Road, Lda Avenue Phase 1 Lda Avenue, Lahore, Punjab</p>
          <p style={{padding:'3px'}}><strong>Phone:</strong> +92 305 188 8872</p>
          <p style={{padding:'3px'}}><strong>Email:</strong> <a href="mailto:petsforsale.official@gmail.com" style={{ textDecoration: 'none' }}>petsforsale.official@gmail.com</a></p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

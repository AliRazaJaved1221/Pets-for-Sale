import React from 'react';
import { Link } from 'react-router-dom';

export default function Privacy() {
  return (
    <>
    <div className="container3">
    <div className='col-lg-12 col-md-12 col-sm-12 colo'>
    <Link to='/Home'><img src='./logo-pets.png' className='login_log' style={{marginLeft:'-1rem' , marginTop:'-2rem'}} alt='Logo' /></Link>
    </div>
      <h1 className="heading3">Privacy Policy</h1>
      <p className="updated3"><strong>Last Updated: 01-11-2024</strong></p>
      <p>Welcome to <a href='Home' style={{textDecoration:'none', fontWeight:'bold'}}>Pets For Sale!</a> Your privacy is very important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you visit and interact with our website. By using our website, you agree to the terms of this Privacy Policy.</p>
      </div>
<div style={{marginLeft:'2rem'}}>
      <h2 className="subHeading3"> Information We Collect</h2>
      <p>We collect various types of information to provide and improve our services to you:</p>
     
        <div><strong>Personal Information:</strong> When you register, buy, or sell pets on our website, we may collect your name, email address, phone number, billing address, and payment details.</div>
        <div><strong>User-Generated Content:</strong> This includes details about the pets you upload for sale, reviews, and any other content you share on our platform.</div>
        <div><strong>Usage Data:</strong> We collect information on how you interact with our website, including pages viewed, time spent, and links clicked.</div>
        <div><strong>Cookies and Tracking Technologies:</strong> Our website uses cookies and similar tracking tools to personalize your experience and analyze site usage.</div>
    

      <h2 className="subHeading3"> How We Use Your Information</h2>
      <p>We use your information in the following ways:</p>

        <div><strong>To Provide Services:</strong> We use your personal information to facilitate buying and selling transactions and manage your user account.</div>
        <div><strong>Customer Support:</strong> We may use your information to respond to inquiries and support requests.</div>
        <div><strong>Improve Our Website:</strong> Usage data helps us improve the functionality and user experience of our website.</div>
        <div><strong>Marketing and Promotions:</strong> If you agree, we may send promotional content or offers we believe might interest you.</div>


      <h2 className="subHeading3"> Sharing Your Information</h2>
      <p>We do not sell or rent your personal information. However, we may share your information with:</p>

        <div><strong>Third-Party Service Providers:</strong> These providers help us operate our website (e.g., payment processing) and are required to protect your information.</div>
        <div><strong>Legal Compliance:</strong> We may share information when required by law or to protect our rights, property, or safety.</div>
        <div><strong>Business Transfers:</strong> If we merge or are acquired, your information may be transferred as part of the transaction.</div>


      <h2 className="subHeading3"> Your Privacy Choices</h2>
      <p>You have several choices regarding your information:</p>

        <div><strong>Account Settings:</strong> You can update your profile information in your account settings.</div>
        <div><strong>Marketing Communications:</strong> You may opt out of marketing communications by following the unsubscribe link in our emails or updating your preferences.</div>
        <div><strong>Cookies:</strong> You can manage cookies through your browser settings.</div>


      <h2 className="subHeading3"> Data Security</h2>
      <p>We implement security measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is 100% secure, and we cannot guarantee its absolute security.</p>

      
      <h2 className="subHeading3"> Your Rights</h2>
      <p>Depending on your location, you may have certain rights over your personal data, including the right to access, correct, delete, or restrict its processing. To exercise any of these rights, please contact us at petsforsale.official@gmail.com</p>

      <h2 className="subHeading3"> Changes to This Privacy Policy</h2>
      <p>We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page. Please check this page periodically for updates.</p>
      <div className='container3'>
      <h2 className="subHeading3"> Contact Us</h2>
      <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
      <p><strong>Pets For Sale</strong><br />
        <strong>Email:</strong> <a href="mailto:petsforsale.official@gmail.com" style={{textDecoration:'none'}}>petsforsale.official@gmail.com</a><br />
        <strong>Phone:</strong> <a href="tel:03051888872" style={{textDecoration:'none'}}>0305-1888872</a></p>

      <p><strong>Thank you for trusting Pets For Sale with your information.</strong></p>
      </div>
      </div>
      </>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

export default function TermsAndConditions() {
  return (
    <div className="container3">
      <div className='col-lg-12 col-md-12 col-sm-12 colo'>
        <Link to='/Home'><img src='./logo-pets.png' className='login_log' style={{ marginLeft: '-1rem', marginTop: '-2rem' }} alt='Logo' /></Link>
      </div>
      <h1 className="heading3">Terms and Conditions</h1>
      <p className="updated3"><strong>Last Updated: 01-11-2024</strong></p>

      <h2 className="subHeading3">User Registration and Account Security</h2>
      <p>Users must register an account to access certain features. Account details must be kept confidential, and users are responsible for all activities under their account. Providing false information may result in account termination.</p>

      <h2 className="subHeading3">Buying and Selling of Pets</h2>
      <p>Transactions are conducted directly between buyers and sellers. We are not responsible for the quality, legality, or health of any pet listed on the platform. Sellers must provide accurate descriptions and documentation for pets.</p>

      <h2 className="subHeading3">Reviews and Ratings</h2>
      <p>Users may leave reviews for pets purchased. Reviews must be honest and accurate. We reserve the right to remove reviews that violate our policies.</p>

      <h2 className="subHeading3">User Responsibilities</h2>
      <p>Users agree not to misuse the platform by uploading harmful, offensive, or misleading content and must comply with local laws regarding the purchase and sale of animals.</p>

      <h2 className="subHeading3">Prohibited Activities</h2>
      <p>Users are prohibited from engaging in fraudulent transactions, posting offensive content, violating others' intellectual property rights, and interfering with others’ listings.</p>

      <h2 className="subHeading3">Payment and Refund Policy</h2>
      <p>Payments are managed through our payment module. Users are responsible for providing accurate payment information. Refunds are handled directly between buyers and sellers, and we are not responsible for managing refunds or disputes.</p>

      <h2 className="subHeading3">Data Privacy</h2>
      <p>We handle your personal information in compliance with our Privacy Policy. By using the platform, you consent to the collection and storage of information as outlined in the Privacy Policy.</p>

      <h2 className="subHeading3">Disclaimer of Warranties</h2>
      <p>We do not guarantee the availability, accuracy, or reliability of the platform. Users access and use the platform at their own risk.</p>

      <h2 className="subHeading3">Limitation of Liability</h2>
      <p>We are not liable for any damages arising from the use of our platform, including loss of data, revenue, or business.</p>

      <h2 className="subHeading3">Termination</h2>
      <p>We reserve the right to terminate or suspend any account at our discretion, without notice, for violations of these terms or engaging in prohibited activities.</p>

      <h2 className="subHeading3">Changes to Terms and Conditions</h2>
      <p>We may modify these Terms and Conditions at any time. Updated terms will be effective immediately upon posting. Continued use of the platform indicates acceptance of revised terms.</p>

      <h2 className="subHeading3">Contact Us</h2>
      <p>If you have any questions or concerns, please contact us at:</p>
      <p><strong>Pets For Sale</strong><br />
        <strong>Email:</strong> <a href="mailto:petsforsale.official@gmail.com" style={{ textDecoration: 'none' }}>petsforsale.official@gmail.com</a><br />
        <strong>Phone:</strong> <a href="tel:03051888872" style={{ textDecoration: 'none' }}>0305-1888872</a>
      </p>

      <p><strong>Thank you for using Pets For Sale.</strong></p>
    </div>
  );
}

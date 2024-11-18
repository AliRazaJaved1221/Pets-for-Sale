import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contact: '',
    contactType: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { fullName, email, contact, contactType, message } = formData;

    if (!fullName || !email || !contact || !contactType || !message) {
      toast.error('Please fill in all required fields.', {
        hideProgressBar: true,
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Your query was submitted. Thank you for contacting us.', {
        });

        // Reset form fields after successful submission
        setFormData({
          fullName: '',
          email: '',
          contact: '',
          contactType: '',
          message: '',
        });
      } else {
       alert("Failed to submit query.")
      }
    } catch (error) {
      console.error('Error submitting query:', error);
     alert("Failed to submit query. Please Try Again!")
    } finally {
      setLoading(false);
    }
  };

  return (
    <>

      <div className="col-lg-12 col-md-12 col-sm-12 colo">
        <Link to="/Home">
          <img
            src="./logo-pets.png"
            className="login_log"
            style={{ marginLeft: '-1rem' }}
            alt="Logo"
          />
        </Link>
      </div>

      <div className="contact-wrapper">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>
            Do you have any questions? Please don't hesitate to contact us directly. Our team will
            respond within hours to help you.
          </p>
        </div>

        <div className="contact-container">
          <div className="personal-info">
            <h3>Personal Information</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  className="input-fields2_contact"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input-fields2_contact"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="contact"
                  placeholder="Contact No."
                  className="input-fields2_contact"
                  value={formData.contact}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <select
                  name="contactType"
                  className="input-fields2_contact"
                  value={formData.contactType}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled>
                    Select Contact Type
                  </option>
                  <option value="complain">Complain</option>
                  <option value="info">Info</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Message"
                  className="input-fields3_contact"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-submit" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          <div className="address-info">
            <h3>Our Address</h3>
            <div className="address-box">
              <p>Pets For Sale</p>
              <p>
                M. A. Jinnah Campus, Defence Rd, off Raiwand Road, Lda Avenue Phase 1 Lda Avenue,
                Lahore, Punjab
              </p>
              <p>
                <strong>Phone:</strong> +92 305 188 8872
              </p>
              <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:petsforsale.official@gmail.com" className="email-link">
                  petsforsale.official@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

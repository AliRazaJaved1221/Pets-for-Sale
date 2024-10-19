import React from 'react';

export default function Contact() {
  return (
<div className="contact-page">
<div className="contact-header">
<h1>Contact Us</h1>
<p>Do you have any questions? Please don't hesitate to contact us directly. Our team will respond within hours to help you.</p>
</div>
<div className="contact-container">
<div className="contact-form">
<h3>Personal Information</h3>
<form>
<div className="form-group">
<input type="text" name="fullName" placeholder="Full Name" required />
<input type="email" name="email" placeholder="Email" required />
</div>
<div className="form-group">
<input type="text" name="subject" placeholder="Subject" required />
</div>
<div className="form-group">
<textarea name="message" placeholder="Message" required></textarea>
</div>
<button type="submit" className="btn-submit">Send Message</button>
</form>
</div>
<div className="contact-info">
<h3>Our Address</h3>
  <p>Pets For Sale</p>
  <p>M. A. Jinnah Campus, Defence Rd, off Raiwand Road, Lda Avenue Phase 1 Lda Avenue, Lahore, Punjab</p>
  <p><span style={{fontWeight:'bold'}}>Phone:</span> +92 305 188 8872</p>
  <p><span style={{fontWeight:'bold'}}>Email:</span> petsforsale.official@gmail.com</p>
</div>
</div>
</div>
  );
}

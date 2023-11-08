import React from "react";
import './About.css';

function ContactUs() {
  return (
    <div className="about-container">
      <div className="about-box">
      <h1>Contact Us</h1>
      <p>If you have any questions or need assistance, please don't hesitate to get in touch with us. We're here to help!</p>

      <div>
        <h2>Contact Information</h2>
        <p>Name: Staff</p>
        <p>Email: <a href="mailto:HavenofHouseplants@yourwebsite.com">HavenofHouseplant@yourwebsite.com</a></p>
        <p>Phone: +1 (123) 456-7890</p>
      </div>
    </div>
    </div>
  );
}

export default ContactUs;

import React, { Component } from 'react';
import './style.css';

class ContactForm extends Component {
  render() {
    return (
      <div className="Contact">
        <p className="section-label">Contact Us</p>
        <h2>We'd love to hear from you. Drop us a line below!</h2>
        <form>
          <input type="text" name="name" placeholder="Name"></input>
          <input type="email" name="email" placeholder="Email Address"></input>
          <textarea placeholder="Your Message"></textarea>
          <button className="blue-btn-big">Send Message</button>
        </form>
      </div>
    )
  }
}

export default ContactForm;
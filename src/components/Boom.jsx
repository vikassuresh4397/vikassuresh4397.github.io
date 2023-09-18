

  
  import React, { useState } from 'react';
  import emailjs from 'emailjs-com';
  
  const ContactForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Your EmailJS service ID
  const serviceId = 'service_tu00xop';
  // Your EmailJS template ID
  const templateId = 'template_36wbwls';
  // Your EmailJS user ID
  const userId = 'rZVIqbMZqW-JzoFnHVp3v';
  
      // Set up the email parameters
      const emailParams = {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email,
        message: message,
      };
  
      // Send the email using EmailJS
      emailjs.send(serviceId, templateId, emailParams, userId)
        .then((response) => {
          console.log('Email sent successfully:', response);
          // Reset the form fields
          setFirstName('');
          setLastName('');
          setPhoneNumber('');
          setEmail('');
          setMessage('');
        })
        .catch((error) => {
          console.error('Error sending email:', error);
        });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        </div>
        <div>
          <label>Phone Number:</label>
          <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Message:</label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
        </div>
        <button type="submit">Send</button>
      </form>
    );
  };
  
  export default ContactForm;
  
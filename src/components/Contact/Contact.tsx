import React from 'react';
import { inputStyle, textareaStyle, buttonStyle } from './styles';

const ContactPage = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    console.log('Form data submitted:', Object.fromEntries(formData.entries()));
  };

  const pageStyle = {
    backgroundColor: '#0B1432', // Background color for the entire page
    color: 'white', // Text color
  };

  const formContainerStyle = {
    backgroundColor: '#0B1432', // Background color for the form
    padding: '20px', // Padding around the form container
    borderRadius: '15px', // Border radius for a rounded look
  };

  return (
    <div className="contact-page-root" style={pageStyle}>
      <h1>Contact Us</h1>
      <div className="contact-form-container" style={formContainerStyle}>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              style={{ ...inputStyle, color: 'white' }}
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              style={{ ...inputStyle, color: 'white' }}
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              style={{ ...inputStyle, color: 'white' }}
              required
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Message"
              rows={4}
              style={{ ...textareaStyle, color: 'white' }}
              required
            ></textarea>
          </div>
          <div>
            <button type="submit" style={{ ...buttonStyle, color: '#0B1432' }}>
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;

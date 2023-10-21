import { CSSProperties } from 'react';

export const containerStyle: CSSProperties = {
  margin: '0',
  padding: '0',
  backgroundColor: '#0B1432', // Background color for the container
  position: 'absolute',
  top: '50px',
  boxSizing: 'border-box',
  minHeight: '100vh',
  width: '100%',
  color: 'white', // Text color for the entire page
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
};

export const inputStyle: CSSProperties = {
  maxWidth: '500px',
  width: '100%',
  borderRadius: '15px',
  padding: '10px',
  marginBottom: '10px',
  backgroundColor: 'white', // Background color for "Name," "Email," "Subject" input fields
  color: 'white', // Text color for input fields
};

export const textareaStyle: CSSProperties = {
  maxWidth: '500px',
  width: '100%',
  borderRadius: '15px',
  padding: '10px',
  marginBottom: '10px',
  backgroundColor: 'white', // Background color for "Message" textarea
  color: 'white', // Text color for textarea
  resize: 'vertical',
};

export const buttonStyle: CSSProperties = {
  borderRadius: '15px',
  padding: '10px 20px',
  backgroundColor: 'white', // Background color for the button
  color: 'white', // Text color for the button
  border: 'none',
  cursor: 'pointer',
};

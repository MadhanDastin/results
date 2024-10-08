import React from 'react';

const Footer: React.FC = () => {
  // Inline styles for the footer
  const footerStyle: React.CSSProperties = {
    background: 'linear-gradient(to right, white 5%, #4BB5FF)',
    color: '#000',
    height: '18px',
    fontSize: '8px',
    padding: '0.5rem',
    marginTop: '23px', 
    // marginTop: '1rem',
    // textAlign: 'center',
   
  };

  return (
    <div style={footerStyle}>
      by DASTIN Technologies
    </div>
  );
};

export default Footer;

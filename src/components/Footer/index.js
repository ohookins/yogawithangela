import React from 'react';
import Link from 'gatsby-link';

const Footer = () => (
    <div className="cabin" style={{
        margin: '0 auto',
        width: '50%',
        display: 'flex',
        justifyContent: 'center'
    }} >
      <div className="ph2 pt4">© 2014-2018 Angela Collins</div>
      <Link to="/impressum/" className="ph2 pt4 light-red">[Impressum]</Link>
    </div>
);
  
export default Footer
  
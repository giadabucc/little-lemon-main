import React from 'react';

function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Little Lemon. All rights reserved.</p>
      <address>
        <p>123 Lemon Street, Chicago, IL</p>
        <p>Email: <a href="mailto:info@littlelemon.com">info@littlelemon.com</a></p>
        <p>Phone: <a href="tel:+11234567890">+1 (123) 456-7890</a></p>
      </address>
    </footer>
  );
}

export default Footer;

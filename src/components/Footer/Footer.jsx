import React from 'react';
import "./Footer.css"; 

const Footer = () => {
  return (
    <footer id='bantuan' className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>About Us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rutrum metus eget mi vestibulum, sed consequat tellus vulputate.</p>
          </div>
          <div className="col-md-4">
            <h3>Contact Us</h3>
            <ul>
              <li>Email: syauqi@gmail.com</li>
              <li>Phone: +628-234-512-2090</li>
              <li>Address: Indonesia, Bengkulu</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>Follow Us</h3>
            <ul>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="mt-20">
            <p>&copy; 2022 Your Syauqi Nur Hibatullah. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

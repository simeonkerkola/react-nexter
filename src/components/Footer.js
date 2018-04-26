import React from 'react';

const Footer = () => (
  <footer className="footer">
    <nav className="footer-nav">
      <ul>
        <li className="nav__item">
          <a href="#0" className="nav__link">
            Find your dream home
          </a>
        </li>
        <li className="nav__item">
          <a href="#0" className="nav__link">
            Request a proposal
          </a>
        </li>
        <li className="nav__item">
          <a href="#0" className="nav__link">
            Download homeplanner
          </a>
        </li>
        <li className="nav__item">
          <a href="#0" className="nav__link">
            Contact us
          </a>
        </li>
        <li className="nav__item">
          <a href="#0" className="nav__link">
            Submit your property
          </a>
        </li>
        <li className="nav__item">
          <a href="#0" className="nav__link">
            Come work with us
          </a>
        </li>
      </ul>
      <p className="copyright">&copy; Copyright {new Date().getFullYear()} Simeon Kerkola</p>
    </nav>
  </footer>
);

export default Footer;

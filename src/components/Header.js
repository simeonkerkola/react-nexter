import React from 'react';

const Header = () => (
  <header className="header">
    <img src="/img/logo.png" alt="Nexter logo" className="header__logo" />
    <h3 className="heading-3">Your own home:</h3>
    <h1 className="heading-1">The ultimate personal freedom</h1>
    <a href="#0" className="btn header__btn">
      View our properties
    </a>
    <div className="header__press-text">Seen on</div>
    <div className="header__press-logos">
      <img src="/img/logo-bbc.png" alt="Seen on Bbc" />
      <img src="/img/logo-forbes.png" alt="Seen on Forbes" />
      <img src="/img/logo-techcrunch.png" alt="Seen on Techcrunch" />
      <img src="/img/logo-bi.png" alt="Seen on Business Insider" />
    </div>
  </header>
);

export default Header;

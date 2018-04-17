import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Features from './Features';

class LandingPage extends Component {
  render() {
    return (
      <div className="container">
        <Sidebar />
        <Header />
        <div className="realtors">Top 3 realtors</div>
        <Features />
        <div className="story__pictures">pictures</div>
        <div className="story__content">content</div>
        <section className="homes">Homes</section>
        <section className="gallery">Gallery</section>
        <footer className="footer">Footer</footer>
      </div>
    );
  }
}

export default LandingPage;

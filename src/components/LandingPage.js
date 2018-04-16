import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

class LandingPage extends Component {
  render() {
    return (
      <div className="container">
        <Sidebar />
        <Header />
        <div className="realtors">Top 3 realtors</div>
        <section className="features">Features</section>
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

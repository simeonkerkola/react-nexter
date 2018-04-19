import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Features from './Features';
import Story from './Story';
import Homes from './Homes/Homes';

class LandingPage extends Component {
  render() {
    return (
      <div className="container">
        <Sidebar />
        <Header />
        <div className="realtors">Top 3 realtors</div>
        <Features />
        <Story />
        <Homes />
        <section className="gallery">Gallery</section>
        <footer className="footer">Footer</footer>
      </div>
    );
  }
}

export default LandingPage;

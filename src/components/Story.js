import React from 'react';
import { Link } from 'react-router-dom';

const Story = () => (
  <div className="story">
    <div className="story__pictures">pictures</div>
    <div className="story__content">
      <h3 className="heading-3 heading-3--dark">Happy customers</h3>
      <h2 className="heading-2 heading-2--dark">&ldquo;Best decision of our lives&rdquo;</h2>
      <p className="story__text">
        Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut
        quia.
      </p>
      <Link to="#0" className="btn">
        Find your own home
      </Link>
    </div>
  </div>
);

export default Story;

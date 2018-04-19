import React from 'react';
import HomeCard from './HomeCard';

const Homes = () => (
  <section className="homes">
    <HomeCard
      img="house-1.jpeg"
      name="Beautiful family home"
      location="USA"
      rooms="5 rooms"
      area="325"
      price="1,200,00"
    />
    <HomeCard
      img="house-2.jpeg"
      name="Modern glass villa"
      location="Canada"
      rooms="6 rooms"
      area="450"
      price="2,700,00"
    />
    <HomeCard
      img="house-3.jpeg"
      name="Cozy country house"
      location="UK"
      rooms="4 rooms"
      area="250"
      price="850,000"
    />
    <HomeCard
      img="house-4.jpeg"
      name="Large rustical villa"
      location="Portugal"
      rooms="6 rooms"
      area="480"
      price="1,950,00"
    />
    <HomeCard
      img="house-5.jpeg"
      name="Majestic palace house"
      location="Germany"
      rooms="18 rooms"
      area="4280"
      price="22,500,00"
    />
    <HomeCard
      img="house-6.jpeg"
      name="Modern family apartment"
      location="Italy"
      rooms="3 rooms"
      area="180"
      price="600,000"
    />
  </section>
);

export default Homes;

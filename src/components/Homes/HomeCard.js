import React from 'react';
import { Link } from 'react-router-dom';

const HomeCard = ({
  img, name, location, rooms, area, price,
}) => (
  <div className="home">
    <img src={`/img/${img}`} alt={name} className="home__img" />
    <svg className="home__like">
      <use xlinkHref="/img/sprite.svg#icon-heart-full" />
    </svg>
    <h5 className="home__name">{name}</h5>
    <div className="home__location">
      <svg>
        <use xlinkHref="/img/sprite.svg#icon-map-pin" />
      </svg>
      <p>{location}</p>
    </div>

    <div className="home__rooms">
      <svg>
        <use xlinkHref="/img/sprite.svg#icon-profile-male" />
      </svg>
      <p>{rooms}</p>
    </div>

    <div className="home__area">
      <svg>
        <use xlinkHref="/img/sprite.svg#icon-expand" />
      </svg>
      <p>
        {area} m<sup>2</sup>
      </p>
    </div>

    <div className="home__price">
      <svg>
        <use xlinkHref="/img/sprite.svg#icon-key" />
      </svg>
      <p>${price}</p>
    </div>
    <Link to="#0" className="btn home__contact-btn">
      Contact realtor
    </Link>
  </div>
);

export default HomeCard;

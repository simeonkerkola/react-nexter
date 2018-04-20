import React from 'react';

const Gallery = () => (
  <section className="gallery">
    {/*
      Emmet query:
      (figure.gallery__item.gallery__item--$>img.gallery__img[src="/img/gal-$.jpeg"][alt="Gallery $"])*14
     */}

    <figure className="gallery__item gallery__item--1">
      <img src="/img/gal-1.jpeg" alt="Gallery 1" className="gallery__img" />
    </figure>
    <figure className="gallery__item gallery__item--2">
      <img src="/img/gal-2.jpeg" alt="Gallery 2" className="gallery__img" />
    </figure>
    <figure className="gallery__item gallery__item--3">
      <img src="/img/gal-3.jpeg" alt="Gallery 3" className="gallery__img" />
    </figure>
    <figure className="gallery__item gallery__item--4">
      <img src="/img/gal-4.jpeg" alt="Gallery 4" className="gallery__img" />
    </figure>
    <figure className="gallery__item gallery__item--5">
      <img src="/img/gal-5.jpeg" alt="Gallery 5" className="gallery__img" />
    </figure>
    <figure className="gallery__item gallery__item--6">
      <img src="/img/gal-6.jpeg" alt="Gallery 6" className="gallery__img" />
    </figure>
    <figure className="gallery__item gallery__item--7">
      <img src="/img/gal-7.jpeg" alt="Gallery 7" className="gallery__img" />
    </figure>
    <figure className="gallery__item gallery__item--8">
      <img src="/img/gal-8.jpeg" alt="Gallery 8" className="gallery__img" />
    </figure>
    <figure className="gallery__item gallery__item--9">
      <img src="/img/gal-9.jpeg" alt="Gallery 9" className="gallery__img" />
    </figure>
    <figure className="gallery__item gallery__item--10">
      <img src="/img/gal-10.jpeg" alt="Gallery 10" className="gallery__img" />
    </figure>
    <figure className="gallery__item gallery__item--11">
      <img src="/img/gal-11.jpeg" alt="Gallery 11" className="gallery__img" />
    </figure>
    <figure className="gallery__item gallery__item--12">
      <img src="/img/gal-12.jpeg" alt="Gallery 12" className="gallery__img" />
    </figure>
    <figure className="gallery__item gallery__item--13">
      <img src="/img/gal-13.jpeg" alt="Gallery 13" className="gallery__img" />
    </figure>
    <figure className="gallery__item gallery__item--14">
      <img src="/img/gal-14.jpeg" alt="Gallery 14" className="gallery__img" />
    </figure>
  </section>
);

export default Gallery;

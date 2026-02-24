import React from 'react';
import { Link } from 'react-router-dom';
import restaurantFood from '../icons_assets/restauranfood.jpg';

function CallToAction() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on
          traditional recipes served with a modern twist.
        </p>
        <Link to="/booking" className="btn-primary">Reserve a Table</Link>
      </div>
      <div className="hero-image">
        <img src={restaurantFood} alt="Delicious food at Little Lemon" />
      </div>
    </section>
  );
}

export default CallToAction;

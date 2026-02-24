import React from 'react';
import { Link } from 'react-router-dom';
import menuData from '../data/menuData';

function Specials() {
  return (
    <section className="specials-section">
      <div className="container">
        <div className="section-title-row">
          <h2>This Week's Specials!</h2>
          <Link to="/menu" className="btn-primary">Online Menu</Link>
        </div>
        <div className="grid-3-cols">
          {menuData.map((item) => (
            <article key={item.id} className="card">
              <img src={item.image} alt={item.alt} />
              <div className="card-body">
                <div className="card-title-row">
                  <h4>{item.title}</h4>
                  <span className="card-price">{item.price}</span>
                </div>
                <p>{item.description}</p>
                <Link to="/menu" className="card-order-link">
                  Order a delivery <span aria-hidden="true">🛵</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Specials;

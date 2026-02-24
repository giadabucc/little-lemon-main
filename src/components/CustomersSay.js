import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'John D.',
    rating: 5,
    review:
      'Amazing food and a wonderful atmosphere. The Greek Salad was absolutely delicious — fresh ingredients and full of flavour!',
  },
  {
    id: 2,
    name: 'Maria S.',
    rating: 5,
    review:
      'Best Mediterranean food in Chicago. The lemon dessert is a must-try. We will definitely be back!',
  },
  {
    id: 3,
    name: 'Robert K.',
    rating: 4,
    review:
      'Excellent service and authentic flavors. The bruschetta starter was outstanding and the staff were very welcoming.',
  },
  {
    id: 4,
    name: 'Emma L.',
    rating: 5,
    review:
      'A wonderful dining experience from start to finish. Great food, great ambiance — highly recommend!',
  },
];

function StarRating({ rating }) {
  return (
    <div className="stars" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < rating ? 'star filled' : 'star'}>
          ★
        </span>
      ))}
    </div>
  );
}

function CustomersSay() {
  return (
    <section className="testimonials-section">
      <div className="container">
        <h2>Testimonials</h2>
        <div className="grid-2-cols">
          {testimonials.map((t) => (
            <article key={t.id} className="testimonial-card">
              <StarRating rating={t.rating} />
              <h4>{t.name}</h4>
              <p>"{t.review}"</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CustomersSay;

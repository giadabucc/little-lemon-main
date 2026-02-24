import React from 'react';
import BookingForm from '../components/BookingForm';

function BookingPage({ availableTimes, dispatch }) {
  return (
    <section className="booking-section">
      <div className="container">
        <div className="booking-header">
          <h1>Reserve a Table</h1>
          <p>
            Book a table at Little Lemon and enjoy an unforgettable
            Mediterranean dining experience in Chicago.
          </p>
        </div>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      </div>
    </section>
  );
}

export default BookingPage;

import React, { useState } from 'react';

function BookingForm({ availableTimes, dispatch }) {
  const [resDate, setResDate]   = useState('');
  const [resTime, setResTime]   = useState(availableTimes[0] ?? '17:00');
  const [guests, setGuests]     = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  // Minimum bookable date is today
  const today = new Date().toISOString().split('T')[0];

  /** When the date changes, update local state AND ask Main to refresh available times */
  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setResDate(newDate);
    dispatch({ type: 'UPDATE_TIMES', date: newDate });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Will be connected to the reservations API in a future exercise
    console.log({ resDate, resTime, guests, occasion });
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>

      <div className="form-field">
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          min={today}
          value={resDate}
          onChange={handleDateChange}
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={resTime}
          onChange={(e) => setResTime(e.target.value)}
        >
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          id="guests"
          min="1"
          max="10"
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
      </div>

      <button type="submit" className="btn-primary">
        Make Your Reservation
      </button>

    </form>
  );
}

export default BookingForm;

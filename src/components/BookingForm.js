import React, { useState } from 'react';

function BookingForm({ availableTimes, dispatch }) {
  const [resDate, setResDate] = useState("");
  const [resTime, setResTime] = useState(availableTimes[0] ?? "17:00");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [formTouched, setFormTouched] = useState(false);
  // Minimum bookable date is today
  const today = new Date().toISOString().split("T")[0];
  // Validazione lato client
  const isDateValid = resDate && new Date(resDate) >= new Date(today);
  const isTimeValid = resTime && availableTimes.includes(resTime);
  const isGuestsValid = guests >= 1 && guests <= 10;
  const isOccasionValid = occasion === "Birthday" || occasion === "Anniversary";
  const isFormValid =
    isDateValid && isTimeValid && isGuestsValid && isOccasionValid;

  /** When the date changes, update local state AND ask Main to refresh available times */
  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setResDate(newDate);
    setFormTouched(true);
    dispatch({ type: "UPDATE_TIMES", date: newDate });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormTouched(true);
    if (!isFormValid) return;
    // Will be connected to the reservations API in una fase successiva
    console.log({ resDate, resTime, guests, occasion });
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit} noValidate>
      <div className="form-field">
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          min={today}
          value={resDate}
          onChange={handleDateChange}
          required
          aria-invalid={!isDateValid && formTouched}
        />
      </div>

      <div className="form-field">
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={resTime}
          onChange={(e) => {
            setResTime(e.target.value);
            setFormTouched(true);
          }}
          required
          aria-invalid={!isTimeValid && formTouched}
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
          onChange={(e) => {
            setGuests(Number(e.target.value));
            setFormTouched(true);
          }}
          required
          aria-invalid={!isGuestsValid && formTouched}
        />
      </div>

      <div className="form-field">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => {
            setOccasion(e.target.value);
            setFormTouched(true);
          }}
          required
          aria-invalid={!isOccasionValid && formTouched}
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
      </div>

      <button type="submit" className="btn-primary" aria-label="On Click">
        Make Your Reservation
      </button>
      {!isFormValid && formTouched && (
        <div className="form-error" style={{ color: "red", marginTop: "1em" }}>
          Please fill out all fields correctly before submitting.
        </div>
      )}
    </form>
  );
}

export default BookingForm;

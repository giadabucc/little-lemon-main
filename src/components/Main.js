import { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import BookingPage from '../pages/BookingPage';

/** Returns the default list of available booking times */
export function initializeTimes() {
  const today = new Date();
  return window.fetchAPI(today);
}

/**
 * Reducer that updates availableTimes based on the selected date.
 * Currently returns the same times for every date; will be wired
 * to the reservations API in a future exercise.
 */
export function updateTimes(state, action) {
  switch (action.type) {
    case "UPDATE_TIMES":
      // Usa fetchAPI per la data selezionata
      return window.fetchAPI(new Date(action.date));
    default:
      return state;
  }
}

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <main className="main-content">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
            />
          }
        />
      </Routes>
    </main>
  );
}

export default Main;

import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';
import { initializeTimes, updateTimes } from './Main';

// Shared props used across render tests
const mockAvailableTimes = initializeTimes();
const mockDispatch = jest.fn();

// ─────────────────────────────────────────────
//  Step 1 — Static text rendered by BookingForm
// ─────────────────────────────────────────────

test('Renders the BookingForm submit button', () => {
  render(
    <BookingForm
      availableTimes={mockAvailableTimes}
      dispatch={mockDispatch}
    />
  );
  const submitButton = screen.getByText('Make Your Reservation');
  expect(submitButton).toBeInTheDocument();
});

test('Renders the Choose date label', () => {
  render(
    <BookingForm
      availableTimes={mockAvailableTimes}
      dispatch={mockDispatch}
    />
  );
  expect(screen.getByText('Choose date')).toBeInTheDocument();
});

test('Renders the Choose time label', () => {
  render(
    <BookingForm
      availableTimes={mockAvailableTimes}
      dispatch={mockDispatch}
    />
  );
  expect(screen.getByText('Choose time')).toBeInTheDocument();
});

test('Renders the Number of guests label', () => {
  render(
    <BookingForm
      availableTimes={mockAvailableTimes}
      dispatch={mockDispatch}
    />
  );
  expect(screen.getByText('Number of guests')).toBeInTheDocument();
});

test('Renders the Occasion label', () => {
  render(
    <BookingForm
      availableTimes={mockAvailableTimes}
      dispatch={mockDispatch}
    />
  );
  expect(screen.getByText('Occasion')).toBeInTheDocument();
});

// ─────────────────────────────────────────────
//  Step 2 — Unit tests for initializeTimes
// ─────────────────────────────────────────────

test('initializeTimes returns a non-empty array', () => {
  const times = initializeTimes();
  expect(times.length).toBeGreaterThan(0);
});

test('initializeTimes returns the correct default time slots', () => {
  const times = initializeTimes();
  expect(times).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
});

// ─────────────────────────────────────────────
//  Step 2 — Unit tests for updateTimes
// ─────────────────────────────────────────────

test('updateTimes returns the same state when dispatching UPDATE_TIMES', () => {
  const initialState = initializeTimes();
  const result = updateTimes(initialState, { type: 'UPDATE_TIMES', date: '2025-06-15' });
  expect(result).toEqual(initialState);
});

test('updateTimes returns the unchanged state for an unknown action type', () => {
  const initialState = initializeTimes();
  const result = updateTimes(initialState, { type: 'UNKNOWN_ACTION' });
  expect(result).toEqual(initialState);
});

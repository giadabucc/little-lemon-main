import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { initializeTimes, updateTimes } from "./Main";

// Mock globale per fetchAPI
beforeAll(() => {
  window.fetchAPI = jest.fn((date) => ["17:00", "18:00", "19:00"]);
});

afterAll(() => {
  delete window.fetchAPI;
});

// Shared props used across render tests
const mockAvailableTimes = initializeTimes();
const mockDispatch = jest.fn();

// ─────────────────────────────────────────────
// Step 1: Test HTML5 validation attributes
test("Date input has required and min attributes", () => {
  render(
    <BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />,
  );
  const dateInput = screen.getByLabelText("Choose date");
  expect(dateInput).toHaveAttribute("required");
  expect(dateInput).toHaveAttribute("min");
});

test("Guests input has required, min, and max attributes", () => {
  render(
    <BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />,
  );
  const guestsInput = screen.getByLabelText("Number of guests");
  expect(guestsInput).toHaveAttribute("required");
  expect(guestsInput).toHaveAttribute("min", "1");
  expect(guestsInput).toHaveAttribute("max", "10");
});

test("Time and Occasion selects have required attribute", () => {
  render(
    <BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />,
  );
  const timeSelect = screen.getByLabelText("Choose time");
  const occasionSelect = screen.getByLabelText("Occasion");
  expect(timeSelect).toHaveAttribute("required");
  expect(occasionSelect).toHaveAttribute("required");
});

// Step 2: Test React validation logic
test("Form is invalid if guests < 1", async () => {
  render(
    <BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />,
  );
  const guestsInput = screen.getByLabelText("Number of guests");
  await userEvent.clear(guestsInput);
  await userEvent.type(guestsInput, "0");
  const submitButton = screen.getByRole("button", { name: /reservation/i });
  await userEvent.click(submitButton);
  expect(screen.getByText(/please fill out all fields/i)).toBeInTheDocument();
});

test("Form is invalid if date is empty", async () => {
  render(
    <BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />,
  );
  const dateInput = screen.getByLabelText("Choose date");
  await userEvent.clear(dateInput);
  const submitButton = screen.getByRole("button", { name: /reservation/i });
  await userEvent.click(submitButton);
  expect(screen.getByText(/please fill out all fields/i)).toBeInTheDocument();
});

test("Form is valid with all correct fields", async () => {
  render(
    <BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />,
  );
  const dateInput = screen.getByLabelText("Choose date");
  const guestsInput = screen.getByLabelText("Number of guests");
  const submitButton = screen.getByRole("button", { name: /reservation/i });
  await userEvent.clear(dateInput);
  await userEvent.type(dateInput, "2099-12-31");
  await userEvent.clear(guestsInput);
  await userEvent.type(guestsInput, "4");
  await userEvent.click(submitButton);
  expect(
    screen.queryByText(/please fill out all fields/i),
  ).not.toBeInTheDocument();
});
//  Step 1 — Static text rendered by BookingForm
// ─────────────────────────────────────────────

test("Renders the BookingForm submit button", () => {
  render(
    <BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />,
  );
  const submitButton = screen.getByText("Make Your Reservation");
  expect(submitButton).toBeInTheDocument();
});

test("Renders the Choose date label", () => {
  render(
    <BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />,
  );
  expect(screen.getByText("Choose date")).toBeInTheDocument();
});

test("Renders the Choose time label", () => {
  render(
    <BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />,
  );
  expect(screen.getByText("Choose time")).toBeInTheDocument();
});

test("Renders the Number of guests label", () => {
  render(
    <BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />,
  );
  expect(screen.getByText("Number of guests")).toBeInTheDocument();
});

test("Renders the Occasion label", () => {
  render(
    <BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />,
  );
  expect(screen.getByText("Occasion")).toBeInTheDocument();
});

// ─────────────────────────────────────────────
//  Step 2 — Unit tests for initializeTimes
// ─────────────────────────────────────────────

test("initializeTimes returns a non-empty array", () => {
  const times = initializeTimes();
  expect(Array.isArray(times)).toBe(true);
  expect(times.length).toBeGreaterThan(0);
});

test("initializeTimes returns the correct default time slots", () => {
  const times = initializeTimes();
  expect(times).toEqual(["17:00", "18:00", "19:00"]);
});

// ─────────────────────────────────────────────
//  Step 2 — Unit tests for updateTimes
// ─────────────────────────────────────────────

test("updateTimes returns the same state when dispatching UPDATE_TIMES", () => {
  const initialState = ["17:00", "18:00", "19:00"];
  const result = updateTimes(initialState, {
    type: "UPDATE_TIMES",
    date: "2025-06-15",
  });
  expect(result).toEqual(["17:00", "18:00", "19:00"]);
});

test("updateTimes returns the unchanged state for an unknown action type", () => {
  const initialState = ["17:00", "18:00", "19:00"];
  const result = updateTimes(initialState, { type: "UNKNOWN_ACTION" });
  expect(result).toEqual(initialState);
});

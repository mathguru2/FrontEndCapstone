import React from "react";
import "./Booking.css";

export default function BookingForm({
  availableTimes,
  formData,
  onChange,
  onSubmit,
}) {
  return (
    <form className="reservation-form" onSubmit={onSubmit}>
      <label htmlFor="date">Date:</label>
      <input
        type="date"
        id="date"
        name="date"
        value={formData.date}
        onChange={onChange}
        required
      />

      <label htmlFor="time">Time:</label>
      <select
        id="time"
        name="time"
        value={formData.time}
        onChange={onChange}
        required
      >
        <option value="">Select a time</option>
        {availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of Guests:</label>
      <input
        type="number"
        id="guests"
        name="guests"
        value={formData.guests}
        onChange={onChange}
        min="1"
        max="10"
        required
      />

      <label htmlFor="occasion">Occasion:</label>
      <select
        id="occasion"
        name="occasion"
        value={formData.occasion}
        onChange={onChange}
        required
      >
        <option value="">Select an occasion</option>
        <option value="none">None</option>
        <option value="birthday">Birthday</option>
        <option value="anniversary">Anniversary</option>
      </select>

      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
}

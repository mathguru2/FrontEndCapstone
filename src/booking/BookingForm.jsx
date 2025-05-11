import React, { useState } from "react";
import "./Booking.css";

export default function BookingForm({
  availableTimes,
  formData,
  onChange,
  onSubmit,
}) {
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.date) {
      newErrors.date = "Date is required.";
    }

    if (!formData.time) {
      newErrors.time = "Time is required.";
    }

    if (!formData.guests || formData.guests < 1 || formData.guests > 10) {
      newErrors.guests = "Number of guests must be between 1 and 10.";
    }

    if (!formData.occasion) {
      newErrors.occasion = "Occasion is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(e);
    }
  };

  return (
    <form className="reservation-form" onSubmit={handleSubmit}>
      <label htmlFor="date">Date:</label>
      <input
        type="date"
        id="date"
        name="date"
        value={formData.date}
        onChange={onChange}
        required
      />
      {errors.date && <p className="error-message">{errors.date}</p>}

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
      {errors.time && <p className="error-message">{errors.time}</p>}

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
      {errors.guests && <p className="error-message">{errors.guests}</p>}

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
      {errors.occasion && <p className="error-message">{errors.occasion}</p>}

      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
}

import React, { useEffect, useReducer, useState } from "react";
import "./Booking.css";
import TableLayout from "../assets/TableLayout.pdf";
import BookingForm from "./BookingForm";
import { fetchAPI } from "../fakeAPI";

export default function Booking() {
  const [formData, setFormData] = useState({
    date: null,
    time: "",
    guests: "",
    occasion: "",
  });

  const availableTimesReducer = (state, action) => {
    switch (action.type) {
      case "updateTime":
        return state.filter((time) => time !== action.payload);
      case "availableTime":
        return state;
      case "reset":
        return initializeTime(formData.date);
      default:
        throw new Error(`Unknown action type: ${action.type}`);
    }
  };

  const [availableTimes, dispatch] = useReducer(availableTimesReducer, [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);

  function initializeTime(date) {
    if (!date) {
      console.log(date);
      return [];
    }
    return fetchAPI(new Date(date));
  }

  useEffect(() => {
    if (formData.date) {
      dispatch({ type: "reset" });
    }
  }, [formData.date]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Convert the date input to a Date object

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Reservation submitted!");
    dispatch({ type: "updateTime", payload: e.target.time.value });
  };

  return (
    <div className="reserve-container">
      <h1>Reserve Your Table</h1>
      <button className="download-button">
        <a
          href={TableLayout}
          download="TableLayout.pdf"
          className="download-link"
        >
          Download Table Layout
        </a>
      </button>
      <BookingForm
        availableTimes={availableTimes}
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

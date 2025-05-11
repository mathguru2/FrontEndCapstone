import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("BookingForm Component", () => {
  const mockAvailableTimes = ["17:00", "18:00", "19:00"];
  const mockFormData = {
    date: "",
    time: "",
    guests: "",
    occasion: "",
  };
  const mockOnChange = jest.fn();
  const mockOnSubmit = jest.fn((e) => e.preventDefault());

  test("renders all form fields correctly", () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        formData={mockFormData}
        onChange={mockOnChange}
        onSubmit={mockOnSubmit}
      />
    );

    // Check if all form fields are rendered
    expect(screen.getByLabelText(/Date:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Time:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of Guests:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Occasion:/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Submit/i })).toBeInTheDocument();
  });

  test("renders available times in the dropdown", () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        formData={mockFormData}
        onChange={mockOnChange}
        onSubmit={mockOnSubmit}
      />
    );

    // Check if all available times are rendered as options
    const timeDropdown = screen.getByLabelText(/Time:/i);
    mockAvailableTimes.forEach((time) => {
      expect(screen.getByText(time)).toBeInTheDocument();
    });
    expect(timeDropdown).toHaveValue("");
  });

  test("calls onChange when input fields are updated", () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        formData={mockFormData}
        onChange={mockOnChange}
        onSubmit={mockOnSubmit}
      />
    );

    // Simulate user input
    const dateInput = screen.getByLabelText(/Date:/i);
    fireEvent.change(dateInput, { target: { value: "2025-05-15" } });
    expect(mockOnChange).toHaveBeenCalledTimes(1);

    const guestsInput = screen.getByLabelText(/Number of Guests:/i);
    fireEvent.change(guestsInput, { target: { value: "4" } });
    expect(mockOnChange).toHaveBeenCalledTimes(2);
  });

  test("calls onSubmit when the form is submitted", () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        formData={mockFormData}
        onChange={mockOnChange}
        onSubmit={mockOnSubmit}
      />
    );

    // Simulate form submission
    const submitButton = screen.getByRole("button", { name: /Submit/i });
    fireEvent.click(submitButton);
    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
  });
});

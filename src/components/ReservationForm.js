import React from 'react';
import './Main.css';

function ReservationForm() {
  return (
    <form className="reservation-form">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" placeholder="Name" required />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" placeholder="Email" required />
      <label htmlFor="phone">Phone:</label>
      <input type="tel" id="phone" placeholder="Phone" required />
      <label htmlFor="date">Date:</label>
      <input type="date" id="date" placeholder="Date" required />
      <label htmlFor="time">Time:</label>
      <input type="time" id="time" placeholder="Time" min="10:00" max="21:00" required />
      <label htmlFor="guests">Number of guests:</label>
      <input type="number" id="guests" placeholder="Number of guests" min="1" max="10" required />
      <label htmlFor="request">Special requests:</label>
      <textarea id="request" placeholder="Any special requests?" rows="4"></textarea>
      <button type="submit">Reserve</button>
      <p className="reservation-note">We will contact you to confirm your reservation.</p>
    </form>
  );
}

export default ReservationForm;

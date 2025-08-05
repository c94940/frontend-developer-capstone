import { useState } from 'react';
import './ReservationForm.css';

const ReservationForm = ({ availableTimes, dispatch }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [request, setRequest] = useState("");

  

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic for Submit goes here
    setName("");
    setEmail("");
    setPhone("");
    setDate("");
    setTime("");
    setGuests("");
    setRequest("");
  };


  // Alternate method of coding event handler for name change and would pass {handleNameChange} to onChange property in name input
  // const handleNameChange = (event) => {
  //   setName(event.target.value);
  // }


  return (
    <section className="reservation">
      <div className="reservation-container">
        <h3>Make a reservation</h3>
        <div className="reservation-form-container">
          <form className="reservation-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              placeholder="Phone"
              required
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              placeholder="Date"
              required
              value={date}
              onChange={(event) => {
                setDate(event.target.value);
                dispatch({ type: "UPDATE_TIMES", date: event.target.value });
              }}
            />
            <label htmlFor="time">Time:</label>
            <select
              id="time"
              value={time}
              onChange={(event) => setTime(event.target.value)}
            >
              <option value="">Select a time</option>
              {availableTimes.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            
            </select>
            <label htmlFor="guests">Number of guests:</label>
            <input
              type="number"
              id="guests"
              placeholder="Number of guests"
              min="1"
              max="10"
              required
              value={guests}
              onChange={(event) => setGuests(event.target.value)}
            />
            <label htmlFor="request">Special requests:</label>
            <textarea
              id="request"
              placeholder="Any special requests or occasions?"
              rows="4"
              value={request}
              onChange={(event) => setRequest(event.target.value)}
            ></textarea>
            <button type="submit">Reserve</button>
            <p className="reservation-note">We will contact you to confirm your reservation.</p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ReservationForm;

import { useState } from 'react';
import './ReservationForm.css';

const ReservationForm = ({ availableTimes, dispatch, submitForm }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [request, setRequest] = useState("");

  const todayStr = new Date().toISOString().split('T')[0];

  const isFormValid = () => {
    return (
      name.trim().length >= 2 &&
      /\S+@\S+\.\S+/.test(email) &&
      /^\d{10,}$/.test(phone) &&
      date &&
      time &&
      guests >= 1 && guests <= 10
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic for Submit goes here
    const formData = {
      name,
      email,
      phone,
      date,
      time,
      guests,
      request
    };
    submitForm(formData);
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
    <section className="reservation" aria-labelledby="reservation-heading">
      <div className="reservation-container">
        <h3 id="reservation-heading">Make a reservation</h3>
        <div className="reservation-form-container">
          <form className="reservation-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              required
              minLength={2}
              value={name}
              onChange={(event) => setName(event.target.value)}
              aria-invalid={name && name.trim().length < 2 ? "true" : "false"}
              aria-describedby={name && name.trim().length < 2 ? "name-error" : undefined}
            />
            {name && name.trim().length < 2 && (
              <span className="error" id="name-error" aria-live="polite">
                Name must be at least 2 characters.
              </span>
            )}
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              aria-invalid={email && !/\S+@\S+\.\S+/.test(email) ? "true" : "false"}
              aria-describedby={email && !/\S+@\S+\.\S+/.test(email) ? "email-error" : undefined}
            />
            {email && !/\S+@\S+\.\S+/.test(email) && (
              <span className="error" id="email-error" aria-live="polite">
                Please enter a valid email address.
              </span>
            )}
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              placeholder="Phone"
              required
              pattern="\d{10,}"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              aria-invalid={phone && !/^\d{10,}$/.test(phone) ? "true" : "false"}
              aria-describedby={phone && !/^\d{10,}$/.test(phone) ? "phone-error" : undefined}
            />
            {phone && !/^\d{10,}$/.test(phone) && (
              <span className="error" id="phone-error" aria-live="polite">
                Phone number must be at least 10 digits.
              </span>
            )}
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              placeholder="Date"
              required
              min={todayStr}
              value={date}
              onChange={(event) => {
                setDate(event.target.value);
                dispatch({ type: "UPDATE_TIMES", date: event.target.value });
              }}
              aria-invalid={date && date < todayStr ? "true" : "false"}
              aria-describedby={date && date < todayStr ? "date-error" : undefined}
            />
            {date && date < todayStr && (
              <span className="error" id="date-error" aria-live="polite">
                Date cannot be in the past.
              </span>
            )}
            <label htmlFor="time">Time:</label>
            <select
              id="time"
              required
              value={time}
              onChange={(event) => setTime(event.target.value)}
              aria-invalid={!time ? "true" : "false"}
              aria-describedby={!time ? "time-error" : undefined}
            >
              <option value="">Select a time</option>
              {availableTimes.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}

            </select>
            {!time && (
              <span className="error" id="time-error" aria-live="polite">
                Please select a time.
              </span>
            )}
            <label htmlFor="guests">Number of guests:</label>
            <input
              type="number"
              id="guests"
              placeholder="Number of guests"
              min={1}
              max={10}
              required
              value={guests}
              onChange={(event) => setGuests(event.target.value)}
              aria-invalid={guests && (guests < 1 || guests > 10) ? "true" : "false"}
              aria-describedby={guests && (guests < 1 || guests > 10) ? "guests-error" : undefined}
            />
            {guests && (guests < 1 || guests > 10) && (
              <span className="error" id="guests-error" aria-live="polite">
                Number of guests must be between 1 and 10.
              </span>
            )}
            <label htmlFor="request">Special requests:</label>
            <textarea
              id="request"
              placeholder="Any special requests or occasions?"
              rows="4"
              maxLength={200}
              value={request}
              onChange={(event) => setRequest(event.target.value)}
              aria-invalid={request && request.length > 200 ? "true" : "false"}
              aria-describedby={request && request.length > 200 ? "request-error" : undefined}
            ></textarea>
            {request && request.length > 200 && (
              <span className="error" id="request-error" aria-live="polite">
                Special requests must be 200 characters or less.
              </span>
            )}
            <button 
              type="submit" 
              disabled={!isFormValid()} 
              aria-label="Reserve a table"
            >
              Reserve
            </button>
            <p className="reservation-note">We will contact you to confirm your reservation.</p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ReservationForm;

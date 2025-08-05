import { useReducer, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { initializeTimes, updateTimes } from './timesReducer';
import { submitAPI } from './api';
import './App.css';
import HomePage from './components/HomePage';
import ReservationPage from './components/ReservationPage';
import ReservationConfirmation from './components/ReservationConfirmation';

function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes)
  const navigate = useNavigate();

  useEffect(() => {
    const today = new Date();
    dispatch({ type: "UPDATE_TIMES", date: today });
  }, []);

  const submitForm = (formData) => {
    const success = submitAPI(formData);
    if (success) {
      navigate('/confirmation');
    }
  };

  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/reservations"
          element={
            <ReservationPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/confirmation" element={<ReservationConfirmation />} />
      </Routes>
  );
}

export default function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}

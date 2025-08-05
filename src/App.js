import { useReducer, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { initializeTimes, updateTimes } from './timesReducer';
import { fetchAPI } from './api';
import './App.css';
import HomePage from './components/HomePage';
import ReservationPage from './components/ReservationPage';
import ReservationConfirmation from './components/ReservationConfirmation';

function App() {  
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes)
  
  useEffect(() => {
    const today = new Date();
    fetchAPI(today);
    dispatch({ type: "UPDATE_TIMES", date: today});
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reservations" element={<ReservationPage availableTimes={availableTimes} dispatch={dispatch} />} />
        <Route path="/confirmation" element={<ReservationConfirmation />} />
      </Routes>
    </Router>
  );
}

export default App;

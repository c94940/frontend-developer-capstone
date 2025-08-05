import { useReducer } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { initializeTimes, updateTimes } from './timesReducer';
import './App.css';
import HomePage from './components/HomePage';
import ReservationPage from './components/ReservationPage';

function App() {  
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes)
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reservations" element={<ReservationPage availableTimes={availableTimes} dispatch={dispatch} />} />
      </Routes>
    </Router>
  );
}

export default App;

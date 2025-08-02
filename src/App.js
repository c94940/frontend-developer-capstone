import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import ReservationPage from './components/ReservationPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reservations" element={<ReservationPage />} />
      </Routes>
    </Router>
  );
}

export default App;

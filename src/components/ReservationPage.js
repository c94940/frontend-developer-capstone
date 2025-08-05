import Header from './Header';
import ReservationForm from './ReservationForm';
import Footer from './Footer';

const BookingPage = ({ availableTimes, dispatch }) => {
    return(
        <>
            <Header />
            <ReservationForm availableTimes={availableTimes} dispatch={dispatch} />
            <Footer />
        </>
    );
}

export default BookingPage;
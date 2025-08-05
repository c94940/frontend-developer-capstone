import Header from './Header';
import ReservationForm from './ReservationForm';
import Footer from './Footer';

const ReservationPage = ({ availableTimes, dispatch }) => {
    return (
        <>
            <Header />
            <ReservationForm availableTimes={availableTimes} dispatch={dispatch} />
            <Footer />
        </>
    );
}

export default ReservationPage;
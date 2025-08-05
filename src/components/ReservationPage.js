import Header from './Header';
import ReservationForm from './ReservationForm';
import Footer from './Footer';

const ReservationPage = ({ availableTimes, dispatch, submitForm }) => {
    return (
        <>
            <Header />
            <ReservationForm
                availableTimes={availableTimes}
                dispatch={dispatch}
                submitForm={submitForm}
            />
            <Footer />
        </>
    );
}

export default ReservationPage;
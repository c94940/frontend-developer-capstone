import Header from './Header';
import Footer from './Footer';

const ReservationConfirmation = () => {
    return (
        <>
            <Header />
            <main>
                <section aria-labelledby="confirmation-heading">
                    <h1 id="confirmation-heading" style={{ textAlign: 'center', padding: '2rem' }}>
                        Thank you. Your reservation has been confirmed.
                    </h1>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default ReservationConfirmation;
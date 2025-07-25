import './Main.css';
import heroimage from '../../src/assets/restaurantfood.jpg';

function Main() {
    return (
        <main>
            <div className="hero">
                <div className="hero-flex-container">
                    <h1>Little Lemon</h1>
                    <h2>San Diego</h2>
                    <p>Welcome to Little Lemon, your gateway to the vibrant flavors of the Mediterranean! Experience a delightful culinary journey featuring fresh, wholesome ingredients inspired by the sun-kissed coasts of Greece, Italy, Spain, and beyond.</p>
                    <button>Make a reservation</button>
                </div>
                <div className="hero-image-container">
                    <img src={heroimage} alt="Server holding fresh food" />
                </div>
            </div>
            <div className="specials">
                <div className="specials-menu-container">
                    <h3>This week's specials</h3>
                    <button>View menu</button>
                </div>
                <div className="special-card-container">
                    <div className="special-card">
                        <p>Special Card</p>
                    </div>
                    <div className="special-card">
                        <p>Special Card</p>
                    </div>
                    <div className="special-card">
                        <p>Special Card</p>
                    </div>
                </div>
            </div>
            <div className="customer-reviews">
                <h3>Customer Reviews</h3>
                <div className="review-card-container">
                    <div className="customer-review-card">
                        <p>Customer Review Card</p>
                    </div>
                    <div className="customer-review-card">
                        <p>Customer Review Card</p>
                    </div>
                    <div className="customer-review-card">
                        <p>Customer Review Card</p>
                    </div>
                    <div className="customer-review-card">
                        <p>Customer Review Card</p>
                    </div>
                </div>
            </div>
            <div className="about">About</div>
        </main>
    );
}

export default Main;
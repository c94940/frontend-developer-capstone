import './Main.css';
import heroimage from '../../src/assets/restaurantfood.jpg';

function Main() {
    return (
        <main>
            <div className="hero">
                <div className="flex-container">
                    <h1>Little Lemon</h1>
                    <h2>San Diego</h2>
                    <p>Welcome to Little Lemon, your gateway to the vibrant flavors of the Mediterranean! Experience a delightful culinary journey featuring fresh, wholesome ingredients inspired by the sun-kissed coasts of Greece, Italy, Spain, and beyond.</p>
                    <button>Make a reservation</button>
                </div>
                <div className="flex-container">
                    <img src={heroimage} alt="Server holding fresh food" />
                </div>
            </div>
            <div className="specials">
                <h3>This week's specials</h3>
                <button>Online menu</button>
                <div className="special-cards">
                    <p>Special Card</p>
                    <p>Special Card</p>
                    <p>Special Card</p>
                </div>
            </div>
            <div className="customer-reviews">Customer Reviews</div>
            <div className="about">About</div>
        </main>
    );
}

export default Main;
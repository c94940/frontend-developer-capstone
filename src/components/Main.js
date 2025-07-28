import './Main.css';
import heroimage from '../assets/hero-image.jpg';
import greeksaladimage from '../assets/special-card-greek-salad.jpg';
import bruschettaimage from '../assets/special-card-bruschetta.jpg';
import souvlakiimage from '../assets/special-card-souvlaki.jpg';
import aboutimage1 from '../assets/about-image-1.jpg';

const specials = [
  {
    image: greeksaladimage,
    name: "Greek salad",
    price: "$9.99",
    description: "A classic Greek salad with fresh cucumbers, tomatoes, red onions, Kalamata olives, and feta cheese, dressed in olive oil and oregano for a bright, refreshing taste."
  },
  {
    image: bruschettaimage,
    name: "Bruschetta",
    price: "$7.99",
    description: "Toasted bread topped with fresh tomatoes, garlic, basil, and a drizzle of olive oil, delivering a simple and flavorful Italian appetizer."
  },
  {
    image: souvlakiimage,
    name: "Souvlaki",
    price: "$11.99",
    description: "Juicy skewers of marinated pork or chicken, grilled to perfection and served with a side of tangy tzatziki sauce for a classic Greek street food experience."
  }
];

const reviews = [
  {
    name: "John F.",
    rating: 5,
    text: "The Greek salad was bursting with freshness and the souvlaki grilled to perfection."
  },
  {
    name: "Mary S.",
    rating: 5,
    text: "The bruschetta delighted with its vibrant tomatoes and fragrant basil, perfectly balanced by a drizzle of olive oil."
  },
  {
    name: "Gerry H.",
    rating: 5,
    text: "The souvlaki was tender and juicy, with smoky grilled flavors perfectly complemented by the tangy tzatziki sauce."
  },
  {
    name: "Sam T.",
    rating: 5,
    text: "The shakshuka was rich and flavorful, with perfectly poached eggs nestled in a spicy, savory tomato sauce."
  }
];

function SpecialCard({ image, name, price, description }) {
  return (
    <div className="special-card">
      <div className="special-card-content">
        <div className="special-card-image">
          <img src={image} alt={name} />
        </div>
        <div className="special-card-text">
          <div className="special-card-title-price">
            <h5 className="dish-name">{name}</h5>
            <h5 className="dish-price">{price}</h5>
          </div>
          <div className="special-card-description">
            <p>{description}</p>
          </div>
        </div>
      </div>
      <div className="special-card-delivery-container">
        <div className="special-card-order-delivery">
          <h6>Order delivery 🛵</h6>
        </div>
      </div>
    </div>
  );
}

function ReviewCard({ name, rating, text }) {
  return (
    <div className="review-card">
      <div className="review-name-and-rating">
        <div className="review-name">
          <h6>{name}</h6>
        </div>
        <div className="review-rating">
          <h6>{'⭐️'.repeat(rating)}</h6>
        </div>
      </div>
      <p className="review-text">"{text}"</p>
    </div>
  );
}

function Main() {
  return (
    <main>
      <section className="hero">
        <div className="hero-flex-container">
          <h1>Little Lemon</h1>
          <h2>San Diego</h2>
          <p>Welcome to Little Lemon, your gateway to the vibrant flavors of the Mediterranean! Experience a delightful culinary journey featuring fresh, wholesome ingredients inspired by the sun-kissed coasts of Greece, Italy, Spain, and beyond.</p>
          <button>Make a reservation</button>
        </div>
        <div className="hero-image-container">
          <img src={heroimage} alt="Server holding fresh food" />
        </div>
      </section>

      <section className="specials">
        <div className="specials-menu-container">
          <h3>This week's specials</h3>
          <button>View menu</button>
        </div>
        <div className="special-card-container">
          {specials.map((item, idx) => (
            <SpecialCard key={item.name} {...item} />
          ))}
        </div>
      </section>

      <section className="customer-reviews">
        <h3>Customer Reviews</h3>
        <div className="review-card-container">
          {reviews.map((review, idx) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </div>
      </section>

      <section className="about">
        <div className="about-container">
          <div className="about-text-container">
            <h1>Little Lemon</h1>
            <h2>San Diego</h2>
            <p>Welcome to Little Lemon, your gateway to the vibrant flavors of the Mediterranean! Experience a delightful culinary journey featuring fresh, wholesome ingredients inspired by the sun-kissed coasts of Greece, Italy, Spain, and beyond. Our menu showcases a variety of traditional dishes such as grilled kebabs, savory hummus, fresh seafood, aromatic herbs, and crisp salads, all crafted with authentic recipes and a modern twist. Whether you're craving a light mezze platter or a hearty main course, our warm and inviting atmosphere is perfect for sharing great food and good company.</p>
          </div>
          <div className="about-image-container">
            <img src={aboutimage1} alt="Restaurant space" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
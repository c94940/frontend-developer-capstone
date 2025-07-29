import './Main.css';
import greeksaladimage from '../assets/special-card-greek-salad.jpg';
import bruschettaimage from '../assets/special-card-bruschetta.jpg';
import souvlakiimage from '../assets/special-card-souvlaki.jpg';
import Reservation from './Reservation';
import Hero from './Hero';
import Specials from './Specials';
import Reviews from './Reviews';
import About from './About';

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

function Main() {
  return (
    <main>
      <Hero className="hero" />

      <Specials className="specials" specials={specials} />

      <Reviews className="reviews" reviews={reviews} />

      <About className="about" />

      <Reservation className="reservation-form" />
    </main>
  );
}

export default Main;
import './Reviews.css';
import ReviewCard from './ReviewCard';

const Reviews = ({ reviews }) => {
    return (
        <section className="customer-reviews">
            <h3>Customer Reviews</h3>
            <div className="review-card-container">
                {reviews.map((review, idx) => (
                    <ReviewCard key={review.name} {...review} />
                ))}
            </div>
        </section>
    );
}

export default Reviews;
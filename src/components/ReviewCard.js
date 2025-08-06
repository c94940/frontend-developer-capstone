import './ReviewCard.css';

const ReviewCard = ({ name, rating, text }) => {
    return (
        <article className="review-card">
            <div className="review-name-and-rating">
                <div className="review-name">
                    <h6>{name}</h6>
                </div>
                <div className="review-rating" aria-label={`Rating: ${rating} out of 5 stars`}>
                    <h6>{'⭐️'.repeat(rating)}</h6>
                </div>
            </div>
            <p className="review-text">"{text}"</p>
        </article>
    );
}

export default ReviewCard;
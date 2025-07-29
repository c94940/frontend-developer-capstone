import './ReviewCard.css';

const ReviewCard = ({ name, rating, text }) => {
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

export default ReviewCard;
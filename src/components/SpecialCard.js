import './SpecialCard.css';

const SpecialCard = ({ image, name, price, description }) => {
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

export default SpecialCard;
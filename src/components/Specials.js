import './Specials.css';
import SpecialCard from './SpecialCard';

const Specials = ({ specials }) => {
    return (
        <section className="specials" aria-labelledby="specials-heading">
            <div className="specials-container">
                <div className="specials-menu-container">
                    <h3 id="specials-heading">This week's specials</h3>
                    <button aria-label="View full menu">View menu</button>
                </div>
                <div className="special-card-container">
                    {specials.map((item, idx) => (
                        <SpecialCard key={item.name} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Specials;
import './Specials.css';
import SpecialCard from './SpecialCard';

const Specials = ({ specials }) => {
    return (
        <section className="specials">
            <div className="specials-container">
                <div className="specials-menu-container">
                    <h3>This week's specials</h3>
                    <button>View menu</button>
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
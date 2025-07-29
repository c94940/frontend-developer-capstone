import './About.css';
import aboutimage1 from '../assets/about-image-1.jpg';

const About = () => {
    return (
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
    );
}

export default About;
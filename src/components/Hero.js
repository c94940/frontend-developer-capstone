import React from 'react';
import './Hero.css';
import heroimage from '../assets/hero-image.jpg';

const Hero = () => {
    return (
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
    );
}

export default Hero;
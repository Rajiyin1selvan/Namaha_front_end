import React from 'react';
import './Hero.css';
import handIcon from '../Assets/hand_icon.png';
import backgroundImage from '../Assets/your_background_image.jpg'; // Replace with your image path
import zodiacIcon from '../Assets/zodiac_icon-2.png'; // Replace with your zodiac image path

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <div className="hero-hand-icon">
          <img src={handIcon} alt="Hand Icon" />
        </div>
        <h1>Welcome to <span>NAMAHA</span> India's First Spiritual Platform</h1>
        <h2>Lokāḥ Samastāḥ Sukhino Bhavantu</h2>
        <p className='hero-meaning'>
          "May all beings everywhere be happy and free, and may the thoughts, words, and actions of my own life contribute in some way to that happiness and to that freedom for all."
        </p>
      </div>

      <div className="hero-right">
        <div className="hero-zodiac-icon">
          <img src={zodiacIcon} alt="Zodiac Icon" />
        </div>
      </div>

      <div
        className="hero-background"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />
    </div>
  );
};

export default Hero;

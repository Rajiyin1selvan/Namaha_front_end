import React, { useState } from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting form...');
    try {
      const response = await fetch('http://localhost:4000/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber }),
      });
      if (response.ok) {
        console.log('Subscription successful!');
        // Reset phone number input
        setPhoneNumber('');
        alert('Subscription successful!');
      } else {
        console.error('Failed to subscribe');
        alert('Failed to subscribe. Please try again.');
      }
    } catch (error) {
      console.error('Error subscribing:', error);
      alert('Error subscribing. Please try again.');
    }
  };

  return (
    <div className='newsletter'>
      <div className="vignette"></div>
      <h1>"Pave your path to Success with Astrology"</h1>
      <h1>Get Your Daily Horoscope in Your Whatsapp</h1>
      <p>Subscribe to our daily Whatsapp Updates</p>
      <form onSubmit={handleSubmit}>
        <input
          type="tel"
          className="Your Phone Number"
          placeholder="Your Phone Number"
          value={phoneNumber}
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSubmit}>Subscribe</button>
      </form>
    </div>
  );
};

export default NewsLetter;


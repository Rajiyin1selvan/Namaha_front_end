import React, { useState, useEffect } from 'react';
import './Testimonials.css';
import testi_logo from '../Assets/quote.png'
import user from '../Assets/user.png'
import down_quote from '../Assets/down_quote.png'

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        fetchTestimonials();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval); // Clean up the interval on component unmount
    }, [testimonials]);

    const fetchTestimonials = async () => {
        try {
            const response = await fetch('http://localhost:4000/testimonials');
            const data = await response.json();
            setTestimonials(data);
        } catch (error) {
            console.error('Error fetching testimonials', error);
        }
    };

    const handleButtonClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className='testimonials'>
            <h2>What our Customers Say</h2>
            <div className="user-img">
                <div className="user-img-logo">
                    <img src={user} alt="" />
                </div>
            </div>
            <div className='testimonials-container'>
                <div className='testimonial-slider' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial">
                            <div className="user">
                                <img src={testi_logo} alt="" />
                            </div>
                            <p>{testimonial.testimonial}</p>
                            <p className="name">{testimonial.name}</p>
                            <p className="title">{testimonial.title}</p>
                            <img src={down_quote} alt="" className='downquote' />
                        </div>
                    ))}
                </div>
            </div>
            <div className='nav-buttons'>
                {testimonials.map((_, index) => (
                    <div
                        key={index}
                        className={`nav-button ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => handleButtonClick(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;


import React from 'react';
import './Breadcrum.css';
import arrow_icon from '../Assets/v_arrow.png';

const Breadcrum = ({ product }) => {
    return (
        <div className='breadcrum'>
            Home <img src={arrow_icon} alt="" /> {product && product.category && (
                <>
                    {product.category} <img src={arrow_icon} alt="" /> {product.name}
                </>
            )}
        </div>
    );
}

export default Breadcrum;

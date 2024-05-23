import React, { useContext } from 'react';
import './Display.css';
import { ShopContext } from '../../Context/ShopContext';

const Display = ({ product }) => {
    const { addToCart } = useContext(ShopContext);

    // Check if product is undefined
    if (!product) {
        return null; // Render nothing if product is undefined
    }

    // Check if the product category is "blog"
    const isBlog = product.category === 'blogs';

    return (
        <div className='display'>
            <div className={`display-left ${isBlog ? 'blog-layout' : ''}`}>
                <div className="display-img">
                    <img className='display-main-img' src={product.image || ''} alt={product.name || 'Product Image'} />
                </div>
                <div className="display-right">
                    <h1>{product.name || 'Product Name'}</h1>
                </div>
            </div>
            {!isBlog && (
                <div className="display-right">
                    <div className="display-right-price-old">
                        ₹{product.old_price || 'Old Price'}
                    </div>
                    <div className="display-right-price-new">
                        ₹{product.new_price || 'New Price'}
                    </div>
                    <div className="display-right-description">
                        {product.description || 'Product Description'}
                    </div>
                    <button onClick={() => { addToCart(product.id) }}>Book</button>
                </div>
            )}
        </div>
    );
}

export default Display;


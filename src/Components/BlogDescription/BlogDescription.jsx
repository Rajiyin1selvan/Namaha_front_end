import React, { useEffect, useState } from 'react';
import './BlogDescription.css';

const BlogDescription = (props) => {
  const { product } = props;
  const [blogDescription, setBlogDescription] = useState('');

  useEffect(() => {
    const fetchBlogDescription = async () => {
      try {
        if (!product) return; // Exit early if product is null
        const response = await fetch(`http://localhost:4000/blog_description/${product.id}.txt`);
        if (!response.ok) {
          throw new Error('Failed to fetch blog description');
        }
        const text = await response.text();
        setBlogDescription(text);
      } catch (error) {
        console.error('Error Fetching:', error.message);
      }
    };

    fetchBlogDescription();
  }, [product]); // Add product to the dependency array

  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="description-nav-box"></div>
      </div>
      <div className="descriptionbox-description">
        {product && product.blog_description ? product.blog_description : 'Loading...'}
      </div>
    </div>
  );
};

export default BlogDescription;



import React from 'react';
import './index.css'; // Assuming you're using a CSS file for styling

// Props are destructured directly in the function parameter list for clarity
const CompLinkCard = ({ imageUrl, title, linkUrl }) => {
  return (
    // Use the `href` attribute to define the link destination
    <a href={linkUrl} className="card-link" rel="noopener noreferrer">
      <div className="card">
        {/* Image on top */}
        <img src={imageUrl} alt={title} className="card-image" />
        {/* Title at the bottom */}
        <div className="card-title">{title}</div>
      </div>
    </a>
  );
};

export { CompLinkCard };

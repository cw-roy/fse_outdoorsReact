import React from 'react';
import './Homepage.css'; // Import the CSS file for styling

function Homepage() {
  return (
    <div className="homepage-container">
      <h1 className="homepage-title">Enjoy the Outdoors!</h1>
      <p className="homepage-description">Welcome! Explore the great outdoors with us.</p>
      <div className="homepage-links">
        <a href="/national-parks" className="homepage-link">National Parks</a>
        <a href="/mountains" className="homepage-link">Mountains</a>
      </div>
    </div>
  );
}

export default Homepage;


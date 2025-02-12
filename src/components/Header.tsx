import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1>Henry Tan Setiawan</h1>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/henrytansetiawan" 
             target="_blank" 
             rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/htansetiawan" 
             target="_blank" 
             rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <img 
          src="/henrytan_profile.jpeg" 
          alt="Henry Tan Setiawan"
          className="profile-image"
        />
        <div className="header-text">
          <h1 className="name">Henry Tan Setiawan</h1>
          <div className="title">Amazon Rufus | Principal Engineer | Entrepreneur | PhD (CS) | MIT | Cambridge | ex-Google Brain | ex-Microsoft Research</div>
          <div className="contact-links">
            <a 
              href="https://www.linkedin.com/in/henry-tan" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <span className="separator">•</span>
            <a 
              href="https://github.com/htansetiawan" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

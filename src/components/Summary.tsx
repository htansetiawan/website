import React from 'react';

const Summary = () => {
  return (
    <section className="section">
      <h2 className="section-title">About Me</h2>
      <div className="summary-content">
        <div className="summary-text">
          <p className="lead-text">
            Principal Engineer at Amazon Rufus, driving innovation in Large Language Models and leading StoreFront Studio Innovation Lab.
          </p>
          <div className="expertise-areas">
            <div className="expertise-item">
              <h3>Engineering Leadership</h3>
              <p>Leading 30+ engineers and scientists in developing state-of-the-art AI solutions for Amazon's Rufus.</p>
            </div>
            <div className="expertise-item">
              <h3>Technical Excellence</h3>
              <p>PhD in Computer Science specializing in Data Mining, with extensive experience in Machine Learning, Search Engine and distributed systems.</p>
            </div>
            <div className="expertise-item">
              <h3>Innovation Impact</h3>
              <p>Track record of successful projects at Google Brain, YouTube, and Microsoft Research, driving significant business value and technical innovation.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Summary;

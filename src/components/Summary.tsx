import React from 'react';

const Summary = () => {
  return (
    <section className="section">
      <h2 className="section-title">Professional Summary</h2>
      <div className="summary-content">
        <p className="summary-headline">
          Principal Engineer at Amazon Rufus, driving innovation in Large Language Models and leading StoreFront Studio Innovation Lab.
        </p>
        
        <div className="summary-points">
          <div className="summary-group">
            <h3 className="summary-subtitle">Core Expertise</h3>
            <ul>
              <li>AI Infrastructure & Large Language Models</li>
              <li>Distributed Systems Architecture</li>
              <li>Machine Learning & Search Technologies</li>
              <li>Technical Leadership & Innovation</li>
            </ul>
          </div>

          <div className="summary-group">
            <h3 className="summary-subtitle">Leadership Experience</h3>
            <ul>
              <li>Leading Engineers and Scientists across Amazon's Rufus</li>
              <li>Driving technical strategy and architectural decisions</li>
              <li>Building and scaling high-performance engineering teams</li>
            </ul>
          </div>

          <div className="summary-group">
            <h3 className="summary-subtitle">Technical Background</h3>
            <ul>
              <li>PhD in Computer Science specializing in Data Mining</li>
              <li>15+ years of experience in Machine Learning and Distributed Systems</li>
              <li>Track record of successful projects at Google Brain, YouTube, and Microsoft Research</li>
              <li>Multiple patents and publications in AI and distributed systems</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Summary;

import React from 'react';

const Awards = () => {
  const awards = [
    {
      title: "Microsoft Gold Star Award",
      organization: "Microsoft",
      year: "2012",
      details: "Awarded for exceptional contributions to the Bing Core Index Platform project"
    },
    {
      title: "Best Paper Award",
      organization: "OSDI Conference",
      year: "2016",
      details: "Paper: 'Project Adam: Building an Efficient and Scalable Deep Learning Training System'"
    },
    {
      title: "Microsoft Engineering Excellence Award",
      organization: "Microsoft",
      year: "2008",
      details: "Recognized for improving Windows Live Messenger server availability to 99.9%"
    }
  ];

  return (
    <section className="section">
      <h2 className="section-title">Awards & Recognition</h2>
      {awards.map((award, index) => (
        <article key={index} className="award-item">
          <header className="award-header">
            <div className="award-main">
              <h3 className="award-title">{award.title}</h3>
              <div className="award-meta">
                <span className="award-org">{award.organization}</span>
                <span className="separator">•</span>
                <span className="award-year">{award.year}</span>
              </div>
            </div>
          </header>
          <p className="award-details">{award.details}</p>
        </article>
      ))}
    </section>
  );
};

export default Awards;

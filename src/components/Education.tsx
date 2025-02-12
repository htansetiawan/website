import React from 'react';

const Education = () => {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "University of Washington",
      location: "Seattle, WA",
      period: "2004 - 2006",
      details: [
        "Thesis: Distributed Computing Infrastructure for Training Large-Scale Neural Networks",
        "Focus: Distributed Systems, Machine Learning"
      ]
    },
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Washington",
      location: "Seattle, WA",
      period: "2000 - 2004",
      details: [
        "Focus: Algorithms, Data Structures, Systems Programming"
      ]
    }
  ];

  return (
    <section className="section">
      <h2 className="section-title">Education</h2>
      {education.map((edu, index) => (
        <article key={index} className="education-item">
          <header className="education-header">
            <div className="education-main">
              <h3 className="education-degree">{edu.degree}</h3>
              <div className="education-meta">
                <span className="education-school">{edu.school}</span>
                <span className="separator">•</span>
                <span className="education-location">{edu.location}</span>
              </div>
            </div>
            <div className="education-period">{edu.period}</div>
          </header>
          {edu.details && (
            <ul className="education-details">
              {edu.details.map((detail, detailIndex) => (
                <li key={detailIndex}>{detail}</li>
              ))}
            </ul>
          )}
        </article>
      ))}
    </section>
  );
};

export default Education;

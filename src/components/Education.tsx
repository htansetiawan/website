import React from 'react';

const Education = () => {
  const education = [
    {
      degree: "Executive Master of Business Administration",
      school: "Massachusetts Institute of Technology",
      location: "Cambridge, MA",
      period: "2024",
      details: []
    },
    {
      degree: "Master of Entrepreneurship",
      school: "Cambridge University",
      location: "UK",
      period: "2024",
      details: []
    },
    {
      degree: "PhD in Computer Science",
      school: "University of Technology Sydney",
      location: "NSW, Australia",
      period: "2008",
      details: []
    },
    {
      degree: "Bachelor of Computer System Engineering (Hons)",
      school: "La Trobe University",
      location: "Bundoora, VIC, Australia",
      period: "2002",
      details: []
    },
    {
      degree: "Bachelor of Computer Engineering",
      school: "Nanyang Technological University",
      location: "Singapore",
      period: "1998-2000",
      details: []
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
          {edu.details && edu.details.length > 0 && (
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

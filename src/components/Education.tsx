import React from 'react';

const Education = () => {
  const education = [
    {
      degree: "Executive Master of Business Administration",
      school: "MIT Sloan School of Management",
      location: "Cambridge, MA",
      year: "2024",
      focus: "Business Leadership & Innovation"
    },
    {
      degree: "Master of Entrepreneurship",
      school: "Cambridge University",
      location: "Cambridge, UK",
      year: "2024",
      focus: "Technology Entrepreneurship"
    },
    {
      degree: "PhD in Computer Science",
      school: "University of Technology Sydney",
      location: "Sydney, Australia",
      year: "2008",
      focus: "Data Mining & Machine Learning"
    },
    {
      degree: "Bachelor of Computer System Engineering",
      school: "La Trobe University",
      location: "Melbourne, Australia",
      year: "2002",
      focus: "Computer Systems & Networks",
      honors: "First Class Honours"
    }
  ];

  return (
    <section className="section">
      <h2 className="section-title">Education</h2>
      <div className="education-grid">
        {education.map((edu, index) => (
          <div key={index} className="education-card">
            <div className="education-content">
              <div className="education-header">
                <h3>{edu.degree}</h3>
                <span className="education-year">{edu.year}</span>
              </div>
              <div className="education-details">
                <div className="school-info">
                  <span className="school-name">{edu.school}</span>
                  <span className="school-location">{edu.location}</span>
                </div>
                <p className="education-focus">{edu.focus}</p>
                {edu.honors && <p className="education-honors">{edu.honors}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;

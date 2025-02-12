import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: "Amazon",
      role: "Principal Engineer (L7)",
      period: "2023 - Present",
      details: [
        "Leading AI Infrastructure, Tools and Frameworks that powers Amazon Rufus",
      ]
    },
    {
      company: "Google",
      role: "Technical Lead",
      period: "2016 - 2023",
      details: [
        "Led key projects within Google Cloud, YouTube, Technical Infrastructure, and Google Brain",
        "Led a high-visibility \"Code Red\" initiative for Google's LLM Embedding API",
        "Spearheaded the modeling framework for Document AI, resulting in Visual Element recognition",
        "Improved YouTube Ads modeling optimization, increasing revenue by +$115M YoY",
        "Led the initiative in Google Brain (TensorFlow Runtime) to open-source TPU kernel and runtime"
      ]
    },
    {
      company: "Microsoft Research, Redmond",
      role: "Principal Software Design Engineer",
      period: "2014 - 2016",
      details: [
        "Second engineer on a team building distributed computing infrastructure for large-scale neural network training"
      ]
    }
  ];

  return (
    <section className="section">
      <h2 className="section-title">Experience</h2>
      <div>
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-header">
              <h3 className="company-name">{exp.company}</h3>
              <span className="date">{exp.period}</span>
            </div>
            <h4 className="role">{exp.role}</h4>
            <ul className="details-list">
              {exp.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

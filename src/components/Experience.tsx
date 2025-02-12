import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: "CANOTIC INC (rebranded as super.ai)",
      location: "Bellevue, WA",
      role: "Founder/CTO/Investor",
      period: "2016 - Present",
      details: [
        "Co-founded an AI technology startup focusing on Data Labeling as a Service to help democratize AI technologies for companies and enterprises who do not have access and resources to apply AI and Machine Learning to their businesses",
        "Raised $1M from a top South East Asian VC, East Venture, and $5.3M from a Seattle-based PSL Venture and London-based Mosaic Venture",
        "Leading the R&D of the Human+Machine orchestration and programmatic workflow",
        "Took a sabbatical from 2019, due to a health reason"
      ]
    },
    {
      company: "Microsoft Research",
      location: "Redmond",
      role: "Principal Software Design Engineer",
      period: "2014 - 2016",
      details: [
        "Founding engineer of Project Adam, developing distributed computing infrastructure for large-scale distributed training"
      ]
    },
    {
      company: "BlueKai (Acquired by Oracle)",
      role: "Senior Software Engineer",
      period: "2013 - 2014",
      details: [
        "Led Taxonomy Technology team to improve and scale legacy classification process",
        "Delivered E2E 'auto classification system' for automated rules generation, deployment and serving",
        "Built technology on Search Engine stack applying k-NN technique using Apache SOLR"
      ]
    },
    {
      company: "Microsoft",
      location: "Redmond",
      role: "Senior Software Engineer - Windows Azure Storage",
      period: "2013",
      details: [
        "Optimized index management, traffic load balancing, and distribution",
        "Member of C++ committee ensuring best practices and code quality"
      ]
    },
    {
      company: "Microsoft",
      location: "Redmond",
      role: "Senior Software Engineer - Azure Machine Learning",
      period: "2012 - 2013",
      details: [
        "Core member of AzureML incubation team within SQL organization",
        "Developed web control execution flow editor using HTML5/jQuery/KnockoutJS/SVG"
      ]
    },
    {
      company: "Microsoft",
      location: "Redmond",
      role: "Senior Software Engineer - Bing Core Index Platform",
      period: "2008 - 2012",
      details: [
        "Led 'Maguro' project rewriting search engine index serving stack",
        "Increased document capacity 10-20x with significant cost reduction",
        "Contributed to BOND RPC library (C# version, now open-source)",
        "Led development of large-scale Index Distribution & Management System"
      ]
    },
    {
      company: "Microsoft",
      location: "Redmond",
      role: "Senior Software Engineer - Messenger Server",
      period: "2006 - 2008",
      details: [
        "Led manageability team adopting large-scale service monitoring",
        "Improved system availability to 99.9% using Autopilot infrastructure",
        "Enhanced monitoring automation & alerting systems"
      ]
    }
  ];

  return (
    <section className="section">
      <h2 className="section-title">Professional Experience</h2>
      {experiences.map((exp, index) => (
        <article key={index} className="experience-item">
          <header className="experience-header">
            <h3 className="experience-role">{exp.role}</h3>
            <div className="experience-meta">
              <span className="experience-company">{exp.company}</span>
              {exp.location && <span className="experience-location"> • {exp.location}</span>}
              <span className="experience-period"> • {exp.period}</span>
            </div>
          </header>
          <ul className="experience-details">
            {exp.details.map((detail, detailIndex) => (
              <li key={detailIndex}>{detail}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
};

export default Experience;

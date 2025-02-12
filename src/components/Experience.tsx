import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: "Amazon Rufus",
      role: "Principal Engineer (L7)",
      period: "2023 - Present",
      details: [
        "Leading AI Infrastructure, Tools and Frameworks that powers Amazon Rufus.",
        "Designed and developed Rufus RAG query execution compiler and runtime.",
        "Developed Rufus Python Framework for L1-system orchestrated Experiments."
      ]
    },
    {
      company: "Google",
      location: "Mountain View, CA",
      role: "Technical Lead",
      period: "2016 - 2023",
      details: [
        "Leading key projects, research and technologies within Google Cloud, Youtube, Technical Infrastructure and Google Brain in areas of Ads, Cloud Service & Infrastructure, Storage and Machine Learning",
        "Led small team of senior engineers developing Embedding API of Google LLM from ground up as part of high visibility 'code red' LLM initiative under VP of Engineering OKR",
        "Led Modeling Framework of Document AI with Google Next '22 announcement of Visual Element (checkboxes, signature, barcode, forms) and LLM infrastructure of Google Cloud Document AI platform",
        "Improved Youtube Ads modeling optimization with +$115M YoY revenue, 0.1% pCTR increase",
        "Led initiative in Google Brain (Tensorflow Runtime) open-sourcing TPU kernel and runtime, and led cross Google Research and Search on optimizing NLU model for Dialogue system for Google Assistant",
        "Incubated first of its kind Google Cloud ML Cloud API - Cloud Video Intelligence API using Deep Learning for analyzing video contents at scale"
      ]
    },
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
            <div className="experience-main">
              <h3 className="experience-role">{exp.role}</h3>
              <div className="experience-meta">
                <span className="experience-company">{exp.company}</span>
                {exp.location && <span className="experience-location"> • {exp.location}</span>}
                <span className="experience-period"> • {exp.period}</span>
              </div>
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

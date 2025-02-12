import React from 'react';

const Awards = () => {
  const awards = [
    {
      title: "Australian Computer Society (ACS) Student Award",
      organization: "Australian Computer Society",
      year: "2003"
    },
    {
      title: "Most Outstanding Honours Student in Computer Science",
      organization: "La Trobe University",
      year: "2003"
    },
    {
      title: "Best 3rd Year Student in Computer System Engineering",
      organization: "La Trobe University",
      year: "2002"
    },
    {
      title: "Dean's Honours List",
      organization: "Faculty of Science, Technology and Engineering, La Trobe University",
      year: "2001-2003"
    },
    {
      title: "Golden Key Honours Society Award",
      organization: "Golden Key International Honour Society",
      year: "2001"
    }
  ];

  return (
    <section className="section">
      <h2 className="section-title">Awards & Achievements</h2>
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
        </article>
      ))}
    </section>
  );
};

export default Awards;

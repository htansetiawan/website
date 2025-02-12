import React from 'react';

const Awards = () => {
  const awards = [
    {
      year: "2003",
      title: "Australian Computer Society (ACS) Student Award"
    },
    {
      year: "2003",
      title: "Most Outstanding Honours Student in Computer Science at La Trobe University"
    },
    {
      year: "2002",
      title: "Best 3rd Year Student in Computer System Engineering at La Trobe University"
    },
    {
      year: "2001-2003",
      title: "Dean's Honours List, Faculty of Science, Technology, and Engineering, La Trobe University"
    },
    {
      year: "2001",
      title: "Golden Key Honours Society Award"
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-primary">Awards & Achievements</h2>
      <div className="space-y-4">
        {awards.map((award, index) => (
          <div key={index} className="flex gap-4 items-baseline p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors">
            <span className="text-accent font-semibold whitespace-nowrap">{award.year}</span>
            <span className="text-gray-700">{award.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Awards;

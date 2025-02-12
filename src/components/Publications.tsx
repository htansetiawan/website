import React from 'react';

const Publications = () => {
  const theses = [
    {
      title: "Mining of Data with Complex Structures",
      type: "PhD Thesis",
      institution: "University of Technology Sydney",
      year: "2008",
      url: "https://opus.lib.uts.edu.au/handle/10453/37381",
      description: "Research on tree-structured data mining algorithms and techniques"
    },
    {
      title: "Computer System Engineering Honours Thesis",
      type: "Honours Thesis",
      institution: "La Trobe University",
      year: "2002",
      url: "https://app.box.com/s/bvx2cashpu587sfx6hl5",
      description: "First Class Honours research work in Computer Systems Engineering"
    }
  ];

  const book = {
    title: "Mining of Data with Complex Structures",
    series: "Studies in Computational Intelligence, Vol. 333",
    date: "February 2011",
    authors: ["Fedja Hadzic", "Henry Tan", "Tharam S. Dillon"],
    description: "The primary audience is 3rd year, 4th year undergraduate students, Masters and PhD students and academics. The book can be used for both teaching and research. The secondary audiences are practitioners in industry, business, commerce, government and consortiums, alliances and partnerships to learn how to introduce and efficiently make use of the techniques for mining of data with complex structures into their applications. The scope of the book is both theoretical and practical and as such it will reach a broad market both within academia and industry. In addition, its subject matter is a rapidly emerging field that is critical for efficient analysis of knowledge stored in various domains."
  };

  const publications = [
    {
      title: "Maguro, a system for indexing and searching over very large text collections",
      authors: ["Risvik, KM", "Chilimbi, T", "Tan, H", "Anderson, C", "Kalyanaraman, K"],
      venue: "Proceeding of the 6th International Conference on Web Search and Data Mining (WSDM 2013)",
      location: "Rome",
      date: "Feb 4-8, 2013",
      type: "conference"
    },
    {
      title: "X3-Miner: Mining patterns from XML database",
      authors: ["Tan, H", "Dillon, TS", "Feng, L", "Chang, E", "Hadzic, F"],
      venue: "Proceedings of the 6th International Conference on Data Mining (Data Mining'05)",
      location: "Skiathos, Greece",
      publisher: "WIT Press",
      pages: "287-297",
      date: "2005",
      type: "conference"
    },
    {
      title: "MB3-Miner: Mining eMBedded subTREEs using tree model guided candidate generation",
      authors: ["Tan, H", "Dillon, TS", "Hadzic, F", "Feng, L", "Chang, E"],
      venue: "Proceedings of the 1st International Workshop on Mining Complex Data (MCD'05)",
      location: "Houston, TX, USA",
      pages: "103-110",
      date: "2005",
      type: "workshop"
    },
    {
      title: "IMB3-Miner: Mining induced/embedded subtrees by constraining the level of embedding",
      authors: ["Tan, H", "Dillon, TS", "Hadzic, F", "Chang, E", "Feng, L"],
      venue: "Proceedings of the 10th Pacific-Asia Conference on Knowledge Discovery and Data Mining (PAKDD'06)",
      location: "Singapore",
      pages: "450-461",
      date: "2006",
      type: "conference"
    },
    {
      title: "Razor: Distance constrained mining of embedded subtrees",
      authors: ["Tan, H", "Dillon, TS", "Hadzic, F"],
      venue: "Proceedings of the International Conference on Data Mining (ICDM'06)",
      location: "Hong Kong",
      pages: "8-13",
      date: "2006",
      type: "conference"
    },
    {
      title: "Tree model guided candidate generation for mining frequent subtrees from XML",
      authors: ["Tan, H", "Dillon, TS", "Hadzic, F", "Feng, L", "Chang, E"],
      venue: "Transactions on Knowledge Discovery from Data (TKDD)",
      type: "journal",
      date: "2007"
    },
    {
      title: "State of the art of data mining of tree structured information",
      authors: ["Tan, H", "Hadzic, F", "Dillon, TS", "Chang, E"],
      venue: "Computer System Science and Engineering",
      volume: "23",
      number: "4",
      date: "July 2008",
      type: "journal"
    },
    {
      title: "SEQUEST: Mining frequent subsequences using DMA strips",
      authors: ["Tan, H", "Dillon, TS", "Hadzic, F", "Chang, E"],
      venue: "Proceedings of the 7th International Conference on Data Mining and Information Engineering (Data Mining'06)",
      location: "Prague, Czech Republic",
      publisher: "WIT Press",
      pages: "315-328",
      date: "2006",
      type: "conference"
    },
    {
      title: "Mining substructures in protein data",
      authors: ["Hadzic, F", "Dillon, TS", "Sidhu, AS", "Chang, E", "Tan, H"],
      venue: "Proceedings of the 6th International Conference on Data Mining Workshop (ICDMW'06)",
      location: "Hong Kong",
      pages: "213-217",
      date: "2006",
      type: "workshop"
    },
    {
      title: "UNI3 – efficient algorithm for mining unordered induced subtrees using TMG candidate generation",
      authors: ["Hadzic, F", "Tan, H", "Dillon, TS"],
      venue: "Proceedings of the Computational Intelligence and Data Mining (CIDM'07)",
      location: "Hawaii, USA",
      pages: "568-575",
      date: "2007",
      type: "conference"
    }
  ];

  return (
    <section className="section">
      <h2 className="section-title">Publications</h2>

      <div className="theses-section">
        <h3 className="subsection-title">Academic Research</h3>
        {theses.map((thesis, index) => (
          <article key={index} className="thesis">
            <h4 className="thesis-title">{thesis.title}</h4>
            <div className="thesis-meta">
              {thesis.type} • {thesis.institution} • {thesis.year}
            </div>
            <p>{thesis.description}</p>
            <a href={thesis.url} 
               target="_blank" 
               rel="noopener noreferrer" 
               className="thesis-link">
              View Thesis →
            </a>
          </article>
        ))}
      </div>

      <div className="book-section">
        <h3 className="subsection-title">Book</h3>
        <article className="book">
          <h4 className="book-title">{book.title}</h4>
          <div className="book-meta">
            {book.series} • {book.date}
          </div>
          <p className="book-authors">{book.authors.join(", ")}</p>
          <p className="book-description">{book.description}</p>
        </article>
      </div>

      <div className="publications-section">
        <h3 className="subsection-title">Selected Publications</h3>
        {publications.map((pub, index) => (
          <article key={index} className="publication">
            <h4 className="publication-title">{pub.title}</h4>
            <p className="publication-authors">{pub.authors.join(", ")}</p>
            <div className="publication-venue">
              {pub.venue}
              {pub.location && ` • ${pub.location}`}
              {pub.pages && ` • pp. ${pub.pages}`}
              {pub.volume && pub.number && ` • Vol. ${pub.volume}, No. ${pub.number}`}
            </div>
            <div className="publication-year">{pub.date}</div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Publications;

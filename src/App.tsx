import React from 'react';
import Header from './components/Header';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Education from './components/Education';
import Awards from './components/Awards';
import Publications from './components/Publications';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Summary />
        <Experience />
        <Education />
        <Awards />
        <Publications />
      </main>
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Henry Tan Setiawan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;

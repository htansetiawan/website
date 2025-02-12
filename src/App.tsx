import React from 'react';
import Header from './components/Header';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Education from './components/Education';
import Awards from './components/Awards';

function App() {
  return (
    <div>
      <Header />
      <main className="container">
        <Summary />
        <Experience />
        <Education />
        <Awards />
      </main>
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Henry Tan Setiawan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import Header from './components/Header';
import AboutMe from './sections/AboutMe';
import Portfolio from './sections/Portfolio';
import Contact from './sections/Contact';
import Resume from './sections/Resume';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('AboutMe');

  const renderSection = () => {
    switch (activeSection) {
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <div>
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>{renderSection()}</main>
      <Footer />
    </div>
  );
};

export default App;

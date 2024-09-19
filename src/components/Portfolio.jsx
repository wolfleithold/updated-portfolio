import React from 'react';
import '../App.css';

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio-items">
        <div className="portfolio-item">
          <h3>Project 1</h3>
          <a href="https://live-project-1.com">Live Demo</a> | <a href="https://github.com/repo1">GitHub</a>
        </div>
        {/* Repeat for other projects */}
      </div>
    </section>
  );
};

export default Portfolio;

import React from 'react';
import '../App.css';

const Resume = () => {
  return (
    <section className="resume">
      <h2>Resume</h2>
      <a href="/path-to-resume.pdf" download>Download Resume</a>
      <h3>Proficiencies</h3>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>CSS</li>
        {/* Add other proficiencies */}
      </ul>
    </section>
  );
};

export default Resume;

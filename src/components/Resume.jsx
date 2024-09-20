import React from 'react';
import '../App.css';
import resume from '../assets/Wolfgang_Leithold_Resume.pdf';

const Resume = () => {
  return (
    <section className="resume">
      <h2>My Resume</h2>
      <embed src={resume} width="50%" height="500px" type="application/pdf" />
      <h3>Proficiencies</h3>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>CSS</li>
        <li>HTML</li>
      </ul>
    </section>
  );
};

export default Resume;

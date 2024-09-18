import React from 'react';
import './Header.css';

const Header = ({ activeSection, setActiveSection }) => {
  return (
    <header>
      <h1>Developer's Name</h1>
      <nav>
        <ul>
          <li
            className={activeSection === 'AboutMe' ? 'active' : ''}
            onClick={() => setActiveSection('AboutMe')}
          >
            About Me
          </li>
          <li
            className={activeSection === 'Portfolio' ? 'active' : ''}
            onClick={() => setActiveSection('Portfolio')}
          >
            Portfolio
          </li>
          <li
            className={activeSection === 'Contact' ? 'active' : ''}
            onClick={() => setActiveSection('Contact')}
          >
            Contact
          </li>
          <li
            className={activeSection === 'Resume' ? 'active' : ''}
            onClick={() => setActiveSection('Resume')}
          >
            Resume
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

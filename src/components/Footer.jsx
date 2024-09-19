import React from 'react';
import '../styles/footer.css';
import githubLogo from '../assets/github-logo.svg';
import linkedinLogo from '../assets/linkedin-logo.svg';
import stackoverflowLogo from '../assets/stackoverflow-logo.svg';

const Footer = () => {
  return (
    <footer>
      <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
        <img src={githubLogo} alt="GitHub" className="footer-icon" />
      </a>
      <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
        <img src={linkedinLogo} alt="LinkedIn" className="footer-icon" />
      </a>
      <a href="https://stackoverflow.com/users/your-profile" target="_blank" rel="noopener noreferrer">
        <img src={stackoverflowLogo} alt="Stack Overflow" className="footer-icon" />
      </a>
    </footer>
  );
};

export default Footer;

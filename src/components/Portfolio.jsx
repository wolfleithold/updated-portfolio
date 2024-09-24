import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap if not already done
import '../styles/portfolio.css'; // Custom styles
import githubLogo from '../assets/github-logo.svg';
import weatherApp from '../assets/weather-app.png';
import bonAppetit from '../assets/bon-appetit.png';
import readmeGenerator from '../assets/README-generator.png';
import payrollTracker from '../assets/payroll-tracker.png';
import fishGame from '../assets/fish-game.png';
import rockPaperScissors from '../assets/rock-paper-scissors.png';

const Portfolio = () => {
  return (
    <section className="container mt-5">
      <h2 className="mb-4">Portfolio</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4 portfolio-card">
            <img src={weatherApp} className="card-img-top portfolio-img" alt="Weather App" />
            <div className="card-body portfolio-overlay">
              <a href="https://wolfleithold.github.io/a-weather-app/" className="btn btn-primary portfolio-btn">
                Weather Dashboard
              </a>
              <a href="https://github.com/wolfleithold/a-weather-app" className="btn btn-secondary portfolio-btn">
                <img src={githubLogo} alt="GitHub" className="portfolio-icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 portfolio-card">
            <img src={bonAppetit} className="card-img-top portfolio-img" alt="Bon Appetit" />
            <div className="card-body portfolio-overlay">
              <a href="https://wolfleithold.github.io/bon-appetit-food-cocktail-recipe-search-application/" className="btn btn-primary portfolio-btn">
                Bon Appétit
              </a>
              <a href="https://github.com/wolfleithold/bon-appetit-food-cocktail-recipe-search-application" className="btn btn-secondary portfolio-btn">
                <img src={githubLogo} alt="GitHub" className="portfolio-icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 portfolio-card">
            <img src={readmeGenerator} className="card-img-top portfolio-img" alt="Weather App" />
            <div className="card-body portfolio-overlay">

               <h1>README Generator</h1> 
    
              <a href="https://github.com/wolfleithold/README_generator" className="btn btn-secondary portfolio-btn">
                <img src={githubLogo} alt="GitHub" className="portfolio-icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 portfolio-card">
            <img src={payrollTracker} className="card-img-top portfolio-img" alt="Weather App" />
            <div className="card-body portfolio-overlay">
              <a href="https://wolfleithold.github.io/employee-payroll-tracker/" className="btn btn-primary portfolio-btn">
                Payroll Tracker
              </a>
              <a href="https://github.com/wolfleithold/employee-payroll-tracker" className="btn btn-secondary portfolio-btn">
                <img src={githubLogo} alt="GitHub" className="portfolio-icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 portfolio-card">
            <img src={fishGame} className="card-img-top portfolio-img" alt="Weather App" />
            <div className="card-body portfolio-overlay">
              <a href="https://drive.google.com/file/d/1mw6wEyN9wOpkx9tHe7uHPfrxxlGYtg67/view" className="btn btn-primary portfolio-btn">
                Fish Game in C
              </a>
              <a href="https://github.com/wolfleithold/gameboy-in-c" className="btn btn-secondary portfolio-btn">
                <img src={githubLogo} alt="GitHub" className="portfolio-icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 portfolio-card">
            <img src={rockPaperScissors} className="card-img-top portfolio-img" alt="Weather App" />
            <div className="card-body portfolio-overlay">
              <a href="https://wolfleithold.github.io/rock-paper-scissors/" className="btn btn-primary portfolio-btn">
                Rock Paper Scissors
              </a>
              <a href="https://github.com/wolfleithold/rock-paper-scissors" className="btn btn-secondary portfolio-btn">
                <img src={githubLogo} alt="GitHub" className="portfolio-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

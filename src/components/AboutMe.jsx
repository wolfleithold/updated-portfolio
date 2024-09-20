import React from 'react';
import '../styles/contact.css';
import photoOfMe from '../assets/photo-of-me.png';

const AboutMe = () => {
  return (
    <section className="about-me">
        <h2>About Me</h2>
      <img src={photoOfMe} alt="Developer" />
      <p>Hello! I'm Wolfgang Leithold, a 25 year old who absolutely loves vintage tech. Things like floppy disks, the Atari 800, CRT televisions, and 
        basically anything else from that era.
        I grew up on hand-me-downs, and that included my game consoles, and other tech gadgets. I was always 10+ years behind on everything gaming, and honestly 
        I enjoyed my Nintendo 64 more than my friends Xbox 360. My interest in coding and software development was always in the back of my mind, but for a long time, I thought 
        I had missed the window to learn.</p>
        <p>
        I went to college and earned a BA in History, but eventually, I realized it wasn’t the path for me. 
        After bouncing between part-time jobs, I became a full-time low-voltage technician at a friend’s company. 
        I stayed there for over two years, gaining insights into modern tech, but it never quite felt like the right fit.
        That’s when I decided to dive into software development through a bootcamp. It taught me everything I needed to know to 
        break into the industry, and now I’m eager to keep learning. I don’t know exactly what I want to specialize in yet, but I do know that 
        I want to create applications and maybe even video games that others will enjoy—especially ones that evoke that same retro vibe I grew up loving. </p>
    </section>
  );
};

export default AboutMe;

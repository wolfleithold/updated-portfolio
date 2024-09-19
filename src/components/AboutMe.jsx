import React from 'react';
import '../styles/contact.css';
import photoOfMe from '../assets/photo-of-me.png';

const AboutMe = () => {
  return (
    <section className="about-me">
        <h2>About Me</h2>
      <img src={photoOfMe} alt="Developer" />
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
         Lorem ipsum dolor sit amet consectetur adipisicing elit. 
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
         Distinctio, obcaecati molestiae dolores hic soluta nobis voluptate dolorem impedit consectetur quos? 
         Animi quae quod molestiae quasi optio temporibus non a ex. 
         Ducimus unde repudiandae delectus, maiores, animi quo, vel hic at enim autem mollitia est officia corporis
          eos repellendus facilis eius molestias quae.
          Tenetur rerum tempora, iusto dolorem, facere tempore praesentium sint voluptas consequuntur iste corrupti facilis at. 
          Minima eveniet corrupti iusto illum esse ea? 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Optio, dignissimos alias tempora voluptate mollitia at incidunt aliquam voluptates fugiat cumque magnam
           corporis placeat itaque laboriosam quas expedita ipsa fugit architecto.</p>
    </section>
  );
};

export default AboutMe;

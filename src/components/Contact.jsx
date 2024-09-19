import React, { useState } from 'react';
import '../App.css';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleBlur = (e) => {
    if (!formState[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: `${e.target.name} is required` });
    } else if (e.target.name === 'email' && !validateEmail(formState.email)) {
      setErrors({ ...errors, email: 'Invalid email address' });
    } else {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <form className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formState.name}
          onChange={handleInputChange}
          onBlur={handleBlur}
        />
        {errors.name && <span>{errors.name}</span>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formState.email}
          onChange={handleInputChange}
          onBlur={handleBlur}
        />
        {errors.email && <span>{errors.email}</span>}

        <textarea
          name="message"
          placeholder="Message"
          value={formState.message}
          onChange={handleInputChange}
          onBlur={handleBlur}
        />
        {errors.message && <span>{errors.message}</span>}

        <input type="submit" value="Send" />
      </form>
    </section>
  );
};

export default Contact;

import React, { useState } from 'react';
import '../styles/contact.css';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  // email regex
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formState.name) {
      newErrors.name = 'Name is required';
    }

    if (!formState.email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formState.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formState.message) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);

    // If there are no errors, handle successful submission
    if (Object.keys(newErrors).length === 0) {
      // Here you would handle the actual form submission logic (sending data to a server)
      setSubmitSuccess(true); // For now, let's just simulate success
    }
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>

      {submitSuccess ? (
        <p>Thank you! Your message has been sent.</p>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formState.name}
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
          {errors.name && <span className="error">{errors.name}</span>}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formState.email}
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
          {errors.email && <span className="error">{errors.email}</span>}

          <textarea
            name="message"
            placeholder="Message"
            value={formState.message}
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
          {errors.message && <span className="error">{errors.message}</span>}

          <input type="submit" value="Send" />
        </form>
      )}
    </section>
  );
};

export default Contact;

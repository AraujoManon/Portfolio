import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const isActive = useSelector((state) => state.button.isActive);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:araujo.manon@laposte.net?subject=Contact Form Submission&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    setFormData({ name: '', email: '', message: '' });
    setStatus('Message envoyé avec succès !');
    
    setTimeout(() => setStatus(''), 3000);
  };

  return (
    <footer className={`contact-form-container ${isActive ? 'is-active' : ''}`}>
      <h2 id="contact" className={isActive ? 'is-active' : ''}>Contactez-moi</h2>
      <form  onSubmit={handleSubmit} className={`contact-form ${isActive ? 'is-active' : ''}`}>
        <label htmlFor="name">Nom :</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Votre nom"
          required
          autoComplete="name"  
          className={isActive ? 'is-active' : ''}
        />

        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Votre email"
          required
          autoComplete="email"  
          className={isActive ? 'is-active' : ''}
        />

        <label htmlFor="message">Message :</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Votre message"
          required
          autoComplete="off"  
          className={isActive ? 'is-active' : ''}
        ></textarea>

        <button type="submit" className={`submit-button ${isActive ? 'is-active' : ''}`}>Envoyer</button>
      </form>

      <div className={`contact-info ${isActive ? 'is-active' : ''}`}>
        <p>Contactez-moi également par téléphone : <a href="tel:+33634261362">06 34 26 13 62</a></p>
      </div>

      {status && <div className={`status-message ${isActive ? 'is-active' : ''}`}>{status}</div>}
    </footer>
  );
};

export default Contact;

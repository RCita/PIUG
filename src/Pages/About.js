// src/components/About.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './About.css'; // Import your CSS file
import NavBar from "../Components/NavigationBar"
import ScrollArrows from "../Components/ScrollArrows";

const About = () => {
  const [formData, setFormData] = useState({
    name: '',
    email:'',
    comment: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the email using Email.js
    emailjs
      .send('service_kwbg8ws', 'template_qfa7rnj', formData, 'KVqR3MUqq75iAwgyX')
      .then((response) => {
        console.log('Email sent successfully:', response);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
      	
    // Clear the form fields after submission
    setFormData({
      name: '',
      email:'',
      comment: '',
    });
  };

  return (
      
      <div >
      <NavBar/>
      <ScrollArrows/>
    
        <p className="styled-paragraph">
          Pentru comenzi va rugam sa completati formularul de mai jos si sa specificati modelul de care sunteti interesat
        </p>
      <form onSubmit={handleSubmit} className="about-form">
        <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        
        <br />
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Comment:
          <textarea
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

        
      <div className="video-container">
          <iframe
            width="560" // Set the width as needed
            height="315" // Set the height as needed
            src="https://www.youtube.com/embed/5A8lEZbDQZg"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
    </div>
    

  );
};

export default About;

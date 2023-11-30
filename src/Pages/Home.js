// Home.js
import React, { useState, useEffect } from 'react';
import NavBar from "../Components/NavigationBar";
import image1 from './Images/image1.jpg';
import image2 from './Images/image2.jpg';
import image3 from './Images/image3.jpg';
import image4 from './Images/image4.jpg';
import image5 from './Images/image5.jpg';
import ScrollArrows from "../Components/ScrollArrows";
import './Home.css';

const images = [image1, image2, image3, image4, image5];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollOpacity, setScrollOpacity] = useState(0);
  const [showParagraph, setShowParagraph] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const opacity = Math.min(scrollY / (windowHeight / 2), 1);
      setScrollOpacity(opacity);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowParagraph(true);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div >
      <NavBar />
      <h1>SOFALEX</h1>

      <div className="slideshow-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={image} alt={`Image ${index + 1}`} />
            {showParagraph && (
              <p>
               Bine ai venit pe site-ul nostru dedicat confortului și eleganței în amenajarea casei tale! Suntem pasionați să îți oferim o experiență unică în lumea mobilei, iar canapelele noastre reprezintă expresia perfectă a luxului și funcționalității. Fie că îți dorești un colț de relaxare intim sau un spațiu generos pentru întâlniri cu cei dragi, colecția noastră cuprinzătoare de canapele este creată pentru a satisface cele mai exigente gusturi și nevoi. Cu designuri moderne, materiale de înaltă calitate și atenție sporită la detalii, fiecare canapea pe care o găsești aici este gândită pentru a aduce un plus de rafinament și confort în casa ta. Descoperă colecția noastră și transformă-ți spațiul într-un sanctuar al relaxării și stilului!






              </p>
            )}
          </div>
        ))}
      </div>

      <ScrollArrows />
    </div>
  );
};

export default Home;

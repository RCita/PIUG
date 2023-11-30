// Catalog.js
import React, { useEffect, useRef } from 'react';
import NavBar from "../Components/NavigationBar";
import ScrollArrows from "../Components/ScrollArrows";
import './Catalog.css';

const images2 = [
  { url: './Images/image1.jpg', text: 'Coltar ENVY' },
  { url: './Images/image2.jpg', text: 'Coltar BURROW' },
  { url: './Images/image3.jpg', text: 'Coltar TAVIO' },
  { url: './Images/image4.jpg', text: 'Coltar CECILIA' },
  { url: './Images/image5.jpg', text: 'Coltar CADENCE' },
  { url: './Images/image6.jpg', text: 'Coltar LOTTA' },
  { url: './Images/image7.jpg', text: 'Coltar SKIP' },
  { url: './Images/image8.jpg', text: 'Coltar DRESDA' },
  { url: './Images/image9.jpg', text: 'Coltar NADINE' },
  { url: './Images/image10.jpg', text: 'Coltar BENNET' },
];
function Catalog() {

  const searchInputRef = useRef(null);

  useEffect(() => {
    const handleSearch = (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        const searchTerm = searchInputRef.current.value.toLowerCase();
        if (searchTerm.trim() === '') return;

        const foundElement = Array.from(document.querySelectorAll('.catalog-item p'))
          .find((element) => element.textContent.toLowerCase().includes(searchTerm));

        if (foundElement) {
          foundElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    const searchInput = searchInputRef.current;
    searchInput.addEventListener('keydown', handleSearch);

    return () => {
      searchInput.removeEventListener('keydown', handleSearch);
    };
  }, []);

  return (
    <div className="App">
      <NavBar />
      <ScrollArrows />
      
      <form className="search-form">
        <input
          type="search"
          placeholder="Search"
          ref={searchInputRef}
          aria-label="Search"
          className="search-input"
        />
      </form>
      <div className="catalog-container">
        {images2.map((image, index) => (
          <div className="catalog-item" key={index}>
            <img src={image.url} alt={image.text} className="catalog-image" />
            <p>{image.text}</p>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default Catalog;

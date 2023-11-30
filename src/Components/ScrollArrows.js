// src/components/ScrollArrows.js
import React, { useState, useEffect } from 'react';
import './ScrollArrows.css';

const ScrollArrows = () => {
  const [showTopArrow, setShowTopArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setShowTopArrow(scrolled > 300); // Show top arrow after scrolling down 300 pixels
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`scroll-arrows ${showTopArrow ? 'show' : ''}`}>
      <div className="scroll-arrow" onClick={scrollToTop}>
        ↑
      </div>
      <div className="scroll-arrow" onClick={scrollToBottom}>
        ↓
      </div>
    </div>
  );
};

export default ScrollArrows;

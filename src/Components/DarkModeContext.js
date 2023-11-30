// DarkModeContext.js
import React, { createContext, useContext, useState } from 'react';

// Create a context
const DarkModeContext = createContext();

// Create a provider component
export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// Create a hook to use the dark mode context
export const useDarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
  
    const toggleDarkMode = () => {
      setIsDarkMode((prevMode) => !prevMode);
};
return { isDarkMode, toggleDarkMode };  // Make sure to return an object with both properties
};

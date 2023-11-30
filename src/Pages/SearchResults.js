// SearchResults.js
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SearchResults = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('query');

  useEffect(() => {
    if (query) {
      // Find the element with the searched word and scroll to it
      const element = document.getElementById(query);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [query]);

  return (
    <div>
      <h2>Search Results for "{query}"</h2>
      {/* Display your search results here */}
    </div>
  );
};

export default SearchResults;

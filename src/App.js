import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import DarkModeToggle from './Components/DarkModeToggle';
import { DarkModeProvider } from './Components/DarkModeContext';

import NavBar from "./Components/NavigationBar"
import About from "./Pages/About";
import Catalog from "./Pages/Catalog";
import SearchResults from "./Pages/SearchResults";
import ReactGA from 'react-ga';
import React, {useEffect } from 'react';

const TRACKING_ID = "G-EMD4KJJZJB"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <div>
    <Router>
      <Routes>
        <Route exact path = "/PIUG/" element={<Home/>}/>
        <Route exact path = "/PIUG/about" element={<About/>}/>  
        <Route exact path = "/PIUG/catalog" element={<Catalog/>}/>  
        <Route path="/PIUG/search" element={<SearchResults />} />
      </Routes>
    </Router>
    </div>
  );
  
}

export default App;

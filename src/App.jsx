import React from 'react'
import Navbar from './components/Navbar'
import Newsboard from './components/Newsboard';
import { useState } from 'react';
import './App.css';

const App = () => {
  const [category, setcategory] = useState("latest")
  const [country, setcountry] = useState("indian ")
  return (
    <div className="app-container" style={{backgroundColor:"#B026FF"}}>
     
      <Navbar setcategory={setcategory} setcountry={setcountry} country={country}/>
      <Newsboard category={category} country={country} />
    </div>
  );
};

export default App;

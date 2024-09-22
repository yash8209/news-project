import React, { useState, useCallback } from 'react';
import './Nav.css';

const Navbar = ({ setcategory, setcountry, country }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleCountryChange = useCallback((newCountry) => {
    console.log('Setting country to:', newCountry);
    setcountry(newCountry);
  }, [setcountry]);

  const handleCategoryChange = useCallback((category) => {
    console.log('Setting category to:', category + country);
    setcategory(country + category);
  }, [setcategory, country]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setcategory(searchQuery?searchQuery:"trending");
  };

  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#0b0116" }}>
      <div className="container-fluid">
        <a className="navbar-brand text-light" onClick={() => handleCategoryChange("latest")}>NEWS APP</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse text-light" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item text-light">
              <a className="nav-link text-light" onClick={() => handleCategoryChange("politics")}>Politics</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" onClick={() => handleCategoryChange("sports")}>Sports</a>
            </li>
            <li className="nav-item text-light">
              <a className="nav-link text-light" onClick={() => handleCategoryChange("business")}>Business</a>
            </li>
            <li className="nav-item text-light">
              <a className="nav-link text-light" onClick={() => handleCategoryChange("technology")}>Technology</a>
            </li>
            <li className="nav-item text-light">
              <a className="nav-link text-light" onClick={() => handleCategoryChange("entertainment")}>Entertainment</a>
            </li>
            <div className="dropdown">
              <button className="btn dropdown-toggle text-light" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                COUNTRY
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" onClick={() => handleCountryChange("indian ")}>India</a></li>
                <li><a className="dropdown-item" onClick={() => handleCountryChange("us ")}>United States</a></li>
                <li><a className="dropdown-item" onClick={() => handleCountryChange("china ")}>China</a></li>
              </ul>
            </div>
            <form className="d-flex my-2 my-lg-0 mx-5" onSubmit={handleSearchSubmit}>
              <input 
                className="form-control me-2" 
                type="search" 
                placeholder="Search" 
                aria-label="Search" 
                value={searchQuery}
                onChange={handleSearchInputChange}
              />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


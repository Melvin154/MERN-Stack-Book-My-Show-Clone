import React from "react";
import Logo from "../../assets/main-images/bookmyshow-logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import Login from "../Auth/Login";
import Auth from "../Auth/Auth";

let searchdata = require("../../searchdata.json");



const options = [
  { value: 'option1', label: 'Option 1', imageUrl: 'url_to_image_1' },
  { value: 'option2', label: 'Option 2', imageUrl: 'url_to_image_2' },
  { value: 'option3', label: 'Option 3', imageUrl: 'url_to_image_3' },
  { value: 'option4', label: 'Option 4', imageUrl: 'url_to_image_4' },
  { value: 'option5', label: 'Option 5', imageUrl: 'url_to_image_5' },
];

const Header = () => {
  /*Search Code*/

  const [value, setValue] = useState("");

  const search = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    console.log("search", searchTerm);
  };



  
    const [selectedOption, setSelectedOption] = useState(null);
  
    const handleOptionClick = (option) => {
      setSelectedOption(option);
    };

  return (
    <>
      {/*Navbar*/}
      <nav className="navbar navbar-expand-lg ">
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="Logo" style={{ margin: "5px" }} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/*Search Bar*/}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <div className="input-group autocomplete">
                <div className="search-container">
                  <div className="search-inner">
                    <input
                      type="text"
                      value={value}
                      onChange={search}
                      placeholder="Search for Events, plays, sports......"
                      size="40"
                      style={{ height: "35px" }}
                    />
                    {/*Search Btn */}
                  </div>
                  <div className="dropdown search-dropdown">
                    {searchdata
                      .filter((item) => {
                        const searchTerm = value.toLowerCase();
                        const name = item.name.toLowerCase();
                        return (
                          searchTerm &&
                          name.startsWith(searchTerm) &&
                          name !== searchTerm
                        );
                      })
                      .slice(0, 5)
                      .map((item) => (
                        <div
                          onClick={() => onSearch(item.name)}
                          className="dropdown-row"
                          key={item.name}
                        >
                          {item.name}
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </li>
          </ul>

          {/*navbar reverse*/}
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
             
            {/* <div>
      <div className="image-container">
        {options.map((option) => (
          <img
            key={option.value}
            src={option.imageUrl}
            alt={option.label}
            className={`mini-image ${selectedOption === option ? 'selected' : ''}`}
            onClick={() => handleOptionClick(option)}
          />
        ))}
      </div>
      <div className="selected-option">
        {selectedOption ? selectedOption.label : 'Select an option'}
      </div>
    </div> */}



            </li>

            <li className="nav-item">
              <Auth />
            </li>

            <li className="dropdown"></li>
          </ul>
        </div>
      </nav>

      {/*Links*/}

      <div className="links-container" style={{ fontSize: "14px" }}>
        <div className="left-links">
          <Link to="/movies" style={{ color: "white" }}>
            Movies
          </Link>
          <Link to="/events" style={{ color: "white" }}>
            Events
          </Link>
          <Link to="/premire" style={{ color: "white" }}>
            Premires
          </Link>
        </div>
        <div className="right-links">
          <Link to="/premire" style={{ color: "white" }}>
            Premires
          </Link>
          <Link to="/events" style={{ color: "white" }}>
            Events
          </Link>
          <Link to="/movies" style={{ color: "white" }}>
            Movies
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;

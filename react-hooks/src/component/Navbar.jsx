import React from "react";
import "./Navbar.css";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [profileData, setProfileData] = useState(null);
  // doing the theme background use state
  const [theme, setTheme] = useState("light");
  // side effect to fetch data from a dummy api
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      //   set profile Data to the fetched data coming from the api
      setProfileData(data[0]);
    };
    fetchData();
    // you can put a variable name inside the [] to run the effect only when that variable changes
  }, []);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleThemeHandler = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <nav className="nav-container">
      <h1>Navbar</h1>
      <ul className="nav-items">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      {profileData && (
        <div>
          <img
            className="profile-pic"
            src="https://avatar.iran.liara.run/public/boy"
            alt=""
          />
          <p>{profileData.name}</p>
        </div>
      )}

      <button className="btn" onClick={toggleThemeHandler}>
        Toggle Theme
      </button>
    </nav>
  );
};

export default Navbar;

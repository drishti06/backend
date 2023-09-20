import React from "react";
import "./Navbar.css";
import { LuSearch } from "react-icons/lu";
import { BrowserRouter, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="nav-left">
          <div className="logo">
            <Link to="/">Logo</Link>
          </div>
          <div>
            <ul className="links">
              <li>
                <Link to="/sounds">Sounds</Link>
              </li>

              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
              <li>
                <Link to="#">FAQs</Link>
              </li>
            </ul>
          </div>
          <div className="search">
            <input type="text" placeholder="Search Sounds" />
            <LuSearch />
          </div>
        </div>
        <div className="nav-right">
          <div className="nav-buttons">
            <button>
              <Link to="/loginPage" style={{ color: "white" }}>
                Login
              </Link>
            </button>
            <button>Try Free</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

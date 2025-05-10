import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="Little Lemon Logo" className="logo" />

      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/reserve">Reserve</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

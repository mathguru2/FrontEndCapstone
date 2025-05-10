import React from "react";
import logo from "./assets/logo.png";

export default function Header() {
  return (
    <header>
      <img
        src={logo}
        alt="Little Lemon Logo"
        className="logo"
        style={{ width: "100%" }}
      />

      <nav>
        <ul
          className="nav-list"
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            padding: 0,
            margin: 0,
            listStyle: "none",
          }}
        >
          <li>
            <a href="#home" style={{ textAlign: "center" }}>
              Home
            </a>
          </li>
          <li>
            <a href="#menu" style={{ textAlign: "center" }}>
              Menu
            </a>
          </li>
          <li>
            <a href="#about" style={{ textAlign: "center" }}>
              About Us
            </a>
          </li>
          <li>
            <a href="#contact" style={{ textAlign: "center" }}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

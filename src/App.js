import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import HomePage from "./home/HomePage";
import Booking from "./booking/Booking";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reserve" element={<Booking />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import HomePage from "./home/HomePage";
import Reserve from "./booking/Reserve";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reserve" element={<Reserve />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

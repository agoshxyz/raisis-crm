//packages
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//components
import { Navbar } from "./components";

//pages
import { Contact, ErrorPage, Home, Login, Price, Signup } from "./components";

const App = () => {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Price />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

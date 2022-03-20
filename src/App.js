//packages
import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

//components
import { Navbar } from "./components/index";

//pages
import { Contact, ErrorPage, Home, Login, Price, Signup } from "./pages/index";

//styles
import './App.css'

const App = () => {
  // const [showNav, setShowNav] = useState(true)
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/pricing" element={<Price />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

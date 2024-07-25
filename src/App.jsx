import React from "react";
import { Home, Contact, Work } from "./pages";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  console.log("App component loaded");
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

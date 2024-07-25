import React from "react";
import { Home, Contact } from "./pages";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  console.log("App component loaded");
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

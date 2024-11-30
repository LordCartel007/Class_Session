import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "../src/Component/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;

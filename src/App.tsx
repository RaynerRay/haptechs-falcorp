// App.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Launches } from "./pages/Launches";
import LaunchDetail from "./pages/LaunchDetail";
import { Rockets } from "./pages/Rockets";
import { About } from "./pages/About";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/launches" element={<Launches />} />
      <Route path="/rockets" element={<Rockets />} />
      <Route path="/about" element={<About />} />
      <Route path="/launches/:id" element={<LaunchDetail />} />
    </Routes>
  );
};

export default App;

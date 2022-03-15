import React from 'react';
import Market from './Components/Market';
import { Routes, Route, Link } from "react-router-dom";
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/market" element={<Market />} />
      </Routes>
    </div>
  );
}

export default App;

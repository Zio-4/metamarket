import React from 'react';
import Market from './Components/Markets/Market';
import { Routes, Route, Link } from "react-router-dom";
import NavBar from './Components/NavBar';
import MarketList from './Components/Markets/MarketList';
import Cart from './Components/CartComponents/Cart';
import Login from './Components/User/Login';
import SignUp from './Components/User/SignUp';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/market" element={<Market />} />
        <Route path="/marketlist" element={<MarketList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;

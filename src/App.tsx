import React from 'react';
import Market from './Components/Markets/Market';
import { Routes, Route} from "react-router-dom";
import NavBar from './Components/NavBar';
import MarketList from './Components/Markets/MarketList';
import Cart from './Components/CartComponents/Cart';
import Login from './Components/User/Login';
import SignUp from './Components/User/SignUp';
import LandingPage from './Components/LandingPage';
import Listing from './Components/Markets/Listing';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/markets" element={<MarketList />} />
        <Route path="/markets/:marketname" element={<Market />} />
        <Route path="/markets/:marketname/:id" element={<Listing />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;

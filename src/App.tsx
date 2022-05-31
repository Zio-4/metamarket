import React, { useEffect, useState, ReactElement } from 'react';
import Market from './Components/Markets/Market';
import { Routes, Route, useParams} from "react-router-dom";
import NavBar from './Components/Navigation/NavBar';
import Markets from './Components/Markets/Markets';
import Cart from './Components/Cart/Cart';
import Login from './Components/User/Login';
import LandingPage from './Components/Navigation/LandingPage';
import Listing from './Components/Markets/Listing';
import ListingForm from './Components/Markets/ListingForm';

interface IuserSignedIn {
  userIsSignedIn: boolean
}

const App = () => {
  const [userIsSignedIn, setUserIsSignedIn] = useState(false)
  
  const updateUserStatus = () => {
    setUserIsSignedIn(!userIsSignedIn)
  }


  return (
    <div className="App">
      <NavBar userIsSignedIn={userIsSignedIn} updateUserStatus={updateUserStatus} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/markets" element={<Markets />} />
        <Route path="/markets/:marketname" element={<Market />} />
        <Route path="/markets/:marketname/:id" element={<Listing />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signin" element={<Login updateUserStatus={updateUserStatus}/>} />
        <Route path="/listingform" element={<ListingForm userIsSignedIn={userIsSignedIn} />} />
      </Routes>
    </div>
  );
}

export default App;

import React from 'react';
import Market from './Components/Markets/Market';
import { Routes, Route, useParams} from "react-router-dom";
import NavBar from './Components/Navigation/NavBar';
import Markets from './Components/Markets/Markets';
import Cart from './Components/Cart/Cart';
import SignIn from './Components/User/SignIn';
import LandingPage from './Components/Navigation/LandingPage';
import Listing from './Components/Markets/Listing';
import ListingForm from './Components/Markets/ListingForm';
import ProfilePage from './Components/User/ProfilePage';



const App = () => {


  return (
    <div className="App">
      <NavBar  />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/markets" element={<Markets />} />
        <Route path="/markets/:marketname" element={<Market />} />
        <Route path="/markets/:marketname/:id" element={<Listing />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/listingform" element={<ListingForm  />} />
        <Route path='/profile' element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;

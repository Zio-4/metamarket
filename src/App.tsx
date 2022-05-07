import React, { useEffect } from 'react';
import Market from './Components/Markets/Market';
import { Routes, Route, useParams} from "react-router-dom";
import NavBar from './Components/Navigation/NavBar';
import Markets from './Components/Markets/Markets';
import Cart from './Components/Cart/Cart';
import Login from './Components/User/Login';
import SignUp from './Components/User/SignUp';
import LandingPage from './Components/Navigation/LandingPage';
import Listing from './Components/Markets/Listing';
import ListingForm from './Components/Markets/ListingForm';
import { Auth } from 'aws-amplify';


function App() {
  useEffect(() => {
    Auth.currentAuthenticatedUser().then(
      data => console.log("current user: ", data)
    ).catch(
      err => console.log(err)
    )
  }, [])

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/markets" element={<Markets />} />
        <Route path="/markets/:marketname" element={<Market />} />
        <Route path="/markets/:marketname/:id" element={<Listing />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/listingform" element={<ListingForm />} />
      </Routes>
    </div>
  );
}

export default App;

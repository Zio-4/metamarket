import React, { useEffect, useState, ReactElement } from 'react';
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
import { Auth } from 'aws-amplify'

interface IUser {
  username: string
  userId: string
  email: string
  stripeId: string
  sold: []
  owned: []
  favorited: []
  chargesEnabled: boolean
}

const App = () => {
  // const [userIsSignedIn, setUserIsSignedIn] = useState(false)
  // const [currentUser, setCurrentUser] = useState({
  //   username: '', userId: '', email: '', stripeId: '', sold: [], owned: [], favorited: [], chargesEnabled: false
  // })

  // useEffect(() => {
  //   if (localStorage.getItem('userInfo')) {
  //     console.log("userInfo is in local storage")
  //     let userInfo = JSON.parse(localStorage.getItem('userInfo') || '')
  //   }
  //       // setCurrentUser({cognitoId: `${data.attributes.sub}`,
  //       // username: `${data.username}`,
  //       // email: `${data.attributes.email}`})

  // }, [])

  // const signInCurrentUser = (user: IUser) => {
  //   setCurrentUser(user)
  // }
  
  // const signOutCognitoUser = () => {
  //   setCurrentUser({
  //     username: '', userId: '', email: '', stripeId: '', sold: [], owned: [], favorited: [], chargesEnabled: false
  //   })
  // }


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

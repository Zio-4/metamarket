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
import ProfilePage from './Components/User/ProfilePage';
import { Auth } from 'aws-amplify'

interface IcognitoUser {
  cognitoId: string
  username: string
  email: string
}

const App = () => {
  // const [userIsSignedIn, setUserIsSignedIn] = useState(false)
  const [cognitoUser, setCognitoUser] = useState({
    cognitoId: '',
    username: '',
    email: ''
  } as IcognitoUser)

  useEffect(() => {
    Auth.currentAuthenticatedUser().then(
      data => {
        setCognitoUser({cognitoId: `${data.attributes.sub}`,
        username: `${data.username}`,
        email: `${data.attributes.email}`})
      }
    ).catch(
      err => console.log("error from App component: ", err)
    )
  }, [])

  const signInCognitoUser = (user: IcognitoUser) => {
    setCognitoUser(user)
  }
  
  const signOutCognitoUser = () => {
    setCognitoUser({cognitoId: "", username: "", email: ""})
  }


  return (
    <div className="App">
      <NavBar cognitoUser={cognitoUser} signOutCognitoUser={signOutCognitoUser} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/markets" element={<Markets />} />
        <Route path="/markets/:marketname" element={<Market />} />
        <Route path="/markets/:marketname/:id" element={<Listing />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signin" element={<Login signInCognitoUser={signInCognitoUser}/>} />
        <Route path="/listingform" element={<ListingForm cognitoUser={cognitoUser} />} />
        <Route path='/profile' element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;

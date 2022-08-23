import { Routes, Route } from "react-router-dom";
import NavBar from './Components/Navigation/NavBar';
import Markets from './Pages/markets';
import Cart from './Pages/cart'
import Auth from './Pages/auth';
import Listing from './Components/Markets/Listing';
import ListingForm from './Components/Markets/ListingForm';
import Home from './Pages/home';
import Profile from './Pages/profile'
import Market from './Pages/market'


const App = () => {


  return (
    <div className="App">
      <NavBar  />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/markets" element={<Markets />} />
        <Route path="/markets/:marketname" element={<Market />} />
        <Route path="/markets/:marketname/:id" element={<Listing />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signin" element={<Auth />} />
        <Route path="/listingform" element={<ListingForm  />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;

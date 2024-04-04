import React from "react";
import Navbar from "./components/Navbar";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import { Route ,Routes } from "react-router-dom";
import Home from "./components/Home";
import Homepage from "./components/Homepage";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Creditcard from "./components/Creditcard";

function App() {
  return <div>
      <Navbar/>
      
    <Routes>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/home" element={ <Homepage/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/details" element={<Details/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/creditcard" element={<Creditcard/>}/>
    </Routes>
 

    {/* <Signin/>
    <Signup/> */}
  </div>;
}

export default App;

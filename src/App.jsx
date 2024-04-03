import React from "react";
import Navbar from "./components/Navbar";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import { Route ,Routes } from "react-router-dom";
import Home from "./components/Home";
import Homepage from "./components/Homepage";

function App() {
  return <div>
      <Navbar/>
      
    <Routes>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/home" element={ <Homepage/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
    

    {/* <Signin/>
    <Signup/> */}
  </div>;
}

export default App;


// SORRY FOR THE BAD UI. I WANT SOME MORE TIME TO WORK ON IT 


import React from "react";
import Stock from './Stock'
import "./App.css";
import Navbar from "./components/Navbar";
import Dropdown from "./components/dropdown/Dropdown";

function App() {
  return (
    <div>
     <Navbar />
     <Dropdown/>
     <Stock/>
    </div>
  );
}

export default App;

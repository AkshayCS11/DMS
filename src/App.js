import './App.css';
import React, { Component } from 'react';
import Homepage from './components/Homepage';
import CustomizedDialogs from "./components/dialog";
import RegistrationForm from "./components/index";

function App() {
  return (
    <div className="App">
      <Homepage/>
      <CustomizedDialogs>
      <RegistrationForm/>
     </CustomizedDialogs>

    </div >
  );
}
export default App;

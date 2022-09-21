import './App.css';
import React, { Component } from 'react';
import Homepage from './components/Homepage';
import SignInOutContainer from './container';

function App() {
  return (
    <div className="App">
      <Homepage/>
      {/* <CustomizedDialogs>
      <RegistrationForm/>
     </CustomizedDialogs> */}
     <SignInOutContainer/>
    </div >
  );
}
export default App;

import React from 'react';
import Form from './components/Form';
import {Switch,Route} from "react-router-dom";
import Nav from './components/Nav';
import axios from 'axios';
import "./App.css"

function App() {
  return (
    <div className="main">
      <h1>GitHub Profiles</h1>
      <Nav/>
      <Form/>
      <switch>
        <Route path = "/Eric">Eric</Route>
        <Route path = "/Stefan">Stefan</Route>
        <Route path = "/Waldemar">Waldemar</Route>
        <Route path = "/"></Route>

      </switch>
    </div>
    
  );
}

export default App;

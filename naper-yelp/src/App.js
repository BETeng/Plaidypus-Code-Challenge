import React from 'react';
import Nav from './Nav';
import Results from './Results';
import Search from "./Search";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path = "/" exact component = {Search} />
        <Route path = "/results" exact component = {Results}/>
      </div>
    </Router>
  );
}

export default App;

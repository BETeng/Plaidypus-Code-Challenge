import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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

//form input box asking for restaurant
  //save input from form as a var
  //switch to results page
  //use var in the api call
  //pull up list of restaurants based on search 
import React from 'react';
import Nav from './Nav';
import SearchResult from './Results';
import Search from "./Search";
// import Form from "./Form";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Search} />
          {/* <Route path="/results" exact component={Results} /> */}
          <Route path="/results/:id" component={SearchResult}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

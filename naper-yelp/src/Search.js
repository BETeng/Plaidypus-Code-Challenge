import React from 'react';
import './App.css';

function Search() {
  
const apiKey = process.env.REACT_APP_API_KEY;
const headerAuth = "Bearer "+apiKey;
console.log(headerAuth);

  return (
    <div>
      <h1>Search Page</h1>
    </div>

  );
}

export default Search;

import React from 'react';
import './App.css';


function Search() {
const apiKey = process.env.REACT_APP_API_KEY;
const headerAuth = "Bearer "+apiKey;
console.log(headerAuth);
var apiTerm;
var apiLocation;
var apiEndpoint = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=chipotle&location=60540&limit=5";

fetch(apiEndpoint, {
  method: "GET",
  headers: {
    "Authorization": `Bearer ${apiKey}`
  }
})
  .then(res => res.json())
  .then(json => console.log(json));

  return (
    <div>
      <h1>Search Page</h1>
    </div>

  );
}

export default Search;

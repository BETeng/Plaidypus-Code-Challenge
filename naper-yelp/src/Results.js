import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function SearchResult({ }) {
  const apiKey = process.env.REACT_APP_API_KEY;
  const headerAuth = "Bearer " + apiKey;
  console.log(headerAuth);
  var apiTerm;
  var apiLocation;
  var apiEndpoint = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=mexican&location=naperville&limit=10";
  //https://api.yelp.com/v3/businesses/{id}
  //https://api.yelp.com/v3/businesses/rgTIKH0L_bwVCHmR1QrJ-A
  //https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/rgTIKH0L_bwVCHmR1QrJ-A

  useEffect(() => {
    fetchItem();
   }, []);

  const [item, setItem] = useState({});

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/rgTIKH0L_bwVCHmR1QrJ-A`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${apiKey}`
      }
    });
    const item = await fetchItem.json();
    console.log(item);
  };

  return (
    <div>
      <h1>Item</h1>
    </div>
  );
}



export default SearchResult;
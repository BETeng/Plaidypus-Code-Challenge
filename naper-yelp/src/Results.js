import React, { useState, useEffect } from 'react';
import './App.css';

function SearchResult({ match }) {
  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState({});

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${match.params.id}`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${apiKey}`
      }
    });
    const item = await fetchItem.json();
    setItem(item);
    console.log(item);
  };

  return (
    <div>
      <h1>{item.name}</h1>
      <p>Price Range: {item.price}</p>
      <p>Rating: {item.rating}</p>
      <p>Phone: {item.display_phone}</p>
      <img src={item.image_url}></img>
    </div>
  );
}



export default SearchResult;
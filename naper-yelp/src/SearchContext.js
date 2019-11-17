import React, { useState, createContext } from 'react';
import Search from './Search';
export const SearchContext = createContext();

export const SearchProvider = props => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const headerAuth = "Bearer " + apiKey;
  console.log(headerAuth);
  // var apiTerm;
  // var apiLocation;
  var apiEndpoint = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=mexican&location=naperville&limit=10";


  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      apiEndpoint, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${apiKey}`
      }
    });
    const items = await data.json();
    console.log(items.businesses);
    setItems(items.businesses);

    return(
      <SearchContext.Provider>
        {props.children}
      </SearchContext.Provider>
    )
  };
};
import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Search() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const headerAuth = "Bearer " + apiKey;
  console.log(headerAuth);
  var apiTerm;
  var apiLocation;
  var apiEndpoint = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=mexican&location=naperville&limit=10";

  useEffect(() => {
    fetchItems();
  }, []);

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
  };

  return (
    <div>
      {items.map(item => (
        <h1 key={item.id}>
          <Link to={`/results/${item.id}`}> {item.name}</Link>
        </h1>
      ))}
      <h1>Search Page</h1>
    </div>
  );
}



export default Search;


// import React, { Component } from 'react';
// import './App.css';

// class Search extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       items: [],
//       isLoaded: false,
//     }
//   }

//   componentDidMount() {

//     const apiKey = process.env.REACT_APP_API_KEY;
//     const headerAuth = "Bearer " + apiKey;
//     console.log(headerAuth);
//     var apiTerm;
//     var apiLocation;
//     var apiEndpoint = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=mexican&location=naperville&limit=10";

//     fetch(apiEndpoint, {
//       method: "GET",
//       headers: {
//         "Authorization": `Bearer ${apiKey}`
//       }
//     })
//       .then(res => res.json())
//       .then(json => {
//         this.setState({
//           isLoaded: true,
//           items: json.businesses,
//         })
//       });
//   }

//   render() {

//     var { isLoaded, items } = this.state;

//     if (!isLoaded) {
//       return <div>Loading...</div>;
//     }

//     else {

//       return (


//         <div className="Search">
//           <ul>
//             {items.map(item => (
//               <li key = {item.id}>
//                 {item.name}  
//               </li>
//             ))};
//           </ul>
//         </div>
//       )
//     }
//   }

// }
// export default Search;


// import React from 'react';
// import './App.css';


// function Search() {
// const apiKey = process.env.REACT_APP_API_KEY;
// const headerAuth = "Bearer "+apiKey;
// console.log(headerAuth);
// var apiTerm;
// var apiLocation;
// var apiEndpoint = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=chipotle&location=60540&limit=5";

// fetch(apiEndpoint, {
//   method: "GET",
//   headers: {
//     "Authorization": `Bearer ${apiKey}`
//   }
// })
//   .then(res => res.json())
//   .then(json => console.log(json.businesses));

//   return (
//     <div>
//       <h1>Search Page</h1>
//     </div>

//   );
// }

// export default Search;

# Naper Yelp
Naper Yelp is a simple web app using Yelp's Fusion API to grab a list of businesses or restaurants that most closely fit the search parameters.

### Getting Started

Clone the repo, open up the application, open up the terminal and use the commands:

```
npm install 
```
#### Getting API key
After installing packages, head to they Yelp Fusion site [here](https://www.yelp.com/login?return_url=%2Fdevelopers%2Fv3%2Fmanage_app) and follow the directions to get an API Key

#### Storing API key in .env file
After acquiring your unique API key, create a .env file in the src folder of the application. After creating the .env file
```
REACT_APP_API_KEY=THE API KEY YOU JUST MADE
```
#### Running the Application
Open the Terminal and type:
```
npm start
```
#### Functionality
The app currently does NOT have a working form page, so to make API calls, one must go the Search.js page and go to line 12 and 13 to change queries.

#### Future Development
Had trouble with getting props back from forms into page with API call. In the future, configuring of a form to make API call directly from app.
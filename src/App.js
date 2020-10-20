import React from 'react';
import './App.css';
import PrimarySearchAppBar from './components/SearchBar'



function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar /> 
      <div id="jumbotron">
        <div className="greeting">
          <h1>All Movie Database</h1>    
          <p>Get behind the scenes info on all your favorite movies</p>
          <img aria-hidden="true" src="clapperboard.png" alt="" />
        </div>
        <div className="desktopImg">
              <img className="popcorn" aria-hidden="true" src="popcorn.png" alt="" />
            </div>
      </div>
    </div>
  );
}

export default App;

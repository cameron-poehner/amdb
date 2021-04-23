import React from 'react';
import './App.css';
import Navbar from './components/Navbar'



function App() {
  return (
    <div className="App">
      <Navbar /> 
      <div id="jumbotron">
        <div className="greeting">
          <h1>All Movie Database</h1>    
          <p>Get THE behind scenes info on all your favorite movies</p>
          <p>Type your movie title into the search bar and hit enter to begin</p>
          <img className="clapper" aria-hidden="true" src="clapperboard.png" alt="" />
        </div>
        <div className="desktopImg">
              <img className="popcorn" aria-hidden="true" src="popcorn.png" alt="" />
            </div>
      </div>
    </div>
  );
}

export default App;

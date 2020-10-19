import React from 'react';
import './App.css';
import PrimarySearchAppBar from './components/SearchBar'
import query from './components/SearchBar'


function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar /> 
      { query ? <h1>Find all your favorite movies!</h1> : <div></div> }    
    </div>
  );
}

export default App;

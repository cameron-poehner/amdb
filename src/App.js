import React from 'react';
import './App.css';
import PrimarySearchAppBar from './components/SearchBar'



function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar /> 
      <h1 id="greeting">Search your favorite movies!</h1>    
    </div>
  );
}

export default App;

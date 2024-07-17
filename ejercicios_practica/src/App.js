// src/App.js

import React from 'react';
import './App.css';
import logo from './logo.svg';
import CartaPresentacion from './components/CartaPresentacion';

function App() 
{
  return (
    <div className="App">
      <header className="App-header">
      <CartaPresentacion />
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
       
        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
   
        </a>
      </header>
      
      
    </div>
  );
}

export default App;

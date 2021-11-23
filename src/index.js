import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { PokemonInventoryProvider } from './context/PokemonInventoryContext';


ReactDOM.render(
  <BrowserRouter>
      <PokemonInventoryProvider>
         <App />
      </PokemonInventoryProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
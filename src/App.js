import './App.scss';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Pokemons from './components/Pokemons';
import PokemonTypes from './components/PokemonTypes';
import PokemonDetail from './components/PokemonDetail';


function App() {
  return (
    <div className="App">
      <div className="bg-image-container"></div>
      <div className="content-container">
        <Header />
        <Routes>

          <Route exact path="/" element={ <Pokemons /> }></Route>

          <Route exact path="/types" element={ <PokemonTypes /> }></Route>

          <Route exact path="/pokemon/:id" element={ <PokemonDetail /> }></Route>

        </Routes>   
      </div> 
    </div>
  );
}

export default App;

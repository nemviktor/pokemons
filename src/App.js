import './App.css';
import Header from './components/Header';
// import { Route, Routes } from "react-router";
import React from 'react';
import Pokemons from './components/Pokemons';

function App() {
  return (
    <div className="App">
      <Header />
      <Pokemons />
{/*       <Routes>

        <Route exact path="/">
            <React.Fragment>
              <Pokemons />
            </React.Fragment>
        </Route>

      </Routes>    */} 
    </div>
  );
}

export default App;

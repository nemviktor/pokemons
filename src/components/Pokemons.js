import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard';
import '../scss/Pokemons.scss';


export default function Pokemons() {

    const [pokemons,setPokemons] = useState(null);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=20')
          .then((resp) => {
            setPokemons(resp.data.results);
          })
          .catch((err) => {
            alert("Oops! Something went wrong.");
            console.log(err);
          });
      }, [] );

    return (
        
        <div className="pokemons-container">
          {pokemons ? pokemons.map((pokemon) => {
            return <PokemonCard pokemon={pokemon}/>
          }) : ""
          }
        </div>
    )
}

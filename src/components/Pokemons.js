import React, { useState, useEffect } from 'react';
import axios from 'axios';



export default function Pokemons() {

    const [pokemons,setPokemons] = useState(null);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=20')
          .then((resp) => {
            setPokemons(resp.data.results);
/*             let content = [];
            resp.data.results.map((pokemon) => {
                let currentDiv = (
                    <div>
                        <Pokemon />
                    </div>
                )
                content.push(currentDiv);
            })
            setContent(content); */
          })
          .catch((err) => {
            alert("Oops! Something went wrong.");
            console.log(err);
          });
      }, [] );

    return (
        
        <div>
{/*           { pokemons.map((pokemon) => {
            <PokemonCard />
          }) 
          } */}
        </div>
    )
}

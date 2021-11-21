import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';

const PokemonCard = (props) => {

    const [pokemon, setPokemon] = useState();

    useEffect(() => {
        axios.get(props.pokemon.url)
        .then(resp => {
            console.log(resp.data);
            setPokemon(resp.data);
        })
    }, [])

    return (
        <div>
            { pokemon ? <img src={ pokemon.sprites.front_default } ></img>
            : ""}
            <p>{ props.pokemon.name }</p>
        </div>
    )
}

export default PokemonCard;
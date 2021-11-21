import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import '../scss/PokemonCard.scss';

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
        <div className="pokemon-card">
            { pokemon ? <img src={ pokemon.sprites.front_default } ></img>
            : ""}
            <p>{ props.pokemon.name.toUpperCase() }</p>
        </div>
    )
}

export default PokemonCard;
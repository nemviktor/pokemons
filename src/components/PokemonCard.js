import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../scss/PokemonCard.scss';

const PokemonCard = (props) => {

    const [pokemon, setPokemon] = useState();

    useEffect(() => {
        axios.get(props.pokemon.url)
        .then(resp => {
            setPokemon(resp.data);
        })
    }, [props.pokemon.url])

    return (
        <div className="pokemon-card">
            { pokemon ? <Link to={ `/pokemon/${pokemon.id}` }
                            state={ {pokemon : pokemon} }
                        >
                                <img src={ pokemon.sprites.front_default } alt="pokemon"></img>
                        </Link>
            : ""}
            <p>{ props.pokemon.name.toUpperCase() }</p>
        </div>
    )
}

export default PokemonCard;
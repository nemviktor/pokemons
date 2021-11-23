import React, { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import '../scss/PokemonDetailed.scss';
import Pokeball from "../img/Pokeball.png";
import PokemonInventoryContext from '../context/PokemonInventoryContext';


const PokemonDetail = _ => {

    const { state } = useLocation();
    const [ballShaking, setBallShaking] = useState(false);
    const context = useContext(PokemonInventoryContext);


    const pokemonData = state
    ? {
        name: state.pokemon.name.toUpperCase(),
        abilities: state.pokemon.abilities.map((e) => e.ability.name),
        types: state.pokemon.types.map((e) => e.type.name),
        height: state.pokemon.height,
        weight: state.pokemon.weight,
        imageUrl: state.pokemon.sprites.front_default,
      }
    : [];


    useEffect(() => {
        const catchPokemon = () => {
            setBallShaking(false);
            let success = Math.random();
            if (success > 0.75) {
                alert("You catched this pokemon.");
                context.collectPokemon(state.pokemon);
            } else {
                alert("You didn't catch this pokemon.");
            }
        }
        if (ballShaking) {
            setTimeout(() => catchPokemon(), 5000);
        }
      }, [ballShaking, context, state])


    const shakeBall = (event) => {
        if (!ballShaking) {
            setBallShaking(true);
        }
    }


    return (
        <div className="detailed-pokemon-container">
            <div className="catch-pokemon-container">
                <img src={pokemonData.imageUrl} alt={pokemonData.name} />
                <button className="catch-btn" type="button" onClick={ shakeBall }>
                    <img src={ Pokeball } className={ballShaking ? "pokemon-inside" : ""} alt="pokeball"></img>
                </button>
            </div>
            <div className="pokemon-detailed-properties">
                <h2>{pokemonData.name}</h2>
                <p>Height: {pokemonData.height} dm</p>
                <p>Weight: {pokemonData.weight} hg</p>
                <div className="abilities">
                    <h4>Abilities:</h4>
                    <span>{(pokemonData.abilities || []).join(", ")}</span>
                </div>
                <div className="types">
                    <h4>Types:</h4>
                    <span>{(pokemonData.types || []).join(", ")}</span>
                </div>
            </div>
        </div>
    )
}


export default PokemonDetail;
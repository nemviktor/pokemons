import React, {useState, createContext} from 'react';


const PokemonInventoryContext = createContext({
    pokemons: null,
    collectPokemon: () =>{},
});

export const PokemonInventoryProvider = (props) =>{

    const [pokemonList, setPokemonList] = useState([]);

    const addPokemon =  (pokemon) =>{
        let newPokemonList = [...pokemonList, pokemon]
        setPokemonList(newPokemonList);
    }

    return <PokemonInventoryContext.Provider
        value={
            {
                pokemons: pokemonList,
                collectPokemon: addPokemon,
            }
        }>
        {props.children}
    </PokemonInventoryContext.Provider>
}

export default PokemonInventoryContext;
import React, {useState, createContext} from 'react';


const PokemonInventoryContext = createContext({
    pokemons: [],
    collectPokemon: () =>{},
});

export const PokemonInventoryProvider = (props) =>{

    const [pokemonList] = useState([]);

    const addPokemon =  (pokemon) =>{
        pokemonList.push(pokemon)
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
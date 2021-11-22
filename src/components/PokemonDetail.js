import React from 'react';
import { useLocation } from 'react-router-dom';


const PokemonDetail = _ => {

    const { state } = useLocation();

    console.log(state);
    return (
        <div>
            {/* { state.pokemon } */}
        </div>
    )
}


export default PokemonDetail;
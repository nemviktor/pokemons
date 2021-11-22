import axios from 'axios';
import React, { useState, useEffect, Fragment } from 'react';
import TypeCard from './TypeCard';
import '../scss/Types.scss';

const PokemonTypes = (props) => {

    const [types, setTypes] = useState("");

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/type')
        .then(resp => {
            setTypes(resp.data.results);
        })
    },[])

    return (
        <Fragment>
            <div className="types-container">
                {types ? types.map((type) => {
                return <TypeCard type={type} key={ type.url
                    .replace(/\/$/, "")
                    .substr(type.url.replace(/\/$/, "").lastIndexOf("/") + 1) }/>
                }) : ""
                }
             </div>
        </Fragment>
    )
}


export default PokemonTypes;
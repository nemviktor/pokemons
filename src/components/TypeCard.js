import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../scss/TypeCard.scss';

const PokemonCard = (props) => {

/*     const [type, setType] = useState();

    useEffect(() => {
        axios.get(props.type.url)
        .then(resp => {
            setType(resp.data);
        })
    }, []) */

    return (
        <div className="type-card">
            <p>{ props.type.name.toUpperCase() }</p>
        </div>
    )
}

export default PokemonCard;
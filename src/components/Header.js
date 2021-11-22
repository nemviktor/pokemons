import React from 'react';
import '../scss/Header.scss';
import { Link } from 'react-router-dom';
import Ash from "../img/ash.png";
import Pikachu from "../img/pikachu.png";


 const Header = () => {
    return (
        <header>
            <h1>
                <img src="https://fontmeme.com/permalink/210830/3ba538cc07d53b8aca892fa862216891.png" alt="pokemon-font" border="0"></img>
            </h1>
            <Link className="link" to="/"><img className="ash-pokemons" src={Ash} alt="pokemons-ash"></img></Link>
            <Link className="link" to="/types"><img className="pikachu-types" src={Pikachu} alt="pikachu"></img></Link>
        </header>
    )
}

export default Header;

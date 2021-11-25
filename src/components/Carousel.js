import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React, { useContext, useEffect } from 'react';
import PokemonInventoryContext from '../context/PokemonInventoryContext';
import '../scss/Carousel.scss';



const CarouselComponent = () => {

    const context = useContext(PokemonInventoryContext);

    return (
        <div className="carousel-wrapper">
            <p>THESE POKEMONS ARE FIGHTING WITH YOU</p>
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                { context.pokemons.map((pokemon) => {
                    return (
                        <div>
                            <img src={ pokemon.sprites.front_default } />
                        </div>
                    )
                  })
                } 
            </Carousel>
        </div>
    );
}


export default CarouselComponent;
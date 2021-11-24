import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React, { useContext, useEffect } from 'react';
import PokemonInventoryContext from '../context/PokemonInventoryContext';



const CarouselComponent = () => {

    const context = useContext(PokemonInventoryContext);
    
    console.log(context.pokemons)

    return (
        <div className="carousel-wrapper">
{/*             <Carousel>
                { context.pokemons.map((pokemon) => {
                    return (
                        <p> {pokemon}</p>
                    )
                }) } 
            </Carousel> */}
        </div>
    );
}


export default CarouselComponent;
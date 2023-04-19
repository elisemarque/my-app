// This script correspond to a card with for each pokemon, his id, his image and his name. When we click on the card, it display all the infos for the pokemon.

import React from "react";

const Card = ({ pokemon, infoPokemon}) => {
    return (
        <>
        {
            pokemon.map((item) => {             // The map() function is used to iterate over an array and manipulate or change data items. In React, the map() function is most commonly used for rendering a list of data to the DOM.
                                                // the "item" is the pokemon
                return (
                    <>
                        <div className = "card" key = { item.id } onClick = { () => infoPokemon(item) }>           
                            <h2>{ item.id } </h2>
                            <img src = { item.sprites.front_default } alt = "" />
                            <h2>{ item.name }</h2>
                        </div>
                    </>
                )
            })
        }

        </>
    )
}
export default Card;        // we can import a card in an other script.
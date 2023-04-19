// this script can display the infos of each pokemon when we click on the card. It display the nam, the image, the abilities, and the statistics of the pokemon.

import React from "react";

const Pokeinfo = ({ data }) => {
   
    return (
        <>
        {
            (!data) ? "" : (            // if data is empty, it display nothing. If data is not empty, it display the name, the image, the abilities and the statistics of the pokemon.
                <>
                    <h1>{ data.name } </h1>
                    <img src = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt = "" />
                    <div className = "abilities">
                        {
                            data.abilities.map(poke =>{
                                return(
                                    <>
                                     <div className = "group">
                                        <h2>{ poke.ability.name }</h2>
                                    </div>
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className = "base-stat">
                        {
                            data.stats.map(poke => {
                                return(
                                    <>
                                        <h3>{ poke.stat.name } : { poke.base_stat }</h3>
                                    </>
                                )
                            })
                        }
                    </div>
                </>
            )
        }

        </>
    )
}
export default Pokeinfo        // we can import the infos in an other script.
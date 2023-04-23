// in this script we can find all the logic of the pokedex. 

import React from "react";
import Card from "./Card";
import Pokeinfo from "./Pokeinfo";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Main=()=>{
    const [data,setData] = useState([]); // Declare a new state variable, which we'll call "data" (repeat for each but with an other name)
    const [url,setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
    const [nextUrl,setNextUrl] = useState();
    const [prevUrl,setPrevUrl] = useState();
    const [pokeDex,setPokeDex] = useState();

    
    // async function to get all the pokemon

    const getPokemon = async(res) => {
       res.map(async(item) => {
          const result = await axios.get(item.url)            // https://www.digitalocean.com/community/tutorials/react-axios-react
          setData(state => {
              state = [...state,result.data]
              state.sort((a,b) => a.id > b.id ? 1 : -1)
              return state;
          })
       })   
    }

    useEffect(() => {
        const pokeFun = async() => {
            const res = await axios.get(url);
            setNextUrl(res.data.next);
            setPrevUrl(res.data.previous);
            getPokemon(res.data.results)
        }

        pokeFun();
    },[url])

    // set the card and the button back and next and the infos of the pokemon
    return(
        <>
           
            <div className = "container">
                <div className = "left-content">
                    <Card pokemon = { data } infoPokemon = { poke => setPokeDex(poke) }/>
                    
                    <div className = "btn-group">
                        {  prevUrl && <button onClick = {() => {
                            setData([])
                            setUrl(prevUrl) 
                        }}>Back</button>}

                        { nextUrl && <button onClick = {() => {
                            setData([])
                            setUrl(nextUrl)
                        }}>Next</button>}

                    </div>
                </div>
                <div className = "right-content">
                   <Pokeinfo data = {pokeDex}/>
                </div>
            </div>
        </>
    )
}

export default Main;       // we can import the main in an other script.
import React from "react";
import { useState, useEffect } from "react";
import PokemonTile from "../PokemonTile/PokemonTile";
import { baseUrl } from "../../App";
import styles from "./TileList.module.css"
import left from "../../assets/arrow-bar-left.svg"
import right from "../../assets/arrow-bar-right.svg"

const TileList = props => {
    const [pokemonState, setPokemonState] = useState({
        limit: 16,
        offset: 0,
        pokemon: { results: [], next: null, previous: null }
    })

    const { limit, offset, pokemon } = pokemonState

    const fetchPage = (url) => {
        fetch(url)
        .then(r => r.json())
        .then(data => setPokemonState(prev => ({ ...prev, pokemon: data })));
    }

    useEffect(() => {
        fetchPage(`${baseUrl}pokemon?limit=${limit}&offset=${offset}`);
    }, [limit, offset])

    console.log(pokemon)

    if(!pokemon.results || pokemon.results.length === 0) return (
        <div>loading...</div>
    )

    return (
        <div className="carousel">
            <img className="arrow" src={left} onClick={() => fetchPage(pokemon.previous)}></img>
            <div className="tiles">
            {
                pokemon.results.map(p => <PokemonTile key={p.name} pokemon={p}></PokemonTile>)
            }
            </div>
            <img className="arrow" src={right} onClick={() => fetchPage(pokemon.next)}></img>
        </div>
    )
}

export default TileList;
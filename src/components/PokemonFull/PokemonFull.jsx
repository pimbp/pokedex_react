import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { TYPE_COLORS } from "../../App";

const PokemonFull = props => {
    const params = useParams();
    const location = useLocation();

    const pokemon = location.state

    let background = ""
    let primary = ""
    let secondary = ""
    let abilities = ""
    let statArray = ""

    console.log(pokemon)

    if(pokemon){
        const types = pokemon.types.map(t => t.type.name)
        primary = types[0] || 'normal'
        secondary = types[1] || null

        const primaryColor = TYPE_COLORS[primary] || TYPE_COLORS.normal
        const secondaryColor = secondary ? (TYPE_COLORS[secondary] || '#ccc') : '#ccc'

        background = `linear-gradient(135deg, ${primaryColor} 40%, ${secondaryColor} 60%)`

        abilities = pokemon.abilities.slice(1).reduce((txt, a) => {
            return txt += `, ${a.ability.name}`
        }, pokemon.abilities[0].ability.name)

        statArray = (
        <ul>
            {pokemon.stats.map(s => (
                <li key={s.stat.name}>
                    <strong style={{ textTransform: 'capitalize' }}>{s.stat.name}</strong>: {s.base_stat}
                </li>
            ))}
        </ul>
        )
    }

    
    return (
        <div className="article poke-article" style={{background, fontSize: "2vh"}}>
            <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
            />
            <div className="poke-text">
                <div style={{ fontSize: "5vh", textTransform: 'capitalize', fontWeight: 600 }}>
                    {pokemon.name}
                    <span style={{ fontSize: "4vh", color: '#333', fontWeight: "normal" }}>#{pokemon.id}</span>
                </div>
                <span style={{ textTransform: 'capitalize' }}>
                    Abilities: { abilities }
                    <br />
                    Types: { primary }{ secondary ? `, ${secondary}` : '' }
                    <br />
                    Height: { pokemon.height }
                    <br />
                    Weight: { pokemon.weight }
                    <br />
                    {statArray}
                </span>
            </div>
        </div>
    )
}

export default PokemonFull
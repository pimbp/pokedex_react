import React from 'react';
import { useState, useEffect } from "react";
import styles from "./PokemonTile.module.css"
import { Link } from 'react-router-dom';
import { TYPE_COLORS } from '../../App';

const PokemonTile = ({ pokemon }) => {
	const [ pokemonState, setPokemonState ] = useState()

	useEffect(() => {
			fetch(pokemon.url)
				.then(response => response.json())
				.then(data => setPokemonState(data))
		}, [])

	if (!pokemonState) return <div className="pokemon">loading...</div>;

	const types = pokemonState.types.map(t => t.type.name);
	const primary = types[0] || 'normal';
	const secondary = types[1] || null;

	const primaryColor = TYPE_COLORS[primary] || TYPE_COLORS.normal;
	const secondaryColor = secondary ? (TYPE_COLORS[secondary] || '#ccc') : '#ccc';

	const background = `linear-gradient(135deg, ${primaryColor} 30%, ${secondaryColor} 70%)`;

	return (
		<Link to={`/pokemon/${pokemonState.id}`} state={pokemonState} className='pokemon-link'>
			<div className='pokemon' style={{ background }}>
				<img
					src={pokemonState.sprites.front_default}
					alt={pokemonState.name}
				/>
				<div style={{ fontSize: "2vh", textTransform: 'capitalize', fontWeight: 600 }}>{pokemonState.name}</div>
				<div style={{ fontSize: "1.5vh", color: '#333' }}>#{pokemonState.id}</div>
			</div>
		</Link>
	);
}

export default PokemonTile;

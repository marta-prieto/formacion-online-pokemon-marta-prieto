import React from "react";
import PropTypes from 'prop-types';


/* const PokeTypes = props => {
    const { pokemons } = props;
	return pokemons.types.map((type, index) => {
		return (
			<li className='pokemons__types' key={index}>
				{type}
			</li>
		);
	});
}; */
const PokeCard = props => {
  const { pokemons } = props;
  return (
    <div className="pokemon__card">
      <h1 className="pokemon__name">{pokemons.name}</h1>
      <img className="pokemon__image" src={pokemons.image} alt=""/>
      <p className="pokemon_types">{pokemons.type}</p>
      <h2 className='pokemon__id'>ID / {pokemons.id}</h2>
     {/*  <ul className='pokemons__types'>{PokeTypes(props)}</ul> */}
    </div>
  );
};

PokeCard.propTypes = {
    pokemons: PropTypes.object.isRequired
}


export default PokeCard;



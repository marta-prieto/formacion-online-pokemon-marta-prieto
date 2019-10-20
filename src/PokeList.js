import React from "react";
import PokeCard from "./PokeCard";
import PropTypes from 'prop-types';

const PokeList = props => {
  const { pokemons, filter } = props;
  return (
    <ul className="pokemon__list">
      {pokemons
        .filter(pokemonFilter =>
          pokemonFilter.name.toUpperCase().includes(filter.toUpperCase())
        )
        .map((pokemons, index) => {
          return (
            <li key={index} className="pokemon__item">
              <PokeCard pokemons={pokemons} />
            </li>
          );
        })}
    </ul>
  );
};

PokeList.propTypes = {
    pokemons: PropTypes.array.isRequired,
    filter: PropTypes.string.isRequired
}

export default PokeList;







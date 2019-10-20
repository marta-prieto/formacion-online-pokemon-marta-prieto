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
      <img className="pokemon__image" src={pokemons.image} alt=""/>
      <p className='pokemon__id'>ID / {pokemons.id}</p>
      <h1 className="pokemon__name">{pokemons.name}</h1>
      <p className="pokemon__types">{pokemons.type}</p>
      {/* 
      <ol className="main-list__type">
            {this.props.pokeType.map((type, index) => {
              return (
                <li className="list__type" key={index}>{type}
                </li>
              );

            })}
          </ol>
     <ul className='pokemons__types'>{PokeTypes(props)}</ul>  */}
    </div>
  );
};

PokeCard.propTypes = {
    pokemons: PropTypes.object.isRequired
}


export default PokeCard;



import React from "react";
import PropTypes from 'prop-types';

const PokeFilter = props => {
    const {getPokemons, filter} = props;
  return (
    <label htmlFor="pokemon">
      <input
        onChange={getPokemons}
        type="text"
        value={filter}
        className="pokemon__input"
        placeholder="Filtra pokemons por nombre..."
      />
    </label>
  );
};

PokeFilter.propTypes = {
    getPokemons: PropTypes.func.isRequired,
}
export default PokeFilter;


/* 

import React from 'react';
import PropTypes from 'prop-types';

const PokeFilter = (props) => {
        const { getFilter } = props;
		return (
			<div>
				<label htmlFor='pokefilter'>
					<input className='input'
						type='text'
						id='name'
						name='name'
						onChange={getFilter}
						placeholder='Filtra pokemons por nombre...'
					/>
				</label>
			</div>
		);
	}



PokeFilter.propTypes = {
    getFilter: PropTypes.func
}
export default PokeFilter; */
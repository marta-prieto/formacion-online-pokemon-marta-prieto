import React from 'react';
import PropTypes from 'prop-types';

const PokeFilter = (props) => {
    const { getFilter } = props;
    return (
        <div>
            <label>
                <input
                    className="input__filter"
                    type="text"
                    onChange={getFilter} />
            </label>
        </div>
    );
}
export default PokeFilter;
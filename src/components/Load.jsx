import React from 'react';
import PropTypes from 'prop-types';

const SimpsonsFetch = ({onClick}) => (
    <>
        <h2>Get a single Simpsons quote</h2>
        <button onClick={onClick}>Search</button>

    </>
)

SimpsonsFetch.propTypes = {
    onClick: PropTypes.func.isRequired,
}

export default SimpsonsFetch;
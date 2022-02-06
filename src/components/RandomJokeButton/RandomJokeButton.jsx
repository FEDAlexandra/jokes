import React from 'react';

const RandomJokeButton = (props) => {
    const { 
        value, 
        handlerGetJokeByState, } = props;
        

    return (
        <button className='btn btn-outline-primary' onClick={handlerGetJokeByState}>
            {value}
        </button>
    );
};

export default RandomJokeButton;
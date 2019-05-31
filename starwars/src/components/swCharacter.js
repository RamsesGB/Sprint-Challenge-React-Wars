import React from 'react';
import './StarWars.css';

const SwCharacter = props => {
    return (
        <div className='studentCard'>
            <h1>{props.name}</h1>
            <p><strong>Height:</strong> {props.height}</p>
            <p><strong>Weight:</strong> {props.weight}</p>
            <p><strong>Hair:</strong> {props.hair}</p>
            <p><strong>Skin:</strong> {props.skin}</p>            
        </div>
    )
}

export default SwCharacter;
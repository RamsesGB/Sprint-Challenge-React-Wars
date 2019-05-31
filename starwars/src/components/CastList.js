import React from 'react';
import SwCharacter from './swCharacter';
import './StarWars.css';



const CastList = props => {
    return (
        <div className='castListBox'>
            {/* Mapping over the API array in order to retrieve necessary info */}
            {props.data.map(char =>{
                return(
                    <SwCharacter
                    // passing specific info from API as props to swCharacters.js file
                    key={char.created}
                    name={char.name}
                    height={char.height}
                    weight={char.mass}
                    hair={char.hair_color}
                    skin={char.skin_color}
                    />
                );
            })}

        </div>
    )
}

export default CastList;
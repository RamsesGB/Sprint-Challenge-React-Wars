import React from 'react';
import SwCharacter from './swCharacter';
import './StarWars.css';



const CastList = props => {
    return (
        <div className='castListBox'>
            {props.data.map(char =>{
                return(
                    <SwCharacter
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
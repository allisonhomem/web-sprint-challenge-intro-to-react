import React from 'react';
import LearnMore from './LearnMore.js';

const Character = (props) => {
    const { character } = props;

    return(
        //styled div displays each character's name and a button to let the user choose to learn more
        <div>
            <h2>{character.name}</h2>

            {/* passing info through props to file with button function */}
            <LearnMore character={character} />
        </div>
    );
}

export default Character;

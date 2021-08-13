import React, { useState } from 'react';
import CharacterInfo from './CharacterInfo.js';
import styled from 'styled-components';
import theme from '../theme/index.js';

const LearnMore  = (props) => {
    //grabs object from parent using props
    const { character } = props;

    //creates stateful variable for button
    const [ enabled, setEnabled ] = useState(true);

    //function for handling click event display
    const clicky = () => {
        setEnabled(!enabled);
    };

    return(
        <div>
           {enabled && <button onClick={clicky}>about</button>} 
           {!enabled && <CharacterInfo character={character}/>}
           {!enabled && <button onClick={clicky}>- see less</button>}
        </div>
    );
}

export default LearnMore;
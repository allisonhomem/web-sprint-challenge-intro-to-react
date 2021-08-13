import React, { useState } from 'react';
import CharacterInfo from './CharacterInfo.js';
import styled from 'styled-components';
import theme from '../theme/index.js';

const LearnMore  = (props) => {
    //grabs object from parent using props
    const { character } = props;

    //CSS stylings from styled components
    //styled box
    const StyledBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    `;

    //styled buttons
    const StyledButton = styled.button `
    font-family: ${pr => pr.theme.fontMain};
    background-color: ${pr => pr.theme.yellowColor};
    color: ${pr => pr.theme.darkColor};
    font-size: 1rem;
    padding: 2%;
    align-self: flex-end;
    `;

    //creates stateful variable for button
    const [ enabled, setEnabled ] = useState(true);

    //function for handling click event display
    const clicky = () => {
        setEnabled(!enabled);
    };

    return(
        <StyledBox theme={theme}>
           {enabled && <StyledButton theme={theme} onClick={clicky}>about</StyledButton>} 
           {!enabled && <CharacterInfo character={character}/>}
           {!enabled && <StyledButton onClick={clicky}>- see less</StyledButton>}
        </StyledBox>
    );
}

export default LearnMore;
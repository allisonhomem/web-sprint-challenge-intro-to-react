import React from 'react';
import LearnMore from './LearnMore.js';
import styled from 'styled-components';
import theme from '../theme/index.js';

const Character = (props) => {
    //grabs object from parent using props
    const { character } = props;

    //CSS stylings using styled components
    //Styled character box
    const StyledBox = styled.div `
    background-color: ${pr => pr.theme.lightColor};
    opacity: .5;
    padding: 1% 2%;
    margin: 2%;
    width: 70%;
    `;

    //Styled name and button container
    const StyledNameBox = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2%;
    `;

    //styled name header
    const StyledName = styled.h2 `
    font-weight: bold;
    color: ${pr => pr.theme.darkColor};
    padding: 0 2%;
    `;
    return(
        //styled div displays each character's name and a button to let the user choose to learn more
        <StyledBox theme={theme}>
            <StyledNameBox theme={theme}>
              <StyledName theme={theme}>{character.name}</StyledName>

              {/* passing info through props to file with button function */}
              <LearnMore character={character} />
            </StyledNameBox>
        </StyledBox>
    );
}

export default Character;

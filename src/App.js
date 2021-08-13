import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Character from './components/Character.js';
import './App.css';
import styled from 'styled-components';
import theme from '../src/theme/index.js';

const App = () => {
  //creating stateful variable to hold array of characters
  const [ characters, setCharacters ] = useState([]);

  //CSS styling using styled-components
  //App stylings
  const StyledApp = styled.div `
  padding-left: 2%;
  font-family: ${pr => pr.theme.fontMain}, sans-serif;
  color: ${pr => pr.theme.mediumColor};
  `;

  //Header stylings
  const StyledHeader = styled.h1 `
  font-size: 3rem;
  text-shadow: 2px 2px ${pr => pr.theme.darkColor};
  letter-spacing: 3px;
  `;
  
  //getting data from API with axios, useEffect makes sure it's only attempted once
  //.then makes sure the information is only stored in the variable after promise fulfilled and .catch reports errors
  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
         .then(res => {
           setCharacters(res.data);
         })
         .catch(err => {
           console.error('uh-oh... failed to retrieve data :(')
         })
  }, [])
  

  return (
    <StyledApp theme={theme}>
      <StyledHeader theme={theme}>Characters of StarWars</StyledHeader>
      
      {/* loops over array to create a character card for each object, passing props to child */}
      {characters.map(item => <Character character={item}/>)}
    </StyledApp>
  );
}

export default App;

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Character from './components/Character.js';
import './App.css';

const App = () => {
  //creating stateful variable to hold array of characters
  const [ characters, setCharacters ] = useState([]);
  
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
  
  //REMOVE BEFORE SUBMIT - JUST FOR VIEWING DATA AND CHECKING THAT SETCHARACTERS WORKED
  console.log(characters);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      
      {/* loops over array to create a character card for each object, passing props to child */}
      {characters.map(item => <Character character={item}/>)}
    </div>
  );
}

export default App;

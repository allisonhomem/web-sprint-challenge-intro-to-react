import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CharacterInfo = (props) => {
    //grabs object from parent using props
    const { character } = props;

    //stateful variables for storing info that was acquired via axios
    const [ planet, setPlanet ] = useState('unknown');
    const [ species, setSpecies ] = useState('human');
    const [ starships, setStarships ] = useState([]);
   
    
    //function to get homeplanet info using axios and useEffect to prevent multiple data grabs
    useEffect(() => {
        axios.get(character.homeworld)
             .then(res => {
                 setPlanet(res.data.name);
             })
             .catch(err => {
                 console.error('uh-oh... failed to retrieve data');
             })
    },[]);

    //function to get species info using axios and useEffect to prevent multiple data grabs
    useEffect(() => {
        axios.get(character.species)
             .then(res => {
                (character.species.length!==0) && setSpecies(res.data.name);
             })
             .catch(err => {
                console.error('uh-oh... failed to retrieve data');
             })
        },[]);

    //function to get starships info using axios and useEffect to prevent multiple data grabs
    const theShips = (character.starships.length!==0) && character.starships.map(ship => {
        useEffect(() => {
            axios.get(ship)
                 .then(res => {
                    console.log(res);
                 })
                 .catch(err => {
                    console.error('uh-oh... failed to retrieve data');
                 })
        }, []);
    })

    return(
        <div>
            <p>Born: {character.birth_year}</p>
            <p>Species: {species}</p>
            <p>Home Planet: {planet}</p>
            <p>Stars in: {character.films.map((film) => {return `"${film}", `})}</p>
            <p>Seen flying: {(character.starships.length !== 0) ? theShips.map(ship => {return `${ship}, `}):`never`}</p>
        </div>
    );
}

export default CharacterInfo;
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import Character from './components/Character'
import './App.css';
const BASE_URL = 'https://swapi.dev/api/people/'

const StyledHeader = styled.h1`
  background-color: ${pr => pr.theme.electricBlue};
  padding: ${pr => pr.theme.smallPadding};
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [people, setPeople] = useState([])
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
useEffect(() => {
  axios.get(`${BASE_URL}`)
    .then(res => {
      console.log(res)
      setPeople(res.data.results)
    })
    .catch(err => {
      console.log(err)
      console.log("ERROR");
    })
},[])

  return (
    <div className="App">
      <StyledHeader className="Header">Star Wars Characters</StyledHeader>
      {
        people.map(charac => {
          return <Character chFacts = {charac} />
        })
      }
    </div>
  );
}

export default App;

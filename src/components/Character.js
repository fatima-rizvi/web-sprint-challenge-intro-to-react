// Write your Character component here
import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

const StyledCharac = styled.div`
    color: "yellow";
    background-color: "white";
    border: 10px solid "yellow";
    &:hover {
        transform: scale(1.1);
    }
`

export default function Character( props ) {
    const { chFacts } = props
    console.log(chFacts)

    return (
        <StyledCharac className = 'character'>
            <h3>{chFacts.name}</h3>
            <div className = 'ch-attrs'>
                <p>Gender: {chFacts.gender}</p>
                <p>Birth Year: {chFacts.birth_year}</p>
                <p>Height: {chFacts.height}</p>
                <p>Weight: {chFacts.mass}</p> 
            </div>
        </StyledCharac>

    )

}

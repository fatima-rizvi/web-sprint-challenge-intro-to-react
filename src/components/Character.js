// Write your Character component here
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components'

const kf = keyframes`
  100% {
    opacity: 1;
  }
`

const StyledCharac = styled.div`
    opacity: 0;
    animation: ${kf} 1s forwards;
    color: ${pr => pr.theme.yellow};
    transform: scale(0.8);
    background-color: ${pr => pr.theme.black};
    border: 10px solid ${pr => pr.theme.yellow};
    transition: all 0.3s ease-in-out;
    &:hover {
        transition: all 0.3s ease-in-out;
        transform: scale(0.99);
    }
`

export default function Character( props ) {
    const { chFacts } = props

    return (
        <StyledCharac className = 'character'>
            <h2>{chFacts.name}</h2>
            <div className = 'ch-attrs'>
                <p>Gender: {chFacts.gender}</p>
                <p>Birth Year: {chFacts.birth_year}</p>
                <p>Height: {chFacts.height}</p>
                <p>Weight: {chFacts.mass}</p> 
            </div>
        </StyledCharac>

    )

}

// Write your Character component here
import React, { useState, useEffect } from 'react';
import styled from 'styled-components'


// const Character = ({ info }) => (
//     <div className='character'>
//       {info.name}
//     </div>
//   )

export default function Character( props ) {
    const { chFacts } = props
    console.log(chFacts)

    return (
        <div className = 'character'>
            <h3>{chFacts.name}</h3>
            <div className = 'ch-attrs'>
                <p>Gender: {chFacts.gender}</p>
                <p>Birth Year: {chFacts.birth_year}</p>
                <p>Height: {chFacts.height}</p>
                <p>Weight: {chFacts.weight}</p> 
            </div>
        </div>

    )

}

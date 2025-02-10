import React from 'react'
import { useFectch } from '../hooks'

export const MultipleCustomHook = () => {

    // no de debe llamar aqui por que se ejecutara en cada renderizado
    // fetch('https://pokeapi.co/api/v2/pokemon/1');

    useFectch();

    return (
        <div>MultipleCustomHook</div>
    )
}

import React from 'react'
import { useFectch } from '../hooks'

export const MultipleCustomHook = () => {

    // no de debe llamar aqui por que se ejecutara en cada renderizado
    // fetch('https://pokeapi.co/api/v2/pokemon/1');

    const { data, isLoading, hasError } = useFectch('https://pokeapi.co/api/v2/pokemon/1');

    return (
        <>
            <h1>Informacion de Pokémon</h1>
            <hr/>

            { isLoading && <p>Cargando...</p> }

            <h2>{ data?.name }</h2>

            {/* <pre>
                { JSON.stringify(data, null, 2) }
            </pre> */}

        </>
    )
}

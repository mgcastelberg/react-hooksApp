import React, { useEffect, useState } from 'react'
import { use } from 'react';

export const useFectch = () => {

    // Estado Inicial
    const [state, setState] = useState({
        data:null,
        isLoading:true,
        hasError:false,
        error:null
    });

    // Llamaremos a la API desde el useEffect, para que solo se dispare una vez
    useEffect(() => {
        getFetch();
    }, []);

    const getFetch = async () => {
        const resp = await fetch('https://pokeapi.co/api/v2/pokemon/1');
        const data = await resp.json();

        console.log(data);
    }

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    }
}

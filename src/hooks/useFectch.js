import React, { useEffect, useState } from 'react'
import { use } from 'react';

export const useFectch = (url) => {

    // 'https://pokeapi.co/api/v2/pokemon/1'

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
    }, [url]);

    const setLoadingState = () => {
        setState({
            data:null,  
            isLoading:true,
            hasError:false, 
            error:null
        });
    }

    const getFetch = async () => {

        setLoadingState();

        const resp = await fetch(url);

        await new Promise(resolve => setTimeout(resolve, 2000)); // Simulando una carga de 2 segundos

        if (!resp.ok) {
            setState({
                data:null,
                isLoading:false,
                hasError:true,
                error: {
                    code: resp.status,
                    message: resp.statusText
                }
            });
            return; // para que ya no se ejecute el código de abajo
        }

        const data = await resp.json();

        setState({
            data,
            isLoading:false,
            hasError:false,
            error:null
        });

        // console.log(data);

        // Manejo del cache

    }

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    }
}


// se recomienda usar al principio del nombre del archivo use, por que es un custom hook

import { useState } from "react";

export const useForm = ( initialForm = {} ) => {

    const [formState, setFormState] = useState( initialForm );
    
    const onInputChange = ( {target} ) => {
        // console.log(event.target.value);
        const { name, value } = target;
        console.log({name, value});
        setFormState({
            ...formState,
            [name]: value,
        });
    }

    return {
        formState,
        onInputChange,
    }
}

import { useEffect, useState } from "react"

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Manuel',
        email: 'jmgc@virket.com',
    });

    const { username, email } = formState;

    const onInputChange = ( {target} ) => {
        // console.log(event.target.value);
        const { name, value } = target;
        console.log({name, value});
        setFormState({
            ...formState,
            [name]: value,
        });
    }

    // // Se llama cada vez que se renderiza el componente
    // useEffect(() => {
    //     console.log('useEffect called');
    // });

    // Si le añadimos el array vacio ,[] solo se ejecutara una vez
    useEffect(() => {
        console.log('useEffect called');
    },[]); 

    // Una de las recomendaciones de React es que se debe de tener un efecto para cada cosa que se quiera hacer
    useEffect(() => {
        console.log('formState changed');
    },[formState]);

    // Una de las recomendaciones de React es que se debe de tener un efecto para cada cosa que se quiera hacer
    useEffect(() => {
        console.log('email changed');
    },[email]);

  return (
    <>
        <h1>Formulario Simple</h1>
        <hr />
        <input 
            type="text"
            className="form-control"
            placeholder="Nombrex"
            name="username"
            value={ username }
            onChange={ onInputChange }
        />
        <input 
            type="email"
            className="form-control"
            placeholder="Ingrese su correo"
            name="email"
            value={ email }
            onChange={ onInputChange }
        />
    </>
  )
}

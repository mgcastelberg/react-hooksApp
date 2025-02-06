import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

    const {formState, onInputChange, onResetForm} = useForm({
        username: 'Manuel',
        email: '',
        password: '',
    });

    const { username, email, password } = formState;

    return (
        <>
            <h1>Formulario Con Custom Hook</h1>
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
            <input 
                type="password"
                className="form-control"
                placeholder="Contraseña..."
                name="password"
                value={ password }
                onChange={ onInputChange }
            />

            <button onClick={ onResetForm } className="btn btn-primary mt-2 shadow">Borrar</button>

        </>
    )
}

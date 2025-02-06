import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

    const {formState, onInputChange} = useForm({
        username: 'Manuel',
        email: 'jmgc@virket.com',
        password: '123456',
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

        </>
    )
}

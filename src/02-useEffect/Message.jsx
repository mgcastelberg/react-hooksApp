import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({x:0, y:0}); // estado inicial

    useEffect(() => {
        // console.log('Mensaje montado');

        
        // Fuga de memoria
        // window.addEventListener('mousemove', (e) => { // fuga de memoria
        //     console.log(':)');
        // });
        
        // Solucion fuga de memoria: creamos referencia a la funcion
        const onMouseMove = ({x,y}) => {
          const coords = {x,y};
          console.log(coords);
          setCoords({x,y});
        }
        window.addEventListener('mousemove', onMouseMove); // lo mandamos por referencia

        return () => {
            // Como ya tenemos la referencia a la funcion, podemos desmontarla 
            window.removeEventListener('mousemove', onMouseMove); // lo borramos por referencia
            console.log('Mensaje desmontado');
        };
    }, []);

  return (
    <>
        <h1>useEffect - Precauciones</h1>
        <h3>Usuario ya existe</h3>
        <p>{JSON.stringify(coords)}</p>
    </>
  )
}

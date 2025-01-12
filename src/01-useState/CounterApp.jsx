import { useState } from "react"

export const CounterApp = () => {

    const [counter, setCounter] = useState(10);
    const [objeto, setObjeto] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30
    });

    const [objetox, setObjetox] = useState({
        contador1: 11,
        contador2: 22,
        contador3: 33
    });

    const { contador1, contador2, contador3 } = objetox;

  return (
    <>
        <hr />
        <h2>Counter: { counter }</h2>
        <button className='btn btn-primary' onClick={ () => setCounter( counter - 1) }>-1</button>
        <button className='btn btn-primary' onClick={ () => setCounter( counter + 1 ) }>+1</button>

        <hr />
        <h2>CounterInObj1: { objeto.counter1 }</h2>
        <h2>CounterInObj2: { objeto.counter2 }</h2>
        <h2>CounterInObj2: { objeto.counter3 }</h2>
        <button className='btn btn-primary' onClick={ () => setObjeto({ 
            counter1: objeto.counter1 + 1, 
            counter2: objeto.counter2, 
            counter3: objeto.counter3
        }) }>+1</button>
        <button className='btn btn-primary' onClick={ () => setObjeto({ 
            counter1: objeto.counter1, 
            counter2: objeto.counter2 + 1, 
            counter3: objeto.counter3 
        }) }>+1</button>
        <button className='btn btn-primary' onClick={ () => setObjeto({ 
            counter1: objeto.counter1, 
            counter2: objeto.counter2,
            counter3: objeto.counter3 + 1 
        })  }>+1</button>

        <hr />
        <h2>CounterInObjx1: { contador1 }</h2>
        <h2>CounterInObjx2: { contador2 }</h2>
        <h2>CounterInObjx3: { contador3 }</h2>
        <button className='btn btn-primary' onClick={ () => setObjetox({ 
            ...objetox,
            contador1: contador1 + 1
        }) }>+1</button>
        <button className='btn btn-primary' onClick={ () => setObjetox({ 
            ...objetox, 
            contador2: contador2 + 1
        }) }>+1</button>
        <button className='btn btn-primary' onClick={ () => setObjetox({ 
            ...objetox,
            contador3: contador3 + 1 
        })  }>+1</button>
    </>
  )
}

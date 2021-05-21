import React from 'react';
import {useState} from 'react';

const ItemCounts = ({initial , stock}) => {
    const [counter, setCounter] = useState (initial);

    const updateCounter = (value) =>{
        if (stock >= counter + 1) {
            setCounter(counter + value);
        } else {

        }
        
          
        }
    
    console.log(setCounter)    
    return <>
        <h5>Contando</h5>
        <button onClick = {() => updateCounter(-1)}>Restar Uno</button>
        <button onClick = {() => updateCounter(1)}>Sumar Uno</button>
        Counter = {counter}
    </>
}

export default ItemCounts

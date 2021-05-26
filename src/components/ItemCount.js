import React from 'react';
import {useState} from 'react';

const ItemCounts = ({initial , stock}) => {
    const [counter, setCounter] = useState (initial);
      

    const updateCounter = (value) =>{
                
        if ((counter > 0 && value === -1 ) || (counter < stock && value === 1)){
            setCounter(counter + value);
        }
    }

    return <div>
        <h5>Contando</h5>
        <button onClick = {() => updateCounter(-1)}>Restar Uno</button>
        <button onClick = {() => updateCounter(1)}>Sumar Uno</button>
        Counter = {counter}
    </div>;
}

export default ItemCounts

import React from 'react';
import {useState} from 'react';
import './styles/itemCounts.css'

const ItemCounts = ({initial , stock}) => {
    const [counter, setCounter] = useState (initial);
      
    const addCount = () => {
        setCounter(counter + 1);
    }

    const lessCount = () => {
        setCounter(counter - 1);
    }
    
    return (
        <div className='itemCountMain'>
            <div className='itemCountContainer'>
                <button onClick = {lessCount} disabled={counter === 1 && 'disabled'}>-</button>
                <span className='number'>{counter}</span>
                <button onClick = {addCount} disabled={counter === stock && 'disabled'}>+</button>
            </div>
        </div>
    )
}

export default ItemCounts

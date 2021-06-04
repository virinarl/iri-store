import React from 'react';
import ItemCounts from '../ItemCount';
import './Styles/item.css';


const Items = ({title, price, url, stock, key, descripcion}) =>{
    return (
        <div key={key} className='itemContainer'>
            <img src={url} alt={title} className='itemPhoto'/>
            <div>
                <h3>{title}</h3>
                <p>${price}</p>
                <p>{descripcion}</p>
                <div className='addItem'>
                    <ItemCounts initial={1} stock={stock} />
                </div>
            </div>
        </div>
    )
};

export default Items
import React from 'react';
import ItemCounts from './ItemCount';


const Items = ({title, price, url, stock}) =>{
    return (
        <div>
            <img src={url} alt={title} />
            <div>
                <h3>{title}</h3>
                <p>${price}</p>
                <ItemCounts initial={1} stock={stock} />
            </div>
        </div>
    )
};

export default Items
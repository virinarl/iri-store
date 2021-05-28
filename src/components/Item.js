import React from 'react';


const Items = ({title, price, url}) =>{
    return (
        <div>
            <img src={url} alt={title} />
            <div>
                <h3>{title}</h3>
                <p>${price}</p>
            </div>
        </div>
    )
};

export default Items
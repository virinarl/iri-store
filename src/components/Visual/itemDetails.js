import React from 'react';


const itemDetails = ({titulo, descripcion, precio, url}) =>{
    return (
        <div>
            <h1>{titulo}</h1>
            <img src={url} alt={titulo} />
            <p>{descripcion}</p>
            <p>${precio}</p>
        </div>
    );
}

export default itemDetails

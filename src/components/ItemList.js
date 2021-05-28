import React from 'react';
import { useEffect, useState } from 'react';
import Items from './Item';
import Productos from '../data/infoProductos';
import ItemCounts from './ItemCount';


const ItemList = () => {
    
    const[productos, setProductos] = useState([]);

    //Promise

    const obtenerProductos = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Productos);
        }, 2000);
    })

    //async
    const ejecutarPromise = async () => {
        try {
            const result = await obtenerProductos;
            setProductos(result);
        } catch (error){
            alert('No pudimos cargar los productos');
        }
    }

    useEffect(() => {
        ejecutarPromise();
    }, [])
    
    return (
        productos.map((producto) => (
            <Items
                key={producto.id}
                title={producto.title}
                price={producto.price}
                url={producto.pictureUrl}
                stock={producto.stock}
            />
            
        )
        ));

};

export default ItemList


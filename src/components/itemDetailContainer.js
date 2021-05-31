import React from 'react';
import { useEffect, useState } from 'react';
import Productos from '../data/infoProductos';

const itemDetailContainer = () => {
    const[item, setItem] = useState([]); 

    const getItemById = (id) => Productos.find((product) => product.id === id); 
        
    const getItems = (condition) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const product = getProductById(condition);
                resolve(product)
            }, 2000);
        });
    }


    const obtainItemById = async (condition) => {
        try {
            const result = await getItems(condition);
            setItem(result);
        } catch (error){
            alert('No pudimos cargar el producto buscado');
        }
    };

    useEffect(() => {
        obtainItemById(1).then(item => setItem(item));
        console.log(item);
    }, [])

    return ( 
        <div>
            
        </div>
    )
}

export default itemDetailContainer


import React from 'react';
import { useEffect, useState } from 'react';
import Items from './Item';

const misProductos =
    [{id:"1",
    title:"Herramientas para doblar",
    price:"10$",
    pictureUrl:"https://i.ebayimg.com/images/g/UBUAAOSwnQ5eilpK/s-l300.jpg"},
    {id:"2",
    title:"Papeles",
    price:"10$",
    pictureUrl:"https://5.imimg.com/data5/FE/UD/ZP/SELLER-197076/origami-1-500x500.jpeg"},
    {id:"3",
    title:"Tijera",
    price:"10$",
    pictureUrl:"https://images-na.ssl-images-amazon.com/images/I/31F8bPID0PL._AC_SY1000_.jpg"}];


const ItemList = () => {
    
    const[productos, productoUpdated] = useState(null);

    useEffect(() => {
        const task = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(misProductos);
                },2000);
            });
        task.then((response) => response.json())
        .then((results) =>{
            productoUpdated(results);
        }).catch((e) => {
            console.log(e);
        });
    }, []);
    
    return (
        productos?.map((producto) => (
            <Items
                key={producto.id}
                title={producto.title}
                price={producto.price}
                url={producto.pictureUrl}
            />

        )));

};

export default ItemList


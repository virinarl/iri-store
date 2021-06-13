import React, { useState } from 'react';
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const AddToCartButton = (id, stock) => {
    const [countItem, setCountItem] = useState(null)
    console.log(countItem)
    return (
        <div key={id}>
            {!countItem && (
            <ItemCount
            id= {id}
            stock={stock}
            initial={1}
            setCount={setCountItem}
            />
        )}
        {countItem && (
            <Link to="/cart">
            <button>Finalizar Compra</button>
            </Link>
                )}
        </div>
    )
}

export default  AddToCartButton
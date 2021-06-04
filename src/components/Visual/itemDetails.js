import React from 'react';
import ItemCount from '../ItemCount';

import './Styles/itemDetails.css';

const ItemDetail = ({item}) => {

    return (
        <div className="item-detail-container">
            <div className="item-detail-container__img">
                <img src={item.pictureUrl} alt="imagen del producto en oferta" />
            </div>
            <article className="item-detail-container__detail">
                <h2 className="product-name">{item.title}</h2>
                <span className="price">${item.price}</span>
                <p className="product-description">{item.descripcion}</p>
                <ItemCount
                    stock={item.stock}
                    initial={1}
                />
            </article>
        </div>
    )
}

export default ItemDetail

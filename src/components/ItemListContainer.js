import React from 'react';
import ItemList from './ItemList';
import './styles/itemListContainer.css';

const ItemListContainer = ({greeting}) => {
    return (
        <section className='item-list-container'>
            <h2>{greeting}</h2>
            
            <ItemList />
        </section>
    )
};

export default ItemListContainer
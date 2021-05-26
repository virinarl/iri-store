import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
    return <div>
        <nav className="header">
            <h1>Iri-store</h1>
            <div>
                <p><a href="#">Inicio</a></p>
                <p><a href="#">Productos</a></p>
                <p><a href="#">Nosotros</a></p>
                <p><a href="#">Contacto</a></p>
                <CartWidget />
            </div>
        </nav>
    </div>;
};

export default NavBar
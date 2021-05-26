import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
    return <div>
        <nav className="header">
            <h1>Oriworld</h1>
            <div>
                {["Inicio","Productos","Nosotros","Contacto"].map(element => <p><a href="#">{element}</a></p>)}
                
                <CartWidget />
            </div>
        </nav>
    </div>;
};

export default NavBar
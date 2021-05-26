import React from 'react';
import CartWidget from './CartWidget';

const NavBar = ({menu}) => {
    return <div>
        <nav className="header">
            <h1>Oriworld</h1>
            <div>
                {menu.map(element => <p><a href="#">{element}</a></p>)}
                <CartWidget />
            </div>
        </nav>
    </div>;
};

export default NavBar
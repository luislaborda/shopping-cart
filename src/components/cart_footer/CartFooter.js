import React from 'react';
import { render } from 'react-dom';

/* Functional component */
const CartFooter = ({copyright}) => {
    return(
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#">&copy; {copyright}</a>
        </nav>
    )
}

export default CartFooter;
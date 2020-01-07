import React from 'react';
import Item from './CartItem';
import AddItem from '../add_item/AddItem';

/* Functional component */
const CartItems = ({addToCart, itemsInCart, productList  }) => {
    return (
        <div className="container">
            <h1>Items</h1>
            <div className="list-group">
                <div className="list-group-item">
                <div className="row">
                    <div className="col-md-8">Product</div>
                    <div className="col-md-2">Price</div>
                    <div className="col-md-2">Quantity</div>
                </div>
                </div>
                { itemsInCart.map( (item, i) => <Item key={ i } product={ item.product } quantity={ item.quantity } />) }
            </div>

            <h1> Add to Cart</h1>
            <div className="row">
                <div className="col">
                    <AddItem addToCart={ addToCart} shoppingList={ itemsInCart } products={ productList } />
                </div>
            </div>
        </div>
    )
}

export default CartItems;
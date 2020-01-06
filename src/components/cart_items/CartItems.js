import React from 'react';
import Item from './CartItem';

const CartItems = ({items}) => {

    let itemList = items.map(item => <Item key={ item.id } product={ item.product } quantity={item.quantity} />)

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
                
                { itemList }
            </div>
        </div>
    )
}

export default CartItems;
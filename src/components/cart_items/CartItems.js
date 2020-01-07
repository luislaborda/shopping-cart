import React from 'react';
import Item from './CartItem';
import AddItem from '../add_item/AddItem';

/* Functional component */
export default class CartItems extends React.Component {

    constructor(props) {
        super(props)
        // this.state = { itemsInCart: this.props.itemsInCart }
    }
    
    render () {
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
                    { this.props.itemsInCart.map( (item, i) => <Item key={ i } product={ item.product } quantity={ item.quantity } />) }
                </div>

                <h1> Add to Cart</h1>
                <div className="row">
                    <div className="col">
                        <AddItem addToCart={ this.props.addToCart} shoppingList={ this.props.itemsInCart } products={ this.props.productList } />
                    </div>
                </div>
            </div>
        )
    }
}
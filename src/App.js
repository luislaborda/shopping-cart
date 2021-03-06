import React from 'react';
import Cartheader from './components/cart_header/CartHeader';
import Cartfooter from './components/cart_footer/CartFooter';
import CartItems from './components/cart_items/CartItems';


export default class App extends React.Component {

  state = {
    cartItemsList: [
      { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
      { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
      { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
    ],
    products: [
      { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
      { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
      { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
      { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
      { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
      { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
      { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
      { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
      { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
    ]
  }

  addCartItem = (item) => {
    this.setState({
        cartItemsList: this.state.cartItemsList.concat(item)  
    })
  }
  
  render () {
    return (
      <div className="App">
        <Cartheader />
        <CartItems addToCart={ this.addCartItem } itemsInCart={ this.state.cartItemsList } productList={ this.state.products } />
        <Cartfooter copyright="2020" />
      </div>
    )
  }
}

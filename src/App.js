import React from 'react';
import Cartheader from './components/cart_header/CartHeader';
import Cartfooter from './components/cart_footer/CartFooter';
import CartItems from './components/cart_items/CartItems';

function App() {
  return (
    <div className="App">
      <Cartheader />
      <CartItems />
      <Cartfooter />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import Products from './Products';
import Cart from './Cart';
import {FaShoppingCart} from 'react-icons/fa';

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);
  const [viewProducts, setViewProducts] = useState('')
  const [products] = useState([
    {
      name: 'OPPO MOBILE',
      cost: 199,
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsvx1IJpiHNsI3jgfbzNqlv8JSbCOpc5K4Yg&usqp=CAU',
    },
    {
      name: 'IPHONE',
      cost: 499,
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGLIeDgkunKWAT8aztlcQHjdnJLspJRRmRJw&usqp=CAU',
    },
    {
      
      name: 'REDMI MOBILE',
      cost: 299,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsqsfHeCkAPlYj9d0LMuqwFnh-bErnUP7mOg&usqp=CAU',
    },
    {
      
      name: 'REALME MOBILE',
      cost: 399,
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ZW_aSO7Y_75Uh_iL_8fsk9h3OA_n0JZicg&usqp=CAU',
    },
    {
      
      name: 'SAMSUNG MOBILE',
      cost: 99,
      image:'data:image/jpeg;base64,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',
    },
  ]);
  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const getCartTotal = () => {
    return cart.reduce(
      (sum, { quantity }) => sum + quantity,
      0
    );
  };

  return (
    <div className="App">
      <header>
        <div>
      <button onClick={() => navigateTo(PAGE_PRODUCTS)}>Products </button>
      
      <input type = 'text' 
      value={viewProducts} className ='in' 
      placeholder='Search' 
      onChange={(e) =>setViewProducts(e.target.value)}
      />
      <FaShoppingCart className='shop' onClick={() => navigateTo(PAGE_CART)}><h2>{getCartTotal()}</h2></FaShoppingCart>{getCartTotal()}
      </div>
      </header>
  
      {page === PAGE_PRODUCTS && (
        <Products cart={cart} setCart={setCart} products={products}
        viewProducts = {viewProducts}/>
      )}
      {page === PAGE_CART && (
        <Cart cart={cart} setCart={setCart} />
      )}
    </div>
  );
}

export default App;
import React from 'react';
import './App.css';

export default function Cart({ cart, setCart }) {
  const getTotalSum = () => {
    return cart.reduce(
      (sum, { cost, quantity }) => sum + cost * quantity,
      0
    );
  };

  const setQuantity = (product, amount) => {
    const newCart = [...cart];
    newCart.find(
      (item) => item.name === product.name
    ).quantity = amount;
    setCart(newCart);
  };

  const removeFromCart = (productToRemove) => {
    setCart(
      cart.filter((product) => product !== productToRemove)
    );
  };

  return (
    <>
      <h1>Cart</h1>
      <div className="products">
        {cart.map((product, idx) => (
          <div className="product" key={idx}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <h4>${product.cost}</h4>
            <input
              value={product.quantity}
              onChange={(e) =>
                setQuantity(
                  product,
                  parseInt(e.target.value)
                )
              }
            />
            <div>
            <button className='cart-button'
            onClick={() => removeFromCart(product)}>
              Remove
            </button>
            </div>
           
          </div>
        ))}
        
      </div>
      <div>
      {cart.length > 0 && (
        <button className='cart-button'
        onClick={()=>setCart([])}>Clear Cart</button>
      )}
</div>
      <div className ='total'>Total Cost: ${getTotalSum()}</div>
    </>
  );
}
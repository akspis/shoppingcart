import React from 'react';
import './App.css'

export default function Products(props) {
  const {
    setCart, 
    cart,
    products,
    viewProducts
  } = props 

  const addToCart = (product) => {
    let newCart = [...cart ];
    let itemInCart = newCart.find(
      (item) => product.name === item.name
    );
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
  };

  return (
    <>
      <h1>SMART PHONES</h1>
      <div className="products">
        {products.filter(product =>{
         if(viewProducts === ''){
            return product
          }
          else if(product.name.toLowerCase().includes(viewProducts.toLowerCase())){
            return product
          }
        }).map((product, idx) => (
          <div className="product" key={idx}>
             <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <h4>${product.cost}</h4>
            <div>
            <button className ='prodcut-button'
             onClick={() => addToCart(product)}>
              Add to Cart
            </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
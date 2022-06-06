import { useState } from "react";
const axios = require("axios").default;

const Product = ({ item }) => {
  // Note: this id should come from api

  const [count, setCount] = useState(1);
  const [addToCart, setAddToCart] = useState({});

  const handleDecCount = () => {
    setCount(count - 1);
  };

  const handleCart = (id) => {
    setAddToCart({ productID: id, count: count });
    handleAddCart(id);
  };

  const handleAddCart = (id) => {
    axios(`http://localhost:8080/cartItems`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: {
        productID: id,
        count: count,
      },
    });
  };

  const deleteCart = (id) => {
    // axios(`http://localhost:8080/cartItems/${id}`)
      
  };

  return (
    <div data-cy={`product-${item.id}`} key={item.id} className="singleProduct">
      <h3 data-cy="product-name">{item.name}</h3>
      <h6 data-cy="product-description">{item.description}</h6>
      <button
        data-cy="product-add-item-to-cart-button"
        onClick={() => handleCart(item.id)}
      >
        Add to Cart
      </button>
      <div>
        <button
          data-cy="product-increment-cart-item-count-button"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
        <span data-cy="product-count"> {count} </span>
        <button
          data-cy="product-decrement-cart-item-count-button"
          onClick={handleDecCount}
          disabled={count === 1}
        >
          -
        </button>
        <button
          data-cy="product-remove-cart-item-button"
          onClick={() => deleteCart(item.id)}
        >
          Remove form Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
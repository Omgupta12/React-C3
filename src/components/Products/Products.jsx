import React, { useEffect, useState } from "react";
import Product from "./Product/Product";

const axios = require("axios").default;

const Products = () => {
  const [productsData, setproductsData] = useState([]);

  useEffect(() => {
    axios(`http://localhost:8080/products`).then((r) => {
      setproductsData(r.data);
    });
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <div className="products">
        {productsData.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
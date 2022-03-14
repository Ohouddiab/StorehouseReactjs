import React from "react";
// import{NavLink} from 'react-router-dom'
import "./Products.css";
import Product from "./Product.js";
import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchHandler = async () => {
      await fetch("http://localhost:3030/products")
        .then((res) => res.json())
        .then((data) => setProducts(data.products))
        .catch((err) => console.log(err));
    };
    fetchHandler();
  }, []);
  console.log({ products });
  return (
    <div className="main">
      <ul>
        {products.map((product, key) => (
          <li key={key}>
            <Product
              id={product._id}
              name={product.name}
              image={product.image}
              price={product.price}
              description={product.description}
              quantity={product.quantity}
              creator={product.creator?.fullname}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;

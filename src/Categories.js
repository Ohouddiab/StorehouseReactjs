import React from "react";
import "./Category.css";
import Category from "./Category.js";
import { useEffect, useState } from "react";

const Categories = () => {
  console.log("!)!");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchHandler = async () => {
      await fetch("http://localhost:3030/categories")
        .then((res) => res.json())
        .then((data) => setCategories(data.categories))
        .catch((err) => console.log(err));
    };
    fetchHandler();
  }, []);
  console.log({ categories });
  return (
    <div className="main">
      <ul>
        {categories.map((category, key) => (
          <li key={key}>
            <Category id={category._id} name={category.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;

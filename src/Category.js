import { Button } from "@mui/material";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Categories";
import "./Product.css";
const Category = (props) => {
  const history = useHistory();
  const deleteHandler = async () => {
    await fetch(`http://localhost:3030/categories/${props.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then(() => history.push("categories"))
      .catch((err) => console.log(err));
  };
  console.log(props.id);
  return (
    <div className="product-main">
      <div className="card">
        {props.id}
        <h4>
          {props.name} {props.id}
        </h4>
        <Button onClick={deleteHandler}>Delete</Button>
        <Button>
          <Link className="link-url" to={`/category/${props.id}`}>
            Edit
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Category;

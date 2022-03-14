import { Button } from "@mui/material";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Product";
import "./Product.css";
const Product = (props) => {
  console.log(props.id);
  const history = useHistory();
  const deleteHandler = async () => {
    await fetch(`http://localhost:3030/product/${props.id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then(() => history.push("/products"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="product-main">
      <div className="card">
        <img src={props.image ? props.image : ""} alt={props.name} />
        <h4>{props.name}</h4>
        <h5>{props.description ? props.description : ""}</h5>
        <p>
          price:{props.price} quantity:{props.quantity}
          {props.creator?.fullname ? `creator : ${props.creator.fullname}` : ""}
        </p>
        <Button onClick={deleteHandler}>Delete</Button>
        <Button>
          <Link className="link-url" to={`/product/${props.id}`}>
            Edit
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Product;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Product";
import "./ProductDetail.css";
import {
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
  inputClasses,
} from "@mui/material";
import { useHistory } from "react-router-dom";
const ProductDetail = () => {
  const history = useHistory();

  const [product, setProduct] = useState({});
  const [inputs, setInputs] = useState({});
  const id = useParams().id;

  useEffect(() => {
    const fetchHandler = async () => {
      await fetch(`http://localhost:3030/products/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setProduct(data.product);
          setInputs({
            name: data.product.name,
            description: data.product.description,
            quantity: data.product.quantity,
            price: data.product.price,
            image: data.product.image,
          });
        })
        .catch((err) => console.log(err));
    };
    fetchHandler();
  }, []);

  //   const [inputs, setInputs] = useState({
  //     name: "",
  //     description: "",
  //     quantity: 1,
  //     price: 1,
  //     image: "",
  //   });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(inputs);
    const sendRequest = async () => {
      await fetch(`http://localhost:3030/products/${id}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          name: inputs.name,
          description: inputs.description,
          quantity: inputs.quantity,
          price: inputs.price,
          image: inputs.image,
        }),
      })
        .then((res) => res.json())
        .then(() => history.push("/products"))
        .catch((err) => console.log(err));
    };
    sendRequest();
  };
  return (
    <div>
      <div className="update-form">
        <form onSubmit={submitHandler} className="form-control">
          <TextField
            onChange={handleChange}
            value={inputs.name}
            margin="normal"
            name="name"
            id="outlined-basic"
            // label="Name"
            variant="outlined"
          />
          <TextField
            onChange={handleChange}
            value={inputs.description}
            margin="normal"
            name="description"
            id="outlined-basic"
            // label="Description"
            variant="outlined"
          />
          <TextField
            onChange={handleChange}
            value={inputs.image}
            margin="normal"
            name="image"
            id="outlined-basic"
            // label="Image"
            variant="outlined"
          />
          <TextField
            onChange={handleChange}
            value={inputs.quantity}
            margin="normal"
            name="quantity"
            id="outlined-number"
            // label="Quantity"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            onChange={handleChange}
            value={inputs.price}
            margin="normal"
            name="price"
            id="outlined-number"
            // label="Price"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ProductDetail;

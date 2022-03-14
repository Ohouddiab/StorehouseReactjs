import React, { useState } from "react";
import "./CreateProduct.css";
import { TextField, Button } from "@mui/material";
import { useHistory } from "react-router-dom";
const CreateProduct = () => {
  const history = useHistory();
  const [inputs, setInputs] = useState({
    name: "",
    description: "",
    quantity: 1,
    price: 1,
    image: "",
  });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const sendRequest = async () => {
      await fetch("http://localhost:3030/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: inputs.name,
          description: inputs.description,
          quantity: Number(inputs.quantity),
          price: Number(inputs.price),
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
    <div className="home">
      <form onSubmit={submitHandler} className="form-control">
        <TextField
          onChange={handleChange}
          value={inputs.name}
          margin="normal"
          name="name"
          id="outlined-basic"
          label="Name"
          variant="outlined"
        />
        <TextField
          onChange={handleChange}
          value={inputs.description}
          margin="normal"
          name="description"
          id="outlined-basic"
          label="Description"
          variant="outlined"
        />
        <TextField
          onChange={handleChange}
          value={inputs.image}
          margin="normal"
          name="image"
          id="outlined-basic"
          label="Image"
          variant="outlined"
        />
        <TextField
          onChange={handleChange}
          value={inputs.quantity}
          margin="normal"
          name="quantity"
          id="outlined-number"
          label="Quantity"
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
          label="Price"
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
  );
};

export default CreateProduct;

import React, { useState } from "react";
import "./CreateProduct.css";
import { TextField, Button } from "@mui/material";
import { useHistory } from "react-router-dom";
const CreateCategory = () => {
  const history = useHistory();
  const [inputs, setInputs] = useState({
    name: "",
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
      await fetch("http://localhost:3030/categories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: inputs.name,
        }),
      })
        .then((res) => res.json())
        .then(() => history.push("/categories"))
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
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default CreateCategory;

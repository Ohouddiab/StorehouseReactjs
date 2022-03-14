import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Category";
import "./ProductDetail.css";
import { TextField, Button } from "@mui/material";
import { useHistory } from "react-router-dom";
const CategoryDetail = () => {
  const history = useHistory();

  const [category, setCategory] = useState({});
  const [inputs, setInputs] = useState({});
  const id = useParams().id;

  useEffect(() => {
    const fetchHandler = async () => {
      await fetch(`http://localhost:3030/categories/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setCategory(data.category);
          setInputs({
            name: data.category.name,
          });
        })
        .catch((err) => console.log(err));
    };
    fetchHandler();
  }, []);

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const sendRequest = async () => {
      await fetch(`http://localhost:3030/categories/${id}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
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
    <div>
      <div className="update-form">
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
    </div>
  );
};

export default CategoryDetail;

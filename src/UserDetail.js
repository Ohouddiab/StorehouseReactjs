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
const UserDetail = () => {
  const history = useHistory();

  const [user, setUser] = useState({});
  const [inputs, setInputs] = useState({});
  const id = useParams().id;

  useEffect(() => {
    const fetchHandler = async () => {
      await fetch(`http://localhost:3030/users/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setUser(data.data);
          setInputs({
            fullname: data.fullname,
            email: data.email,
          });
        })
        .catch((err) => console.log(err));
    };
    fetchHandler();
  }, []);

  console.log({ inputs });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.fullname]: e.target.value,
    }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const sendRequest = async () => {
      await fetch(`http://localhost:3030/users/${id}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          fullname: inputs.fullname,
          email: inputs.email,
        }),
      })
        .then((res) => res.json())
        .then(() => history.push("/users"))
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
            value={inputs.fullname}
            margin="normal"
            name="fullname"
            id="outlined-basic"
            // label="Name"
            variant="outlined"
          />
          <TextField
            onChange={handleChange}
            value={inputs.email}
            margin="normal"
            name="email"
            id="outlined-basic"
            // label="Email"
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

export default UserDetail;

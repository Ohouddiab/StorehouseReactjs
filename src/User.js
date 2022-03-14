import { Button } from "@mui/material";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./User";
// import "./User.css";
const User = (props) => {
  const history = useHistory();
  const deleteHandler = async () => {
    await fetch(`http://localhost:3030/user/${props.id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then(() => history.push("/users"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="product-main">
      <div className="card">
        <h4>{props.fullname}</h4>
        <h5>{props.email ? props.email : ""}</h5>
        {/* <Button onClick={deleteHandler}>Delete</Button> */}
        <Button>
          <Link className="link-url" to={`/user/${props.id}`}>
            Edit
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default User;

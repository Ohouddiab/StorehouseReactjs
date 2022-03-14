import React from "react";
// import{NavLink} from 'react-router-dom'
import "./Products.css";
import User from "./User.js";
import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchHandler = async () => {
      await fetch("http://localhost:3030/users")
        .then((res) => res.json())
        .then((data) => setUsers(data.data))
        .catch((err) => console.log(err));
    };
    fetchHandler();
  }, []);
  console.log({ users });
  return (
    <div className="main">
      <ul>
        {users.map((user, key) => (
          <li key={key}>
            <User id={user._id} fullname={user.fullname} email={user.email} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;

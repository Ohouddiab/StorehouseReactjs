import "./App.css";
import Header from "./Headre";
import Products from "./Products";
import ProductDetail from "./ProductDetail";
import CreateProduct from "./CreateProduct";
import Categories from "./Categories";
import CategoryDetail from "./CategoryDetail";
import CreateCategory from "./CreateCategory";
import Users from "./Users";
import User from "./User";
import UserDetail from "./UserDetail";
import { Switch, Route, Redirect } from "react-router-dom";
import React, { useState } from "react";
import Login from "./Login";
import useToken from "./useToken";

function App() {
  const { token, setToken } = useToken();
  console.log({ token });
  if (!token) {
    return <Login setToken={setToken} />;
  }
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
        {/* <Route path="/register" component={Register} /> */}
        {/* <Route path="/forgot-password" component={Forgot} /> */}
        {/* <Route path="/" component={Login} /> */}
        <Route exact path="/">
          <Header />
          {/* <Redirect to="/products" /> */}
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route exact path="/product/:id">
          <ProductDetail />
        </Route>
        <Route exact path="/CreateProduct">
          <CreateProduct />
        </Route>
        <Route exact path="/categories">
          <Categories />
        </Route>
        <Route exact path="/category/:id">
          <CategoryDetail />
        </Route>
        <Route exact path="/CreateCategory">
          <CreateCategory />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/user/:id">
          <UserDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

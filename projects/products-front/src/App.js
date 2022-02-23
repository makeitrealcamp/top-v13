import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
//import ProductList from "./components/ProductList";
import ProductPage from "./pages/products";
import Login from "./components/Login";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Login />
      <ProductPage />
    </div>
  );
}

export default App;

import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import ProductList from "./components/ProductList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ProductList />
    </div>
  );
}

export default App;

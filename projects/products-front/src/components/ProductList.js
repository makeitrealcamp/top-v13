import React, { useEffect } from "react";

const ProductList = () => {
  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => {
        console.log("DATA ", data);
      });
  }, []);

  return <div>PRODUCTOS!!!!</div>;
};

export default ProductList;

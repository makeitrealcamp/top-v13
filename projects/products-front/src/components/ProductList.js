import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card } from "react-bootstrap";

import {
  getAllProductsAsync,
  selectProducts,
  deleteProductAsync,
} from "../slices/productSlices";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch(getAllProductsAsync());
  }, []);

  const updateProduct = (id) => {
    console.log(id);
  };

  const deleteProduct = async (id) => {
    console.log(id);
    await dispatch(deleteProductAsync(id));
    dispatch(getAllProductsAsync());
  };

  return (
    <div>
      {products &&
        products.length > 0 &&
        products.map((product, index) => (
          <Card key={index}>
            <Card.Body>
              {product.name}: {product.price}
              <Button onClick={() => updateProduct(product._id)}>Edit</Button>
              <Button onClick={() => deleteProduct(product._id)}>Delete</Button>
            </Card.Body>
          </Card>
        ))}
    </div>
  );
};

export default ProductList;

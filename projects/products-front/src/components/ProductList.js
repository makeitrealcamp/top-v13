import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "react-bootstrap";

import { getAllProductsAsync, selectProducts } from "../slices/productSlices";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch(getAllProductsAsync());
  }, []);

  return (
    <div>
      {products &&
        products.length > 0 &&
        products.map((product) => (
          <Card>
            <Card.Body>
              {product.name}: {product.price}
            </Card.Body>
          </Card>
        ))}
    </div>
  );
};

export default ProductList;

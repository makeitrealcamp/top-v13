import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card } from "react-bootstrap";
import { CloudinaryContext, Image, Transformation } from "cloudinary-react";

import {
  getAllProductsAsync,
  selectProducts,
  deleteProductAsync,
  productToEdit,
} from "../slices/productSlices";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch(getAllProductsAsync());
  }, []);

  const updateProduct = (product) => {
    dispatch(productToEdit(product));
  };

  const deleteProduct = async (id) => {
    console.log(id);
    await dispatch(deleteProductAsync(id));
    dispatch(getAllProductsAsync());
  };
  console.log("products", products);

  return (
    <div data-test-id="card-list">
      {products &&
        products.length > 0 &&
        products.map((product, index) => (
          <Card key={index}>
            <Card.Body>
              ID: {product._id}, {product.name}: {product.price}
              <Button onClick={() => updateProduct(product)}>Edit</Button>
              <Button onClick={() => deleteProduct(product._id)}>Delete</Button>
              {product.image && (
                <CloudinaryContext cloudName="dbuk6m576">
                  <Image publicId={product.image} width="500px">
                    <Transformation height="400" width="70" crop="fill" />
                  </Image>
                </CloudinaryContext>
              )}
            </Card.Body>
          </Card>
        ))}
    </div>
  );
};

export default ProductList;

import { useEffect } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  createProductAsync,
  getAllProductsAsync,
  selectProductToEdit,
} from "../slices/productSlices";

const EditProduct = ({ show, handleHide }) => {
  const dispatch = useDispatch();
  const productToEdit = useSelector(selectProductToEdit);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { elements } = event.target;

    const product = {
      name: elements[0].value,
      description: elements[1].value,
      price: elements[2].value,
      discount: elements[3].value,
      active: elements[4].checked,
    };

    await dispatch(createProductAsync(product));
    dispatch(getAllProductsAsync());
  };

  useEffect(() => {
    console.log("useeffect....", productToEdit);
  }, [productToEdit]);

  return (
    <Modal show={show} onHide={handleHide}>
      <Modal.Header>
        <Modal.Title>Edit product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Name: </Form.Label>
            <Form.Control required></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Description: </Form.Label>
            <Form.Control required></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Price: </Form.Label>
            <Form.Control type="number" required></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Discount: </Form.Label>
            <Form.Control type="number" required></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Check type="checkbox" label="Active" />
          </Form.Group>
          <Button type="submit">Create</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditProduct;

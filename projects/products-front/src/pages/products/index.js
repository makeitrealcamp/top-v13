import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

import ProductList from "../../components/ProductList";
import CreateProduct from "../../components/CreateProduct";
import EditProduct from "../../components/EditProduct";

import { selectShowModalToEdit } from "../../slices/productSlices";

const ProductPage = () => {
  const [showCreateProduct, setShowCreateProduct] = useState(false);
  const showModalToEdit = useSelector(selectShowModalToEdit);

  const handleShowCreateProduct = () => {
    setShowCreateProduct(true);
  };

  const handleHideCreateProduct = () => {
    setShowCreateProduct(false);
  };

  return (
    <Container>
      <Row>
        <Col lg={2}>
          <Button onClick={handleShowCreateProduct}>Create product</Button>
        </Col>
        <Col>
          <ProductList />
          <CreateProduct
            show={showCreateProduct}
            handleHide={handleHideCreateProduct}
          />
          <EditProduct show={showModalToEdit} />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;

import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import ProductList from "../../components/ProductList";
import CreateProduct from "../../components/CreateProduct";

const ProductPage = () => {
  const [showCreateProduct, setShowCreateProduct] = useState(false);

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
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;

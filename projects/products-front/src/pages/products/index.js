import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import ProductList from "../../components/ProductList";
import CreateProduct from "../../components/CreateProduct";

const ProductPage = () => {
  const [showCreateProduct, setShowCreateProduct] = useState(false);

  const handleCreateProduct = () => {
    setShowCreateProduct(true);
  };

  return (
    <Container>
      <Row>
        <Col lg={2}>
          <Button onClick={handleCreateProduct}>Create product</Button>
        </Col>
        <Col>
          <ProductList />
          <CreateProduct show={showCreateProduct} />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;

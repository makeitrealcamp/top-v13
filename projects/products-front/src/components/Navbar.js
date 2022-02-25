import { Nav } from "react-bootstrap";

const Navbar = () => {
  return (
    <Nav>
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="products">Products</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Navbar;

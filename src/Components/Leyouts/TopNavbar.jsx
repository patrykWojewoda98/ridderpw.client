import "../../ComponentsStyles/TopNavbarStyle.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, Outlet } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const TopNavbar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <Image
                src="../src/Components/Pictures/RidderPW-logo.jpg"
                className="logo"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to={"/Management"}>Zarządzanie</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to={"/Management"}>Zarządzanie</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to={"/Production"}>Produkcja</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to={"/Logistics"}>Logistyka</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to={"/Personnel"}>Kadry</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to={"/Finances"}>Finanse</Link>
              </Nav.Link>
              <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Form inline>
                <Row>
                  <Col xs="auto">
                    <Form.Control
                      type="text"
                      placeholder="Szukaj..."
                      className=" mr-sm-2"
                    />
                  </Col>
                  <Col xs="auto">
                    <Button type="submit">Szukaj</Button>
                  </Col>
                </Row>
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div>
        <Container fluid>
          <Outlet />
        </Container>
      </div>
    </div>
  );
};

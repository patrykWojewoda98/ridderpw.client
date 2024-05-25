import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Accordion from "react-bootstrap/Accordion";
import { CompanySelection } from "./CompanySelection";
import { CategorySelection } from "./CategorySelection";

export const FilterList = () => {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Filtrowanie listy</Accordion.Header>
        <Accordion.Body>
          <Form>
            <Row>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Szukaj po nazwie</Form.Label>
                  <Form.Control type="tekst" placeholder="Szukaj..." />
                </Form.Group>
              </Col>
              <Col sm={2}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Termin od</Form.Label>
                  <Form.Control type="tekst" placeholder="01-01-2024" />
                </Form.Group>
              </Col>
              <Col sm={2}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Termin do</Form.Label>
                  <Form.Control type="tekst" placeholder="01-01-2023" />
                </Form.Group>
              </Col>

              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Szukaj Firmy</Form.Label>
                  <CompanySelection />
                </Form.Group>
              </Col>
              <Col>
                <Form.Label>Szukaj kategorii</Form.Label>
                <CategorySelection />
              </Col>
            </Row>
          </Form>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

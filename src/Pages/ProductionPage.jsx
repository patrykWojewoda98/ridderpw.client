import "../App.css";
import "../ComponentsStyles/AccordionStyle.css";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CompanySelection } from "../Components/PageComponents/CompanySelection";
import { CategorySelection } from "../Components/PageComponents/CategorySelection";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";

export const ProductionPage = () => {
  return (
    <Container>
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

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Numer zlecenia</th>
            <th>Technolog</th>
            <th>Status</th>
            <th>Nazwa produktu</th>
            <th>Liczba sztuk</th>
            <th>Termin realizacji</th>
            <th>Maszyna</th>
            <th>Przewidywany czas obróbki</th>
            <th>Kategoria</th>
            <th>Rysunek techniczny</th>
          </tr>
        </thead>
        {/*Wypełnienie tabeli */}
        <tbody>
          <tr>
            <td>1</td>
            <td>Jan Kowalski</td>
            <td>
              {["radio"].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="Rozpoczeto"
                    name="group2"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    inline
                    label="Nie Rozpoczęto"
                    name="group2"
                    type={type}
                    id={`inline-${type}-2`}
                    defaultChecked
                  />
                </div>
              ))}
            </td>
            <td>Rolka Transportowa</td>
            <td>5</td>
            <td>05-06-2024</td>
            <td>Tokarka CNC</td>
            <td>14h</td>
            <td>Cześci do przemysłu hutniczego</td>
            <td>
              <Link title="Przejdz do rysunku technicznego">
                <Image
                  src="../src/Components/Pictures/TechnicalDrawing.png"
                  className="logo"
                />
              </Link>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Stefan Stefanowicz</td>
            <td>
              {["radio"].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="Rozpoczeto"
                    name="group3"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    inline
                    label="Nie Rozpoczęto"
                    name="group3"
                    type={type}
                    id={`inline-${type}-2`}
                    defaultChecked
                  />
                </div>
              ))}
            </td>
            <td>Komora Spalania</td>
            <td>2</td>
            <td>05-06-2024</td>
            <td>Tokarka CNC</td>
            <td>8h</td>
            <td>Cześci do przemysłu kosmicznego</td>
            <td>
              <Link title="Przejdz do rysunku technicznego">
                <Image
                  src="../src/Components/Pictures/TechnicalDrawing.png"
                  className="logo"
                />
              </Link>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Adam Zwyczajny</td>
            <td>
              {["radio"].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="Rozpoczeto"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    inline
                    label="Nie Rozpoczęto"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                    defaultChecked
                  />
                </div>
              ))}
            </td>
            <td>Obudowa łożyska turbiny wiatrowej</td>
            <td>150</td>
            <td>22-08-2024</td>
            <td>Frezarka CNC</td>
            <td>120h</td>
            <td>Cześci do przemysłu energetycznego</td>
            <td>
              <Link title="Przejdz do rysunku technicznego">
                <Image
                  src="../src/Components/Pictures/TechnicalDrawing.png"
                  className="logo"
                />
              </Link>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

import "../ComponentsStyles/TabsStyle.css";
import "../App.css";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

export const ManagementPage = () => {
  return (
    <Container fluid>
      <Form>
        <Row>
          <Tabs
            defaultActiveKey="newOrder"
            id="management"
            className="mb-3 custom-tabs"
          >
            <Tab
              eventKey="newOrder"
              title="Nowe Zlecenie"
              className="basicFont"
            >
              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Numer Zlecenia</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Firma</Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option>Wybierz</option>
                      <option value="1">Tata Steel Ltd</option>
                      <option value="2">
                        NASA-Narodowa Agencja Aeronautyki i Przestrzeni
                        Kosmicznej
                      </option>
                      <option value="3">PKP Intercity SA</option>
                      <option value="4">Korea Electric Power Corp</option>
                      <option value="5">Emirates</option>
                      <option value="6">Huta Stalowa Wola</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Nazwa Produktu</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Kategoria</Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option>Wybierz</option>
                      <option value="1">Cześci do przemysłu lotniczego</option>
                      <option value="2">Cześci do przemysłu kosmicznego</option>
                      <option value="3">Cześci do przemysłu kolejowego</option>
                      <option value="4">
                        Cześci do przemysłu energetycznego
                      </option>
                      <option value="5">Cześci do przemysłu hutniczego</option>
                      <option value="6">Cześci na specjalne zamówienie</option>
                      <option value="7">Zlecenie wielkoseryjne</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Form.Group className="position-relative mb-3">
                  <Form.Label>Rysunek techniczny</Form.Label>
                  <Form.Control type="file" required name="file" />
                </Form.Group>
              </Row>
            </Tab>
            <Tab eventKey="newCompany" title="Nowa firma" className="basicFont">
              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Nazwa firmy</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Kategoria</Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option>Wybierz</option>
                      <option value="1">Cześci do przemysłu lotniczego</option>
                      <option value="2">Cześci do przemysłu kosmicznego</option>
                      <option value="3">Cześci do przemysłu kolejowego</option>
                      <option value="4">
                        Cześci do przemysłu energetycznego
                      </option>
                      <option value="5">Cześci do przemysłu hutniczego</option>
                      <option value="6">Cześci na specjalne zamówienie</option>
                      <option value="7">Zlecenie wielkoseryjne</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col xs={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>Nip</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Adres</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="ul. Polna2 32-700 Bochnia"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col xs={3}></Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Kraj</Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option>Wybierz</option>
                      <option value="1">Polska</option>
                      <option value="2">Niemcy</option>
                      <option value="3">Holandia</option>
                      <option value="4">Wielka Brytania</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col xs={3}></Col>
              </Row>
            </Tab>
            <Tab eventKey="complaints" title="Reklamacje" className="basicFont">
              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Firma</Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option>Wybierz</option>
                      <option value="1">Tata Steel Ltd</option>
                      <option value="2">
                        NASA-Narodowa Agencja Aeronautyki i Przestrzeni
                        Kosmicznej
                      </option>
                      <option value="3">PKP Intercity SA</option>
                      <option value="4">Korea Electric Power Corp</option>
                      <option value="5">Emirates</option>
                      <option value="6">Huta Stalowa Wola</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Numer Zlecenia</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Uwagi</Form.Label>
                    <Form.Control as="textarea" />
                  </Form.Group>
                </Col>
              </Row>
            </Tab>
          </Tabs>
        </Row>

        <Row className="justify-content-end" style={{ marginRight: "20px" }}>
          <Col xs="auto">
            <Button variant="success">Zapisz</Button>{" "}
            <Button variant="warning">Anuluj</Button>{" "}
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

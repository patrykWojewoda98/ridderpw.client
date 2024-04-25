import "../ComponentsStyles/TabsStyle.css";
import "../ComponentsStyles/FormLabelStyle.css";
import "../App.css";
import * as React from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { CompanySelection } from "../Components/PageComponents/CompanySelection";
import { CategorySelection } from "../Components/PageComponents/CategorySelection";
import { useState } from "react";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TextField } from "@mui/material";

export const ManagementPage = () => {
  {
    /*Tworzenie zmiennych stanowych odpowiedzialnych za obsługe formulaża-Dokończyć!!!*/
  }
  const [orderNumber, setOrderNumber] = useState("");
  const [technologist, setTechnologist] = useState("");
  const [productName, setProductName] = useState("");
  const [nuberOfElements, setNumberOfElements] = useState("");

  const [machine, setMachine] = useState("");
  const [machiningTime, setMachiningTime] = useState("");
  const [technicalDrawing, setTechnicalDrawing] = useState("");

  //Obsługa datePickera
  const [selectedDate, setSelectedDate] = React.useState(null);

  return (
    <Container fluid>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("sadsadsa");
        }}
      >
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
              <Row className="custom-label">
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Numer Zlecenia</Form.Label>
                    <Form.Control
                      defaultValue={orderNumber}
                      type="text"
                      onChange={(e) => {
                        console.log(e);
                        setOrderNumber(e.target.value);
                      }}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Label>Firma</Form.Label>
                  <CompanySelection />
                </Col>
              </Row>
              <Row className="custom-label">
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Nazwa Produktu</Form.Label>
                    <Form.Control
                      type="text"
                      defaultValue={productName}
                      onChange={(e) => {
                        setProductName(e.target.value);
                      }}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Kategoria</Form.Label>
                    <CategorySelection />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="custom-label">
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Opracował Technolog</Form.Label>
                    <Form.Control
                      type="text"
                      defaultValue={technologist}
                      onChange={(e) => {
                        setTechnologist(e.target.value);
                      }}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Liczba elementów</Form.Label>
                    <Form.Control
                      type="text"
                      defaultValue={nuberOfElements}
                      onChange={(e) => {
                        setNumberOfElements(e.target.value);
                      }}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="custom-label">
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label xs={4}>Termin Realizacji</Form.Label>
                    <Row>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          value={selectedDate}
                          className="datePicker"
                          onChange={(date) => setSelectedDate(date)}
                        />
                      </LocalizationProvider>
                    </Row>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Maszyna</Form.Label>
                    <Form.Control
                      type="text"
                      defaultValue={machine}
                      onChange={(e) => {
                        setMachine(e.target.value);
                      }}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row xs={5} className="custom-label">
                <Form.Group className="mb-3">
                  <Form.Label>Przewidywany czas obróbki</Form.Label>
                  <Form.Control
                    type="text"
                    defaultValue={machiningTime}
                    placeholder="Podaj czas w godzinach"
                    onChange={(e) => {
                      setMachiningTime(e.target.value);
                    }}
                  />
                </Form.Group>
              </Row>
              <Row className="custom-label">
                <Form.Group className="position-relative mb-3">
                  <Form.Label>Rysunek techniczny</Form.Label>
                  <Form.Control
                    type="file"
                    required
                    name="file"
                    defaultValue={technicalDrawing}
                    onChange={(e) => {
                      setTechnicalDrawing(e.target.value);
                    }}
                  />
                </Form.Group>
              </Row>
            </Tab>
            <Tab eventKey="newCompany" title="Nowa firma" className="basicFont">
              <Row className="custom-label">
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Nazwa firmy</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Kategoria</Form.Label>
                    <CategorySelection />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="custom-label">
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
              <Row className="custom-label">
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
              <Row className="custom-label">
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Firma</Form.Label>
                    <CompanySelection />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Numer Zlecenia</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="custom-label">
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
            <Button
              variant="success"
              type="submit"
              disabled={
                orderNumber.length === 0 ||
                technologist.length === 0 ||
                productName.length === 0 ||
                nuberOfElements.length === 0 ||
                selectedDate === null ||
                machine.length === 0 ||
                machiningTime.length === 0 ||
                technicalDrawing.length === 0
              }
            >
              Zapisz
            </Button>{" "}
            <Button variant="warning">Anuluj</Button>{" "}
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

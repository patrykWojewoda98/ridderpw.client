import { PeopleData } from "../Components/PageComponents/Data/peopleData";
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
import { NewPersonContext } from "../Components/Contexts/NewPersonContext";

export const PersonnelPage = () => {
  const [name, setName] = React.useState("");
  const [role, setRole] = React.useState("");
  const [salary, setSalary] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [peselNumber, setPeselNumber] = React.useState("");
  const [yearsOfExperience, setYearsOfExperience] = React.useState("");
  const [domicile, setDomicile] = React.useState("");
  const [numberOfKids, setNumberOfKids] = React.useState("");

  const { setNewPerson } = React.useContext(NewPersonContext);

  const resetForm = () => {
    setName("");
    setRole("");
    setSalary("");
    setEmail("");
    setPeselNumber("");
    setYearsOfExperience("");
    setDomicile("");
    setNumberOfKids("");
  };

  const calculateAgeFromPesel = (pesel) => {
    const year = parseInt(pesel.substring(0, 2), 10);
    const month = parseInt(pesel.substring(2, 4), 10);
    const day = parseInt(pesel.substring(4, 6), 10);

    let birthYear = 1900 + year;
    if (month > 80) {
      birthYear -= 100;
    } else if (month > 20) {
      birthYear -= 100;
    }

    const birthMonth = (month % 20) - 1; // PESEL stores month as MM or MM+20
    const birthDay = day;

    const birthDate = new Date(birthYear, birthMonth, birthDay);
    const ageDifMs = Date.now() - birthDate.getTime();
    const ageDate = new Date(ageDifMs);

    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  return (
    <>
      <Container fluid className="background">
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            const age = calculateAgeFromPesel(peselNumber);
            const updatedPerson = {
              name,
              role,
              salary,
              email,
              peselNumber,
              yearsOfExperience,
              domicile,
              numberOfKids,
              status: "Aktywny",
              age,
            };
            setNewPerson(updatedPerson);
            resetForm();
          }}
        >
          <Row>
            <Tabs
              defaultActiveKey="showPersonnelList"
              id="personnel"
              className="mb-3 custom-tabs"
            >
              <Tab eventKey="showPersonnelList" title="Lista Pracowników">
                <PeopleData />
              </Tab>

              <Tab
                eventKey="addNewEmployee"
                title="Dodaj nowego pracownika"
                className="basicFont"
              >
                <Row className="custom-label">
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Imie i nazwisko</Form.Label>
                      <Form.Control
                        value={name}
                        type="text"
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Rola</Form.Label>
                      <Form.Control
                        value={role}
                        type="text"
                        onChange={(e) => {
                          setRole(e.target.value);
                        }}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="custom-label">
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Pesel</Form.Label>
                      <Form.Control
                        value={peselNumber}
                        type="text"
                        onChange={(e) => {
                          setPeselNumber(e.target.value);
                        }}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Wypłata</Form.Label>
                      <Form.Control
                        value={salary}
                        type="text"
                        onChange={(e) => {
                          setSalary(e.target.value);
                        }}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="custom-label">
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        value={email}
                        type="text"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Lata doświadczenia</Form.Label>
                      <Form.Control
                        value={yearsOfExperience}
                        type="text"
                        onChange={(e) => {
                          setYearsOfExperience(e.target.value);
                        }}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="custom-label">
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Adres zamieszkania</Form.Label>
                      <Form.Control
                        value={domicile}
                        type="text"
                        onChange={(e) => {
                          setDomicile(e.target.value);
                        }}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Liczba dzieci</Form.Label>
                      <Form.Control
                        value={numberOfKids}
                        type="text"
                        onChange={(e) => {
                          setNumberOfKids(e.target.value);
                        }}
                      />
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
                  name.length === 0 ||
                  role.length === 0 ||
                  salary.length === 0 ||
                  email.length === 0 ||
                  peselNumber.length === 0 ||
                  yearsOfExperience.length === 0 ||
                  domicile.length === 0 ||
                  numberOfKids.length === 0
                }
              >
                Zapisz
              </Button>{" "}
              <Button variant="warning" onClick={resetForm}>
                Anuluj
              </Button>{" "}
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};

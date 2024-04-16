import "./App.css";
import "./ComponentsStyles/CardsStyle.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function App() {
  return (
    <Container>
      <Row>
        <div className="centered-content">
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="../src/Components/Pictures/ManagementPicture.jpg"
                className="cardsLogo"
              />
              <Card.Body>
                <Card.Title>Zarządzanie</Card.Title>
                <Card.Text>
                  Składanie nowych zamówień, przypisywanie maszyn, oraz
                  zapisywanie przewidywanego czasu realizacji
                </Card.Text>
                <Button variant="primary">
                  <Link to={"/Management"}>Idz do Zarządzania</Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="../src/Components/Pictures/ProductionPicture.jpg"
                className="cardsLogo"
              />
              <Card.Body>
                <Card.Title>Produkcja</Card.Title>
                <Card.Text>
                  Rozpoczynanie i kontrola czasu pracy. Zgłaszanie defektów
                  towaru, lub ich braków.
                </Card.Text>
                <Button variant="primary">
                  <Link to={"/Management"}>Idz do Produkcji</Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="../src/Components/Pictures/LogisticsPicture.jpg"
                className="cardsLogo"
              />
              <Card.Body>
                <Card.Title>Logistyka</Card.Title>
                <Card.Text>
                  Zgłaszanie rozpoczęcia/zakończenia transportu towaru.
                  Zgłaszanie/odczyt aktualnej lokalizacji towaru.
                </Card.Text>
                <Button variant="primary">
                  <Link to={"/Management"}>Idz do Logistyki</Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </div>
      </Row>

      <Row>
        <div className="centered-content">
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="../src/Components/Pictures/PersonnelPicture.jpg"
                className="cardsLogo"
              />
              <Card.Body>
                <Card.Title>Kadry</Card.Title>
                <Card.Text>
                  Dodawanie, edycja oraz sprawdzanie listy pracowników.
                </Card.Text>
                <Button variant="primary">
                  <Link to={"/Management"}>Idz do Kadr</Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="../src/Components/Pictures/FinancesPicture.jpg"
                className="cardsLogo"
              />
              <Card.Body>
                <Card.Title>Finanse</Card.Title>
                <Card.Text>
                  Obliczanie kosztów realizacji zlecenia. Sprawdzanie aktualnego
                  stanu finansów. Zlecanie przelewów.
                </Card.Text>
                <Button variant="primary">
                  <Link to={"/Management"}>Idz do Finansów</Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="../src/Components/Pictures/RaportsPicture.jpg"
                className="cardsLogo"
              />
              <Card.Body>
                <Card.Title>Raporty i Analizy</Card.Title>
                <Card.Text>
                  Raporty miesieczne, kwartalne i roczne. Analiza zysków i
                  strat.
                </Card.Text>
                <Button variant="primary">Idz do Raportów i Analiz</Button>
              </Card.Body>
            </Card>
          </Col>
        </div>
      </Row>
    </Container>
  );
}

export default App;

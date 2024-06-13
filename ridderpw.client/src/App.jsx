import "./App.css";
import "./ComponentsStyles/CardsStyle.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Form } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useContext, useState } from "react";
import { LoginContext } from "./Components/Contexts/LoginContext";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

function App() {
  const { isLoggedIn, setIsLoggedIn, name, setName } = useContext(LoginContext);
  const loginState = {
    isLoggedIn,
    setIsLoggedIn,
  };

  const [showForm, setShowForm] = useState(false);
  const handleShow = () => setShowForm(true);

  const [agreed, setAgreed] = useState(false);
  return (
    <div className="background">
      {isLoggedIn && (
        <div style={{ height: "92.5vh" }}>
          <Container>
            <Row className="tabs-magrin">
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
                        Rozpoczynanie i kontrola czasu pracy. Zgłaszanie
                        defektów towaru, lub ich braków.
                      </Card.Text>
                      <Button variant="primary">
                        <Link to={"/Production"}>Idz do Produkcji</Link>
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
                        <Link to={"/Logistic"}>Idz do Logistyki</Link>
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
                        <Link to={"/Personnel"}>Idz do Kadr</Link>
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
                        Obliczanie kosztów realizacji zlecenia. Sprawdzanie
                        aktualnego stanu finansów. Zlecanie przelewów.
                      </Card.Text>
                      <Button variant="primary">
                        <Link to={"/Finances"}>Idz do Finansów</Link>
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
                      <Button variant="primary">
                        <Link to={"/Reports&Analytics"}>
                          Idz do Raportów i Analiz
                        </Link>
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              </div>
            </Row>
          </Container>
        </div>
      )}

      {!isLoggedIn && (
        <div style={{ width: "100%", margin: 0, padding: 0 }}>
          <header style={{ width: "100%", paddingLeft: 0 }}>
            <div
              className="p-3 text-center bg-image"
              style={{
                width: "100%",
                height: 600,
                backgroundSize: "cover",
              }}
            >
              <div
                className="mask"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
              >
                <div className="d-flex justify-content-center align-items-center h-100">
                  <Carousel>
                    <Carousel.Item>
                      <Image
                        src="src\Components\Pictures\CarouselPicrures\MainView.png"
                        rounded
                      />
                      <Carousel.Caption
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.75)",
                          borderRadius: "15px",
                          padding: "20px",
                          border: "1px solid rgba(255, 255, 255, 0.5)",
                        }}
                      >
                        <h3>Witaj w RidderPW</h3>
                        <p>
                          Poznaj możliwości systemu ERP stworzonego specjalnie
                          na potrzeby twojej firmy!
                        </p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <Image
                        src="src\Components\Pictures\CarouselPicrures\ProductionView.png"
                        rounded
                      />
                      <Carousel.Caption
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.75)",
                          borderRadius: "15px",
                          padding: "20px",
                          border: "1px solid rgba(255, 255, 255, 0.5)",
                        }}
                      >
                        <h3>Dostosowany do Twoich Potrzeb</h3>
                        <p>
                          Ty mówisz czego oczekujesz od systemu ERP, a my to
                          zaaplikujemy do zbudowanego pod panstwa firme systemu!
                        </p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <Image
                        src="src\Components\Pictures\CarouselPicrures\ManagementView.png"
                        rounded
                      />
                      <Carousel.Caption
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.75)",
                          borderRadius: "15px",
                          padding: "20px",
                          border: "1px solid rgba(255, 255, 255, 0.5)",
                        }}
                      >
                        <h3>Prostota i Elegancja</h3>
                        <p>
                          Nasze intuicyjne rozwiązania ERP sprawiają że
                          zarządzanie nawet najbardziej złożonymi procesami to
                          czysta przyjemność!
                        </p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <Image
                        src="src\Components\Pictures\CarouselPicrures\technicalHelpView.png"
                        rounded
                      />
                      <Carousel.Caption
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.75)",
                          borderRadius: "15px",
                          padding: "20px",
                          border: "1px solid rgba(255, 255, 255, 0.5)",
                        }}
                      >
                        <h3>Wsparcie techniczne 24/7</h3>
                        <p>
                          Koniec z czekaniem na infolini! Nasi technicy są
                          gotowi odpowiedzieć na panstwa pytania 24godziny na
                          dobe 7 dni w tygodniu!
                        </p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
            </div>
          </header>
          <body>
            <h2>O RidderPW</h2>
            <p>
              RidderPW to nowoczesne rozwiązanie ERP, które zaprojektowano z
              myślą o dynamice współczesnych przedsiębiorstw. Dzięki
              zaawansowanej technologii i modułowej strukturze, RidderPW
              idealnie dostosowuje się do specyficznych potrzeb Twojej firmy,
              umożliwiając łatwe zarządzanie zasobami, finansami, kadrami oraz
              logistyką. Nasz system gwarantuje nie tylko pełną kontrolę nad
              każdym segmentem działalności, ale również zapewnia bezpieczeństwo
              danych na najwyższym poziomie. Wybierz RidderPW i przekonaj się,
              jak łatwo można przyspieszyć rozwój firmy, poprawić efektywność
              operacyjną i osiągnąć lepsze wyniki dzięki jednemu, kompleksowemu
              narzędziu.
            </p>

            <div className="partners-bacground">
              <Container>
                <Row>
                  <h2 className="h2-partners">
                    <strong>Partnerzy którzy nam zaufali</strong>
                  </h2>
                </Row>

                <Row>
                  <Col>
                    <Card style={{ width: "18rem" }}>
                      <Card.Img
                        variant="top"
                        src="src\Components\Pictures\FizztastiicLogo.png"
                      />
                      <Card.Body>
                        <Card.Title>Fizztastic</Card.Title>
                        <Card.Text>
                          Fizztastic- poczuj innyu wymiar smaku!
                        </Card.Text>
                        <Button variant="primary">Zobacz</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card style={{ width: "18rem" }}>
                      <Card.Img
                        variant="top"
                        src="src\Components\Pictures\HappyPlayLogo.png"
                      />
                      <Card.Body>
                        <Card.Title>HappyPlay</Card.Title>
                        <Card.Text>
                          Poznaj świat przygody i zabawy wraz z nami!
                        </Card.Text>
                        <Button variant="primary">Zobacz</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card style={{ width: "18rem" }}>
                      <Card.Img
                        variant="top"
                        src="src\Components\Pictures\NextLevelPress.png"
                      />
                      <Card.Body>
                        <Card.Title>NextLevelPress</Card.Title>
                        <Card.Text>
                          Podbijamy świat słowo po słowie, wnosząc nowy wymiar
                          do literatury.
                        </Card.Text>
                        <Button variant="primary">Zobacz</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
                <div>
                  <Row>
                    <Col xs={4}></Col>
                    <Col xs={6}>
                      <h1 className="h1-applay">
                        <strong>Dołacz już teraz!</strong>
                      </h1>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={3}></Col>
                    <Col xs={6}>
                      <h1 className="h1-applay">
                        Wypełnij formulaż zgłoszeniowy
                      </h1>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={5}></Col>
                    <Col xs={6}>
                      <Button variant="primary" onClick={handleShow}>
                        Zapisz się
                      </Button>{" "}
                    </Col>
                  </Row>
                  <Row>
                    <h1 className="h1-applay">
                      <strong>
                        Przenieś swoją firmę na wyższy poziom zarządzania już
                        dziś!
                      </strong>
                    </h1>
                  </Row>
                  <Row>
                    {showForm && (
                      <div style={{ marginBottom: "50px" }}>
                        <Form>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>Adres Email</Form.Label>
                            <Form.Control
                              type="email"
                              placeholder="twojafirma@gmail.com"
                            />
                            <Form.Text className="text-muted">
                              Na ten adres email skontaktujemy sie w ciagu 7 dni
                              roboczych z ofertą dostostowaną właśnie pod
                              Panstwa firme!
                            </Form.Text>
                          </Form.Group>

                          <FloatingLabel
                            controlId="floatingTextarea"
                            label="Prosze opisać co powinien zawierać państwa system ERP"
                            className="mb-3"
                          >
                            <Form.Control
                              as="textarea"
                              placeholder="Leave a comment here"
                            />
                          </FloatingLabel>

                          <Form.Group
                            className="mb-3"
                            controlId="formBasicCheckbox"
                          >
                            <Form.Check
                              type="checkbox"
                              label="Wyrażam zgodę na przesyłanie informacji handlowych drogą elektroniczną"
                              onChange={(e) => setAgreed(e.target.checked)}
                            />
                          </Form.Group>
                          <Button
                            variant="primary"
                            type="submit"
                            disabled={!agreed}
                          >
                            Prześlij
                          </Button>
                        </Form>
                      </div>
                    )}
                  </Row>
                </div>
              </Container>
            </div>
          </body>
        </div>
      )}
    </div>
  );
}

export default App;

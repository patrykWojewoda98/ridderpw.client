import { CDBSidebarHeader } from "cdbreact";
import { Link, useNavigate } from "react-router-dom";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const LoginMenu = ({ loginState }) => {
  const { isLoggedIn, setIsLoggedIn } = loginState;
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleUserNameChange = (e) => setUserName(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleLoginClick = () => {
    if (password === "asdf") {
      setIsLoggedIn(true);
    } else {
      setShowModal(true);
      setPassword("");
    }
  };

  const handleLogOutClick = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  const handleCloseModal = () => setShowModal(false);
  return (
    <>
      {!isLoggedIn && (
        <CDBSidebarHeader>
          <Link
            to="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            Logowanie
          </Link>
          <FloatingLabel
            controlId="floatingInput"
            label="Login"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Login"
              value={userName}
              onChange={handleUserNameChange}
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Hasło">
            <Form.Control
              type="password"
              placeholder="Hasło"
              value={password}
              onChange={handlePasswordChange}
            />
          </FloatingLabel>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              variant="secondary"
              type="button"
              onClick={handleLoginClick}
            >
              Zaloguj się
            </Button>
          </div>
        </CDBSidebarHeader>
      )}

      {isLoggedIn && (
        <CDBSidebarHeader>
          <Container>
            <Link
              to="/"
              className="text-decoration-none"
              style={{ color: "inherit" }}
            >
              Witaj {userName}
            </Link>
            <Row>
              <Button
                variant="secondary"
                type="button"
                onClick={handleLogOutClick}
              >
                Wyloguj sie
              </Button>
            </Row>
          </Container>
        </CDBSidebarHeader>
      )}

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Błąd logowania</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Nieprawidłowa nazwa użytkownika lub hasło.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Zamknij
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

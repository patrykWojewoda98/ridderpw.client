import {
  CDBSidebar,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenuItem,
} from "cdbreact";
import { Link, useNavigate } from "react-router-dom";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useContext, useState } from "react";
import { LoginMenu } from "./SideBarComponents/LoginMenu";
import { LoginContext } from "../Contexts/LoginContext";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function ResponsiveSideBar() {
  const [date, setdate] = useState(new Date());
  const navigate = useNavigate();

  const [showCalendar, setShowCalendar] = useState(false);

  const handleCloseCalendar = () => setShowCalendar(false);
  const handleShowCalendar = () => setShowCalendar(true);

  const onChange = (date) => {
    setdate(date);
  };

  const handleShowNews = () => {
    if (!isLoggedIn) {
      alert("Aby zobaczyć wiadomości firmowe musisz być zalogowany!");
    } else {
      navigate("/News");
    }
  };

  const handleShowMessages = () => {
    if (!isLoggedIn) {
      alert("Aby zobaczyć wiadomości firmowe musisz być zalogowany!");
    } else {
      navigate("/Messages");
    }
  };

  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);
  const loginState = {
    isLoggedIn,
    setIsLoggedIn,
  };

  return (
    <div
      style={{ display: "flex", height: "100%", overflow: "scroll initial" }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <Link
            to="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            Szybki dostęp
          </Link>
          <CDBSidebarMenuItem onClick={handleShowCalendar}>
            Kalendarz
          </CDBSidebarMenuItem>
          <CDBSidebarMenuItem onClick={handleShowNews}>
            Aktualności
          </CDBSidebarMenuItem>
          <CDBSidebarMenuItem onClick={handleShowMessages}>
            Wiadomości
          </CDBSidebarMenuItem>
        </CDBSidebarHeader>

        <LoginMenu loginState={loginState} />

        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: "20px 5px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            Pomoc techniczna
            <Button variant="secondary" style={{ marginBottom: "10px" }}>
              Telefon
            </Button>{" "}
            <Button variant="secondary" style={{ marginBottom: "10px" }}>
              Email
            </Button>{" "}
          </div>

          <Modal show={showCalendar} onHide={handleCloseCalendar}>
            <Modal.Header closeButton>
              <Modal.Title>Kalendarz</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                <Calendar onChange={setdate} value={date} />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseCalendar}>
                Zamknij
              </Button>
            </Modal.Footer>
          </Modal>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
}

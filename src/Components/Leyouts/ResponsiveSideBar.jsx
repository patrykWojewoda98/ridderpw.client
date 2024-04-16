import {
  CDBSidebar,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { Link } from "react-router-dom";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";

export default function ResponsiveSideBar() {
  return (
    <div
      style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
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
          <CDBSidebarMenuItem>Kalendarz</CDBSidebarMenuItem>
          <CDBSidebarMenuItem>Aktualności</CDBSidebarMenuItem>
          <CDBSidebarMenuItem>Wiadomości</CDBSidebarMenuItem>
        </CDBSidebarHeader>

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
            <Form.Control type="text" placeholder="Login" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Hasło">
            <Form.Control type="password" placeholder="Hasło" />
          </FloatingLabel>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button variant="secondary">Zaloguj się</Button>
          </div>
        </CDBSidebarHeader>

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
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
}

function callCalc() {
  alert("Hello! I am an alert box!");
}

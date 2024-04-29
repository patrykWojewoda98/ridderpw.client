import {
  CDBSidebar,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenuItem,
} from "cdbreact";
import { Link } from "react-router-dom";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";
import { useContext, useState } from "react";
import { LoginMenu } from "./SideBarComponents/LoginMenu";
import { LoginContext } from "../Contexts/LoginContext";

export default function ResponsiveSideBar() {
  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);
  const loginState = {
    isLoggedIn,
    setIsLoggedIn,
  };

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
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
}

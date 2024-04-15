import {
  CDBSidebar,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { Link } from "react-router-dom";

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
            Inne
          </Link>
          <CDBSidebarMenu>
            <span style={{ fontSize: "12px" }}>Grupa 1</span>
            <CDBSidebarMenuItem>assd</CDBSidebarMenuItem>
          </CDBSidebarMenu>
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
            Skontaktuj sie z nami!
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

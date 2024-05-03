import React from "react";
import ReactDOM from "react-dom/client";
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from "./App.jsx";
import "./index.css";
import "react-bootstrap/dist/react-bootstrap.js";
import ResponsiveSideBar from "./Components/Leyouts/ResponsiveSideBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TopNavbar } from "./Components/Leyouts/TopNavbar.jsx";
import { ManagementPage } from "./Pages/ManagementPage.jsx";
import { ProductionPage } from "./Pages/ProductionPage.jsx";

import { PersonnelPage } from "./Pages/PersonnelPage.jsx";
import { FinancesPage } from "./Pages/FinancesPage.jsx";
import { ReportsAndAnalyticsPage } from "./Pages/ReportsAndAnalyticsPage.jsx";
import { LogisticPage } from "./Pages/LogisticPage.jsx";
import { LoginProvider } from "./Components/Contexts/LoginContext.jsx";
import Footer from "./Components/Leyouts/Footer.jsx";
import { NewsPage } from "./Pages/NewsPage.jsx";
import { MessagesPage } from "./Pages/MessagesPage.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <LoginProvider>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <TopNavbar />
                <div style={{ display: "flex", height: "100%" }}>
                  {" "}
                  {/*Ten fragment odpowiada za rozmieszczenie komponentów obok siebie */}
                  <div>
                    <ResponsiveSideBar />
                  </div>
                  <App />
                </div>

                <Footer />
              </>
            }
          />
          <Route
            path="/Management"
            element={
              <>
                <TopNavbar />
                <div style={{ display: "flex" }}>
                  {" "}
                  {/*Ten fragment odpowiada za rozmieszczenie komponentów obok siebie */}
                  <div style={{ height: "92.5vh" }}>
                    <ResponsiveSideBar />
                  </div>
                  <ManagementPage />
                </div>
                <Footer />
              </>
            }
          />
          <Route
            path="/Production"
            element={
              <>
                <TopNavbar />
                <div style={{ display: "flex" }}>
                  {" "}
                  <div style={{ height: "92.5vh" }}>
                    <ResponsiveSideBar />
                  </div>
                  <ProductionPage />
                </div>
                <Footer />
              </>
            }
          />
          <Route
            path="/Logistic"
            element={
              <>
                <TopNavbar />
                <div style={{ display: "flex" }}>
                  {" "}
                  <div style={{ height: "92.5vh" }}>
                    <ResponsiveSideBar />
                  </div>
                  <LogisticPage />
                </div>
                <Footer />
              </>
            }
          />

          <Route
            path="/Personnel"
            element={
              <>
                <TopNavbar />
                <div style={{ display: "flex" }}>
                  {" "}
                  <div style={{ height: "92.5vh" }}>
                    <ResponsiveSideBar />
                  </div>
                  <PersonnelPage />
                </div>
                <Footer />
              </>
            }
          />
          <Route
            path="/Finances"
            element={
              <>
                <TopNavbar />
                <div style={{ display: "flex" }}>
                  {" "}
                  <div style={{ height: "92.5vh" }}>
                    <ResponsiveSideBar />
                  </div>
                  <FinancesPage />
                </div>
                <Footer />
              </>
            }
          />
          <Route
            path="/Reports&Analytics"
            element={
              <>
                <TopNavbar />
                <div style={{ display: "flex" }}>
                  {" "}
                  <div style={{ height: "92.5vh" }}>
                    <ResponsiveSideBar />
                  </div>
                  <ReportsAndAnalyticsPage />
                </div>
                <Footer />
              </>
            }
          />
          <Route
            path="/News"
            element={
              <>
                <TopNavbar />
                <div style={{ display: "flex" }}>
                  {" "}
                  <div style={{ height: "92.5vh" }}>
                    <ResponsiveSideBar />
                  </div>
                  <NewsPage />
                </div>
                <Footer />
              </>
            }
          />
          <Route
            path="/Messages"
            element={
              <>
                <TopNavbar />
                <div style={{ display: "flex" }}>
                  {" "}
                  <div style={{ height: "92.5vh" }}>
                    <ResponsiveSideBar />
                  </div>
                  <MessagesPage />
                </div>
                <Footer />
              </>
            }
          />
        </Routes>
      </LoginProvider>
    </BrowserRouter>
  </React.StrictMode>
);

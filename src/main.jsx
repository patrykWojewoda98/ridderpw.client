import React from "react";
import ReactDOM from "react-dom/client";
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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <TopNavbar />
              <div style={{ display: "flex" }}>
                {" "}
                {/*Ten fragment odpowiada za rozmieszczenie komponentów obok siebie */}
                <div>
                  <ResponsiveSideBar />
                </div>
                <App />
              </div>
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
                <div>
                  <ResponsiveSideBar />
                </div>
                <ManagementPage />
              </div>
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
                <div>
                  <ResponsiveSideBar />
                </div>
                <ProductionPage />
              </div>
            </>
          }
        />
        <Route
          path="/Logistic"
          element={
            <>
              <TopNavbar />
              <div style={{ display: "flex" }}>
                <div>
                  <ResponsiveSideBar />
                </div>
                <LogisticPage />
              </div>
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
                <div>
                  <ResponsiveSideBar />
                </div>
                <PersonnelPage />
              </div>
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
                <div>
                  <ResponsiveSideBar />
                </div>
                <FinancesPage />
              </div>
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
                <div>
                  <ResponsiveSideBar />
                </div>
                <ReportsAndAnalyticsPage />
              </div>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

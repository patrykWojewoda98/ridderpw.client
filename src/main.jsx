import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "react-bootstrap/dist/react-bootstrap.js";
import ResponsiveSideBar from "./Components/Leyouts/ResponsiveSideBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TopNavbar } from "./Components/Leyouts/TopNavbar.jsx";
import { ManagementPage } from "./Pages/ManagementPage.jsx";

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
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

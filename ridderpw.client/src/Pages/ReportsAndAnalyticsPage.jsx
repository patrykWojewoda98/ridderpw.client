import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "../App.css";
import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { PieChart } from "@mui/x-charts/PieChart";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { DataGrid } from "@mui/x-data-grid";
import styles from "../ComponentsStyles/ReportsAndAnalyticsPageStyle.module.css";

const clientsData = [
  { id: 0, value: 45, label: "Korea Electric Power Corp" },
  { id: 1, value: 20, label: "Huta Stalowa Wola" },
  { id: 2, value: 10, label: "Emirates" },
  { id: 3, value: 10, label: "PKP Intercity SA" },
  { id: 4, value: 15, label: "Pozostałe" },
];

const initialRaports = {
  columns: [
    { field: "id", headerName: "ID", width: 90, disableColumnMenu: true },
    {
      field: "type",
      headerName: "Typ Raportu",
      width: 150,
      disableColumnMenu: true,
    },
    {
      field: "period",
      headerName: "Okres",
      width: 150,
      disableColumnMenu: true,
    },
    { field: "year", headerName: "Rok", width: 110, disableColumnMenu: true },
    {
      field: "actions",
      headerName: "Pobierz raport Finansowy",
      width: 200,
      disableColumnMenu: true,
      renderCell: () => <Button variant="primary">Pobierz</Button>,
    },
  ],
  rows: [
    // Raporty kwartalne
    { id: 1, type: "Kwartalny", period: "Q1", year: 2019 },
    { id: 2, type: "Kwartalny", period: "Q2", year: 2019 },
    { id: 3, type: "Kwartalny", period: "Q3", year: 2019 },
    { id: 4, type: "Kwartalny", period: "Q4", year: 2019 },
    { id: 5, type: "Kwartalny", period: "Q1", year: 2020 },
    { id: 6, type: "Kwartalny", period: "Q2", year: 2020 },
    { id: 7, type: "Kwartalny", period: "Q3", year: 2020 },
    { id: 8, type: "Kwartalny", period: "Q4", year: 2020 },
    { id: 9, type: "Kwartalny", period: "Q1", year: 2021 },
    { id: 10, type: "Kwartalny", period: "Q2", year: 2021 },
    { id: 11, type: "Kwartalny", period: "Q3", year: 2021 },
    { id: 12, type: "Kwartalny", period: "Q4", year: 2021 },
    { id: 13, type: "Kwartalny", period: "Q1", year: 2022 },
    { id: 14, type: "Kwartalny", period: "Q2", year: 2022 },
    { id: 15, type: "Kwartalny", period: "Q3", year: 2022 },
    { id: 16, type: "Kwartalny", period: "Q4", year: 2022 },
    { id: 17, type: "Kwartalny", period: "Q1", year: 2023 },
    { id: 18, type: "Kwartalny", period: "Q2", year: 2023 },
    { id: 19, type: "Kwartalny", period: "Q3", year: 2023 },
    { id: 20, type: "Kwartalny", period: "Q4", year: 2023 },
    { id: 21, type: "Kwartalny", period: "Q1", year: 2024 },
    { id: 22, type: "Kwartalny", period: "Q2", year: 2024 },
    { id: 23, type: "Kwartalny", period: "Q3", year: 2024 },
    { id: 24, type: "Kwartalny", period: "Q4", year: 2024 },
    // Raporty roczne
    { id: 25, type: "Roczny", period: "Roczny", year: 2019 },
    { id: 26, type: "Roczny", period: "Roczny", year: 2020 },
    { id: 27, type: "Roczny", period: "Roczny", year: 2021 },
    { id: 28, type: "Roczny", period: "Roczny", year: 2022 },
    { id: 29, type: "Roczny", period: "Roczny", year: 2023 },
    { id: 30, type: "Roczny", period: "Roczny", year: 2024 },
  ],
};

export const ReportsAndAnalyticsPage = () => {
  const years = [2020, 2021, 2022, 2023, 2024];
  const profitPerYear = [1, 4, 2, 10, 1];
  const [nbRows, setNbRows] = React.useState(100);
  const [raports, setRaports] = React.useState(initialRaports);

  return (
    <Container
      fluid
      className={styles["background"]}
      style={{ minHeight: "100vh", position: "relative" }}
    >
      <Row xs="2" style={{ marginBottom: "15px" }}>
        <Col xs="6">
          <Card className={styles["chart-background"]}>
            <Card.Body>
              <Card.Title className={styles["reportsAndAnalytics-card-title"]}>
                Zysk w kolejnych latach
              </Card.Title>
              <div className={styles["chart-wrapper"]}>
                <LineChart
                  xAxis={[
                    {
                      data: years,
                      label: "Rok",
                      scaleType: "point",
                    },
                  ]}
                  yAxis={[
                    {
                      label: "Zysk w milionach złotych",
                    },
                  ]}
                  series={[
                    {
                      data: profitPerYear,
                    },
                  ]}
                  width={500}
                  height={300}
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className={styles["chart-background"]}>
            <Card.Body>
              <Card.Title className={styles["reportsAndAnalytics-card-title"]}>
                Struktura Udziału w Zyskach Firmowych
              </Card.Title>
              <PieChart
                series={[
                  {
                    data: clientsData,
                    valueFormatter: (value) => `${value.value}%`,
                    highlightScope: { faded: "global", highlighted: "item" },
                    faded: {
                      innerRadius: 30,
                      additionalRadius: -30,
                      color: "gray",
                    },
                  },
                ]}
                height={200}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row xs="2" style={{ marginBottom: "15px" }}>
        <Col>
          <Card className={styles["chart-background"]}>
            <Card.Body className={styles["chart-container"]}>
              <Card.Title className={styles["reportsAndAnalytics-card-title"]}>
                Wskaźnik zrealizowanych zamówień na ten rok
              </Card.Title>
              <div className={styles["chart-wrapper"]}>
                <Gauge
                  value={75}
                  startAngle={-110}
                  endAngle={110}
                  width={500}
                  height={300}
                  sx={{
                    [`& .${gaugeClasses.valueText}`]: {
                      fontSize: 40,
                      transform: "translate(0px, 0px)",
                    },
                  }}
                  text={({ value, valueMax }) => `${value} / ${valueMax}%`}
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className={styles["chart-background"]}>
            <Card.Body>
              <Card.Title className={styles["reportsAndAnalytics-card-title"]}>
                Raporty finansowe
              </Card.Title>
              <Box sx={{ width: "100%" }}>
                <Stack direction="row" spacing={1} sx={{ mb: 1 }}></Stack>
                <DataGrid
                  autoHeight
                  disableColumnMenu
                  columns={raports.columns}
                  rows={raports.rows.slice(0, nbRows)}
                />
              </Box>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

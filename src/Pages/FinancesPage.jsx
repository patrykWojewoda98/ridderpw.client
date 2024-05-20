import { Card, Col, Container, Row } from "react-bootstrap";
import "../App.css";
import "../ComponentsStyles/FinancesPageStyle.css";
import { BarChart } from "@mui/x-charts/BarChart";

export const FinancesPage = () => {
  let costs = [35, 44, 24, 34];
  let revenues = [60, 45, 55, 60];
  let profit = [];
  let investments = [];
  let accountsReceivable = 120; //
  let accountsPayable = 80;
  let budget = [50, 50, 50, 50];
  let actuals = [45, 60, 55, 65];

  for (let i = 0; i < costs.length; i++) {
    profit[i] = revenues[i] - costs[i];
  }
  for (let i = 0; i < costs.length; i++) {
    investments[i] = profit[i] * 0.3;
  }

  const totalCosts = costs.reduce((acc, curr) => acc + curr, 0);
  const totalRevenues = revenues.reduce((acc, curr) => acc + curr, 0);
  const totalProfit = profit.reduce((acc, curr) => acc + curr, 0);
  const totalInvestments = investments.reduce((acc, curr) => acc + curr, 0);
  const currentCash = 150;
  const netCashFlow = totalRevenues - totalCosts - totalInvestments;

  const currentRatio = (currentCash + accountsReceivable) / accountsPayable;
  const quickRatio = currentCash / accountsPayable;
  const debtToEquityRatio = accountsPayable / (currentCash + totalProfit);

  return (
    <Container fluid className="background">
      <Row style={{ marginBottom: "15px" }}>
        <Col>
          <Card style={{ width: "100%", height: "100%" }}>
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                <strong>Stan gotówki</strong>
              </Card.Title>
              <Card.Text>
                <p>
                  <strong>Aktualny stan gotówki:</strong> {currentCash} mln zł
                </p>
                <p>
                  <strong>Całkowite koszty:</strong> {totalCosts} mln zł
                </p>
                <p>
                  <strong>Całkowite przychody:</strong> {totalRevenues} mln zł
                </p>
                <p>
                  <strong>Całkowity zysk:</strong> {totalProfit} mln zł
                </p>
                <p>
                  <strong>Inwestycje:</strong> {totalInvestments} mln zł
                </p>
                <p>
                  <strong>Net Cash Flow:</strong> {netCashFlow} mln zł
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "100%", height: "100%" }}>
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                <strong>Wyniki w poszczególnych kwartałach</strong>
              </Card.Title>
              <BarChart
                series={[
                  { data: costs, label: "Koszty" },
                  { data: revenues, label: "Przychody" },
                  { data: profit, label: "Zysk" },
                  { data: investments, label: "Inwestycje" },
                ]}
                height={290}
                xAxis={[{ data: ["Q1", "Q2", "Q3", "Q4"], scaleType: "band" }]}
                margin={{ top: 50, bottom: 30, left: 40, right: 10 }}
              />
              <div className="right-align">W milionach zł</div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "100%", height: "100%" }}>
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                <strong>Stan należności i zobowiązań</strong>
              </Card.Title>
              <Card.Text>
                <p>
                  <strong>Należności:</strong> {accountsReceivable} mln zł
                </p>
                <p>
                  <strong>Zobowiązania:</strong> {accountsPayable} mln zł
                </p>
                <p>
                  <strong>Saldo netto:</strong>{" "}
                  {accountsReceivable - accountsPayable} mln zł
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card style={{ width: "100%", height: "100%" }}>
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                <strong>Budżet vs Rzeczywiste</strong>
              </Card.Title>
              <BarChart
                series={[
                  { data: budget, label: "Budżet" },
                  { data: actuals, label: "Rzeczywiste" },
                ]}
                height={200}
                xAxis={[{ data: ["Q1", "Q2", "Q3", "Q4"], scaleType: "band" }]}
                margin={{ top: 30, bottom: 20, left: 30, right: 10 }}
              />
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "100%", height: "100%" }}>
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                <strong>Wskaźniki finansowe</strong>
              </Card.Title>
              <Card.Text>
                <p>
                  <strong>Bieżący wskaźnik:</strong> {currentRatio.toFixed(2)}
                </p>
                <p>
                  <strong>Wskaźnik szybkiej płynności:</strong>{" "}
                  {quickRatio.toFixed(2)}
                </p>
                <p>
                  <strong>Wskaźnik zadłużenia do kapitału:</strong>{" "}
                  {debtToEquityRatio.toFixed(2)}
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "100%", height: "100%" }}>
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                <strong>Analiza przepływów pieniężnych</strong>
              </Card.Title>
              <Card.Text>
                <p>
                  <strong>Przepływy operacyjne:</strong> 80 mln zł
                </p>
                <p>
                  <strong>Przepływy inwestycyjne:</strong> -40 mln zł
                </p>
                <p>
                  <strong>Przepływy finansowe:</strong> 20 mln zł
                </p>
                <p>
                  <strong>Łączne przepływy pieniężne:</strong> 60 mln zł
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

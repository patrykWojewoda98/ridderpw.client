import "../App.css";
import "../ComponentsStyles/AccordionStyle.css";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { FilterList } from "../Components/PageComponents/FilterList";

export const ProductionPage = () => {
  return (
    <Container>
      <FilterList />

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Numer zlecenia</th>
            <th>Technolog</th>
            <th>Status</th>
            <th>Nazwa produktu</th>
            <th>Liczba sztuk</th>
            <th>Termin realizacji</th>
            <th>Maszyna</th>
            <th>Przewidywany czas obróbki</th>
            <th>Kategoria</th>
            <th>Rysunek techniczny</th>
          </tr>
        </thead>
        {/*Wypełnienie tabeli */}
        <tbody>
          <tr>
            <td>1</td>
            <td>Jan Kowalski</td>
            <td>
              {["radio"].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="Rozpoczeto"
                    name="group2"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    inline
                    label="Nie Rozpoczęto"
                    name="group2"
                    type={type}
                    id={`inline-${type}-2`}
                    defaultChecked
                  />
                </div>
              ))}
            </td>
            <td>Rolka Transportowa</td>
            <td>5</td>
            <td>05-06-2024</td>
            <td>Tokarka CNC</td>
            <td>14h</td>
            <td>Cześci do przemysłu hutniczego</td>
            <td>
              <Link title="Przejdz do rysunku technicznego">
                <Image
                  src="../src/Components/Pictures/TechnicalDrawing.png"
                  className="logo"
                />
              </Link>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Stefan Stefanowicz</td>
            <td>
              {["radio"].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="Rozpoczeto"
                    name="group3"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    inline
                    label="Nie Rozpoczęto"
                    name="group3"
                    type={type}
                    id={`inline-${type}-2`}
                    defaultChecked
                  />
                </div>
              ))}
            </td>
            <td>Komora Spalania</td>
            <td>2</td>
            <td>05-06-2024</td>
            <td>Tokarka CNC</td>
            <td>8h</td>
            <td>Cześci do przemysłu kosmicznego</td>
            <td>
              <Link title="Przejdz do rysunku technicznego">
                <Image
                  src="../src/Components/Pictures/TechnicalDrawing.png"
                  className="logo"
                />
              </Link>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Adam Zwyczajny</td>
            <td>
              {["radio"].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="Rozpoczeto"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    inline
                    label="Nie Rozpoczęto"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                    defaultChecked
                  />
                </div>
              ))}
            </td>
            <td>Obudowa łożyska turbiny wiatrowej</td>
            <td>150</td>
            <td>22-08-2024</td>
            <td>Frezarka CNC</td>
            <td>120h</td>
            <td>Cześci do przemysłu energetycznego</td>
            <td>
              <Link title="Przejdz do rysunku technicznego">
                <Image
                  src="../src/Components/Pictures/TechnicalDrawing.png"
                  className="logo"
                />
              </Link>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

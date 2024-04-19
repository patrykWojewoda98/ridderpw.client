import Form from "react-bootstrap/Form";

export const CompanySelection = () => {
  return (
    <Form.Group className="mb-3">
      <Form.Select aria-label="Default select example">
        <option>Wybierz</option>
        <option value="1">Tata Steel Ltd</option>
        <option value="2">
          NASA-Narodowa Agencja Aeronautyki i Przestrzeni Kosmicznej
        </option>
        <option value="3">PKP Intercity SA</option>
        <option value="4">Korea Electric Power Corp</option>
        <option value="5">Emirates</option>
        <option value="6">Huta Stalowa Wola</option>
      </Form.Select>
    </Form.Group>
  );
};

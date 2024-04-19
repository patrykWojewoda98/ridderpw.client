import Form from "react-bootstrap/Form";

export const CategorySelection = () => {
  return (
    <Form.Select aria-label="Default select example">
      <option>Wybierz</option>
      <option value="1">Cześci do przemysłu lotniczego</option>
      <option value="2">Cześci do przemysłu kosmicznego</option>
      <option value="3">Cześci do przemysłu kolejowego</option>
      <option value="4">Cześci do przemysłu energetycznego</option>
      <option value="5">Cześci do przemysłu hutniczego</option>
      <option value="6">Cześci na specjalne zamówienie</option>
      <option value="7">Zlecenie wielkoseryjne</option>
    </Form.Select>
  );
};

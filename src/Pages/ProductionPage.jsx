import "../App.css";
import "../ComponentsStyles/AccordionStyle.css";
import "../ComponentsStyles/TechnicalDrawingStyle.css";
import Container from "react-bootstrap/Container";

import { FilterList } from "../Components/PageComponents/FilterList";

import { ProductionPageTable } from "../Components/PageComponents/ProductionPageTable";

export const ProductionPage = () => {
  return (
    <Container>
      <FilterList />
      <ProductionPageTable />
    </Container>
  );
};

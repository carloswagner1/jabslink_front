import MyVacanciesCard from "components/MyVacanciesCard/MyVacanciesCard";
import SearchImput from "components/SearchInput/SearchInout";
import { Col, Container, Row } from "react-bootstrap";
import MyVacanciesTag from "components/Tags/MyVacanciesTag";
import MyVacanciesSelect from "components/MyVacanciesSelect/MyVacanciesSelect";

export default function MyVacancies() {
  return (
    <Container className="mt-4">
      <Row>
        <Col sm={2}>
          <MyVacanciesTag />
        </Col>
        <Col>
          <Row className="g-2">
            <Col md>
              <SearchImput />
            </Col>
            <Col md>
              <MyVacanciesSelect />
            </Col>
          </Row>
          <MyVacanciesCard />
        </Col>
      </Row>
    </Container>
  );
}

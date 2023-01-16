import SearchImput from "components/SearchInput/SearchInout";
import { Col, Container, Row } from "react-bootstrap";
import OpportunitiesTag from "components/Tags/OpportunitiesTag";
import OpportinitiesSelect from "components/OpportunitiesSelect/OpportunitiesSelect";
import OpportunitiesCard from "components/OpportunitiesCard/OpportunitiesCard";

export default function Opportunities() {
  return (
    <Container className="mt-4">
      <Row>
        <Col sm={2}>
          <OpportunitiesTag />
        </Col>
        <Col>
          <Row className="g-2">
            <Col md>
              <SearchImput />
            </Col>
            <Col md>
              <OpportinitiesSelect />              
            </Col>
          </Row>
          <OpportunitiesCard />
        </Col>
      </Row>
    </Container>
  );
}

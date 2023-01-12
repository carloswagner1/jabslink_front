import NewOportunitiesCard from "components/NewOportunitiesCard/NewOportunitiesCard";
import ProfileCard from "components/ProfileCard/ProfileCard";
import RecentVacancies from "components/RecentVacanciesCard/RecentVacanciesCard";
import ScheduleCard from "components/ScheduleCard/ScheduleCard";
import { Col, Container, Row } from "react-bootstrap";


export default function Dashboard() {
  return (
    <Container className="mt-2">
      <Row>
        <Col className="g-3">
          <ProfileCard />
        </Col>
        <Col className="g-3">
          <RecentVacancies />
        </Col>
        <Col className="g-3">
          <ScheduleCard />
        </Col>
      </Row>
      <Row className="mt-2">
        <Col className="g-3">
          <NewOportunitiesCard />
        </Col>
      </Row>
    </Container>
  );
}

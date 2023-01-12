import { Col, Container, Row } from "react-bootstrap";
import MyProfileTag from "components/Tags/MyProfileTag";
import MyProfileCard from "components/MyProfileCard/MyProfileCard";
import ExperienceCard from "components/ExperienceCard/ExperienceCard";
import AcademicEducationCard from "components/EducationCard/EducationCard";
import CoursesCard from "components/CoursesCard/CoursesCard";


export default function MyProfile() {
  return (
    <Container className="mt-4">
      <Row>
        <Col sm={2}>
          <MyProfileTag />
        </Col>
        <Col>
          <Row className="g-2">
            <MyProfileCard />
          </Row>
          <Row className="g-2">
            <ExperienceCard />
          </Row>
          <Row className="g-2">
            <AcademicEducationCard />
          </Row> 
          <Row className="g-2">
            <CoursesCard />
          </Row>         
        </Col>
      </Row>
    </Container>
  );
}

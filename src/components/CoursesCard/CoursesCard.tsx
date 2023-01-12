import {
  Card,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import courses from "data/courses.json";
import CourseBtn from "components/CoursesCard/CourseBtn/CourseBtn";

export default function CoursesCard() {
  return (
    <Card className="mb-3">
      <Card.Header className="fs-4 mt-me-2 pe-pd-4">
        <Row>
          <Col md={4} >
            Cursos e Certificados
          </Col>
          <Col md={{ span: 4, offset: 4 }}>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <CourseBtn tipo={"Adicionar"} variant={"primary"}  />
            </div>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        <ListGroup>
          {courses.map((item) => (
            <ListGroupItem>
              <Row>
                <Col>
                  <h6> {item.institution} </h6>
                  <div className="clearfix"></div>
                  {item.course}
                  <div className="clearfix"></div>
                  {item.Date}
                  <div className="clearfix"></div>
                </Col>
                <Col>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <CourseBtn key={item.id} tipo={"Editar"} variant={ "secondary" } />
                  </div>
                </Col>
              </Row>
            </ListGroupItem>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

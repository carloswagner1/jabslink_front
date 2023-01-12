import {
  Button,
  Card,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import experiences from "data/experiences.json";
import ExperienceBtn from "./ExperienceBtn/ExperienceBtn";

export default function ExperienceCard() {
  return (
    <Card className="mb-3">
      <Card.Header className="fs-4 mt-me-2 pe-pd-4">
        <Row>
          <Col md={4} >
            Experiência Profisssional
          </Col>
          <Col md={{ span: 4, offset: 4 }}>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              < ExperienceBtn tipo={"Adicionar"} variant={"primary"} />
            </div>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        <ListGroup>
          {experiences.map((item) => (
            <ListGroupItem>
              <Row>
                <Col>
                  <h6> {item.company} </h6>
                  <div className="clearfix"></div>
                  {item.position}
                  <div className="clearfix"></div>
                  {item.modality}
                  <div className="clearfix"></div>
                  {item.startDate}
                  {" - "}
                  {item.finalDate}
                  <div className="clearfix"></div>
                  {item.locality}
                  <div className="clearfix"></div>
                  <strong>Competências:</strong> {item.skills}
                </Col>
                <Col>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  < ExperienceBtn tipo={"Editar"} variant={"secondary"} />
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

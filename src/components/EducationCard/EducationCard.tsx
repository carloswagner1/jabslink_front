import {  
  Card,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import education from "data/academicEducation.json";
import EducationBtn from "components/EducationCard/EducationBtn/EducationBtn";

export default function EducationCard() {
  return (
    <Card className="mb-3">
      <Card.Header className="fs-4 mt-me-2 pe-pd-4">
        <Row>
          <Col md={4} >
            Formação Acadêmica
          </Col>
          <Col md={{ span: 4, offset: 4 }}>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <EducationBtn tipo={"Adicionar"} variant={"primary"}/>
            </div>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        <ListGroup>
          {education.map((item) => (
            <ListGroupItem>
              <Row>
                <Col>
                  <h6> {item.institution} </h6>
                  <div className="clearfix"></div>
                  {item.course}
                  <div className="clearfix"></div>
                  {item.startDate}
                  {" - "}
                  {item.finalDate}
                  <div className="clearfix"></div>
                </Col>
                <Col>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <EducationBtn key={item.id} tipo={"Editar"} variant={ "secondary" } />
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

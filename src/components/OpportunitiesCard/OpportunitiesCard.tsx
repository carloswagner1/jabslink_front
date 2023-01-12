import { Button, Card, Col, Row } from "react-bootstrap";
import vacancies from "data/Vacancies.json";
import CardHeader from "react-bootstrap/esm/CardHeader";

export default function OpportunitiesCard() {
  return (
    <Row md={3} className="g-4">
      {vacancies.map((vacancy) => (
        <Col>
          <Card key={vacancy.id} className="h-100">
            <CardHeader>{vacancy.position}</CardHeader>
            <Card.Body>
              <Card.Text>
                <strong>Requisitos: </strong>
                {vacancy.requirements}
                <div className="clearfix"></div>
                <strong>Tipo de contratação: </strong>
                {vacancy.typeContraction}
                <div className="clearfix"></div>
                <strong>Benefícios: </strong>
                {vacancy.benefits}
                <div className="clearfix"></div>
                <strong>Remuneração: </strong>
                {vacancy.remuneration}
                <div className="clearfix"></div>
                <strong>Localidade: </strong>
                {vacancy.locality}
                <div className="clearfix"></div>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <Button className="m-1">Candidatar-se</Button>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

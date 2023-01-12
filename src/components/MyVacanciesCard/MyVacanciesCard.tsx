import { Button, Card, Col, Row } from "react-bootstrap";
import myVacancies from "data/myVacancies.json";
import CardHeader from "react-bootstrap/esm/CardHeader";

export default function MyVacanciesCard() {
  
  return (
    <Row md={3} className="g-4">
    {myVacancies.map((vacancy) => (
      <Col>
        <Card key={vacancy.id}>
          <CardHeader>{vacancy.position}</CardHeader>
          <Card.Body>            
            <Card.Text>
            {vacancy.locality}
              <div className="clearfix"></div>
              {vacancy.modality}
              <div className="clearfix"></div>
              Status: <span>{vacancy.status}</span>              
            </Card.Text>
            <Button className="me-2">Detalhes</Button>
            <Button className="me-2" variant="danger">Desistir</Button>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
  );
}

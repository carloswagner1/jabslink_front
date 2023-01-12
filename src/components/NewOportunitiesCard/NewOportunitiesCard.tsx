import { Card, Carousel } from "react-bootstrap";
import vacancies from "data/Vacancies.json";

export default function NewOportunitiesCard() {
  return (
    <Card className="h-100">
      <Card.Header>
        <h6> Novas Oportunidades</h6>
      </Card.Header>
      <Card.Body>
        <Carousel className="text-center" variant="dark">
          {vacancies.map((vacancy) => (
            <Carousel.Item key={vacancy.id}>
              <Card className="text-bg-primary  mb-5 w-100">
                <Card.Body className="text-bg-light">
                  <Card.Title>{vacancy.position}</Card.Title>
                  <Card.Text>
                    <div className="clearfix"></div>
                    {vacancy.modality}
                    <div className="clearfix"></div>
                    {vacancy.typeContraction}
                    <div className="clearfix"></div>
                    {vacancy.locality}
                    <div className="clearfix"></div>
                    Remuneração: {vacancy.remuneration}
                    <div className="clearfix"></div>
                    Benefícios: {vacancy.benefits}
                    <div className="clearfix"></div>
                  </Card.Text>
                    <a href="opportunities" className="btn btn-primary">Ver mais</a>
                </Card.Body>
              </Card>
            </Carousel.Item>
          ))}
        </Carousel>
      </Card.Body>
    </Card>
  );
}

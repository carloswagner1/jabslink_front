import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import schedule from "data/schedule.json";

export default function ScheduleCard() {
  return (
    <Card className="h-100">
      <Card.Header>Agenda</Card.Header>
      <Card.Body>
        {schedule.map((item) => (
          <>
            <Card.Title key={item.id}>{item.title}</Card.Title>
            <Card.Text>
              {item.position}
              <div className="clearfix"></div>
              Dia: {item.date}
              <div className="clearfix"></div>
              <Link to={item.link}>Link da reunião</Link>
            </Card.Text>
          </>
        ))}
      </Card.Body>
    </Card>
  );
}

import { Badge, ListGroup } from "react-bootstrap";
export default function MyVacanciesTag() {
  return (
    <ListGroup as="ul">
      <ListGroup.Item as="li" active>
        Minhas Vagas
      </ListGroup.Item>
      <ListGroup.Item as="li">
        Em andamento <Badge bg="secondary">3</Badge>
      </ListGroup.Item>
      <ListGroup.Item as="li">
        Encerradas <Badge bg="secondary">0</Badge>
      </ListGroup.Item>
    </ListGroup>
  );
}

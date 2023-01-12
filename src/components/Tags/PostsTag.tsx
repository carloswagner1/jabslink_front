import { Badge, ListGroup } from "react-bootstrap";
export default function PostsTag() {
  return (
    <ListGroup as="ul">
      <ListGroup.Item as="li" active>
        Mensagens
      </ListGroup.Item>
      <ListGroup.Item as="li">
        Não Lidas <Badge bg="danger">2</Badge>
      </ListGroup.Item>
      <ListGroup.Item as="li">
        Lidas <Badge bg="success">0</Badge>
      </ListGroup.Item>
    </ListGroup>
  );
}
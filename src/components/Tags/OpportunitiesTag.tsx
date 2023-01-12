import { ListGroup } from "react-bootstrap";
export default function OpportunitiesTag() {
  return (
    <ListGroup as="ul">
      <ListGroup.Item as="li" active>
        Oportunnidades
      </ListGroup.Item>
      <ListGroup.Item as="li">
        Vagas disponíveis
      </ListGroup.Item>      
    </ListGroup>
  );
}

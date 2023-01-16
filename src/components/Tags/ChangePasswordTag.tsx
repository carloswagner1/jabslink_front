import { ListGroup } from "react-bootstrap";
export default function ContactTag() {
  return (
    <ListGroup as="ul">
      <ListGroup.Item as="li" active>
        Alterar Senha
      </ListGroup.Item>
      <ListGroup.Item as="li">
        Formulário
      </ListGroup.Item>      
    </ListGroup>
  );
}

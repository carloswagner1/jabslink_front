import { ListGroup } from "react-bootstrap";
export default function MyProfileTag() {
  return (
    <ListGroup as="ul">
      <ListGroup.Item as="li" active>
        Meu Perfil
      </ListGroup.Item>
      <ListGroup.Item as="li">
        Experiência 
      </ListGroup.Item>
      <ListGroup.Item as="li">
        Formação
      </ListGroup.Item>
      <ListGroup.Item as="li">
        Cursos
      </ListGroup.Item>
    </ListGroup>
  );
}

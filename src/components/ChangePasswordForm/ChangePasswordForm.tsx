import { Button, Container, Form, Row } from "react-bootstrap";

export default function ChangePasswordForm() {
  return (
    <Container className="mb-4 bg-light p-3">
      <Form>
        <Row className="p-4 pb-5">
          <Form.Text className="text-center fs-2">Alterar Senha</Form.Text>
        </Row>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Senha Atual</Form.Label>
          <Form.Control type="password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Nova Senha</Form.Label>
          <Form.Control type="password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Confirma senha</Form.Label>
          <Form.Control type="password" />
        </Form.Group>
        
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <Button className="" variant="primary">
            Salvar
          </Button>{" "}
          <Button className="" type="reset" variant="danger">
            Limpar
          </Button>{" "}
        </div>
      </Form>
    </Container>
  );
}

import { Button, Form } from "react-bootstrap";
import { Link as RouterLink } from "react-router-dom";

export default function Login() {
  return (
    <>
      <Form>
        <h3 className="h3 mb-4 fw-normal text-lg-center ">Primeiro Acesso</h3>
        <h5 className="m-2 mb-4 fw-normal ">Informe os dados necessários</h5>
        <Form.Floating className="form-floating">
          <Form.Control
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="nome"
          />
          <Form.Label>Nome Completo</Form.Label>
        </Form.Floating>
        <Form.Floating className="form-floating">
          <Form.Control
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <Form.Label>Email</Form.Label>
        </Form.Floating>
        <Form.Floating className="form-floating ">
          <Form.Control
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <Form.Label>Senha</Form.Label>
        </Form.Floating>

        <Button className="mt-3 w-100 btn btn-lg btn-primary" type="submit">
          Cadastrar
        </Button>
        <div className="mt-3">
          <p className="mb-0  text-center">
            Já sou cadastrado:{" "}
            <RouterLink className="text-primary fw-bold" to={`../login`}>
              login
            </RouterLink>
          </p>
        </div>
      </Form>
    </>
  );
}

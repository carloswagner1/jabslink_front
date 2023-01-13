import { Button, Form } from "react-bootstrap";
import { Link as RouterLink } from "react-router-dom";

export default function Login() {
  return (
    <>
      <Form>
        <h3 className="h3 mb-4 fw-normal text-lg-center ">Login</h3>
        <h5 className="m-2 mb-4 fw-normal ">Informe seu email e senha</h5>
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

        <Form.Check
          className="text=center mt-2"
          type="checkbox"
          label="Lembrar"
        />

        <Button className="mt-2 w-100 btn btn-lg btn-primary" type="submit">
          Login
        </Button>
        <div className="mt-3">
          <p className="mb-0  text-center">
            Esqueceu a senha:{" "}
            <RouterLink to={"../reset"} className="text-primary fw-bold">
              clique aqui
            </RouterLink>
          </p>
          <p className="mb-0  text-center">
            Primeiro acesso:{" "}
            <RouterLink className="text-primary fw-bold" to={"../sign-up"}>
              cadastre-se
            </RouterLink>
          </p>
        </div>
      </Form>{" "}
    </>
  );
}

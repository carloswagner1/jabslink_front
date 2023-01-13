import { Button, Form } from "react-bootstrap";
import { Link as RouterLink } from "react-router-dom";

export default function ResetPassword() {
  return (
    <>
      <Form>
        <h3 className="h3 mb-4 fw-normal text-lg-center ">
          Recuperação de senha
        </h3>
        <h5 className="m-2 mb-4 fw-normal ">Informe seu email</h5>
        <Form.Floating className="form-floating">
          <Form.Control
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <Form.Label>Email</Form.Label>
        </Form.Floating>

        <Button className="mt-3 w-100 btn btn-lg btn-primary" type="submit">
          Enviar
        </Button>
        <div className="mt-3">
          <p className="mb-0  text-center">
            Retornar ao {" "}
            <RouterLink to={"../login"} className="text-primary fw-bold">
              login
            </RouterLink>
          </p>          
        </div>
      </Form>{" "}
    </>
  );
}

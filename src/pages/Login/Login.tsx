import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Image,
  Row,
} from "react-bootstrap";
import { Link as RouterLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";

export default function Login() {
  
  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={4} xs={12}>
            <div className="border border-3 border-primary"></div>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <div className="mb-3">
                    <Form>
                      <div className="text-center">
                        <Image
                          className=" rounded mx-auto d-block "
                          src={logo}
                          alt="Logo"
                        />
                      </div>

                      <h3 className="h3 mb-4 fw-normal text-lg-center ">
                        Login
                      </h3>
                      <h5 className="m-2 mb-4 fw-normal ">
                        Informe seu email e senha
                      </h5>
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
                        className="text=center"
                        type="checkbox"
                        label="Lembrar"
                      />

                      <Button
                        className="w-100 btn btn-lg btn-primary"
                        type="submit"                        
                      >
                        Login                         
                          
                      </Button>
                      <div className="mt-3">
                        <p className="mb-0  text-center">
                          Esqueceu a senha: {" "}
                          <RouterLink to="{''}" className="text-primary fw-bold">
                            clique aqui
                          </RouterLink>
                        </p>
                        <p className="mb-0  text-center">
                          Primeiro acesso: {" "}
                          <RouterLink
                            className="text-primary fw-bold"
                            to={`/sign-up`}
                          >
                            cadastre-se
                          </RouterLink>
                        </p>
                        <p className="mt-5 mb-3" id="text-company">
                          {" "}
                          Powered by &copy;
                          <a href="https://www.itlab.com.br">
                            It Lab Brasil Ltda
                          </a>
                        </p>
                      </div>
                    </Form>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

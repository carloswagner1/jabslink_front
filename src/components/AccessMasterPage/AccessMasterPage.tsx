import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import logo from "../../assets/images/logo.png";
export default function AccessMasterPage() {
  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={4} xs={4}>
            <div className="border border-3 border-primary"></div>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <div className="mb-3">
                    <div className="text-center">
                      <Image
                        className=" rounded mx-auto d-block "
                        src={logo}
                        alt="Logo"
                      />
                    </div>
                    <Outlet />
                    <p className="mt-5 mb-3" id="text-company">
                      {" "}
                      Powered by &copy;
                      <a href="https://www.itlab.com.br">It Lab Brasil Ltda</a>
                    </p>
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

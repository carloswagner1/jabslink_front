import {
  Button,
  Card,
  Col,
  Container,
  Form,
  FormLabel,
  Row,
} from "react-bootstrap";
import vacancies from "data/Vacancies.json";
import CardHeader from "react-bootstrap/esm/CardHeader";

export default function NewProcessForm() {
  return (
    <Container className="mb-4 bg-light p-3">
      <Form>
        <Row className="p-4 pb-4">
          <Form.Text className="text-center fs-2">
            Novo Processo Seletivo
          </Form.Text>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <FormLabel htmlFor="inputPosition">Cargo</FormLabel>
              <Form.Select aria-label="Default select example">
                <option>Selecione uma opção</option>
                {vacancies.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.position}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Início da inscrições</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Fim das inscrições</Form.Label>
              <Form.Control type="date" />
            </Form.Group>

            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <Button className="" variant="primary">
                Salvar
              </Button>{" "}
              <Button className="" type="reset" variant="danger">
                Limpar
              </Button>{" "}
            </div>
          </Col>
          <Col>
            <Card key={1} className="h-100">
              <Card.Body>
                <Card.Text>
                  <strong>Desenvolvedor Backend</strong>
                  <div className="clearfix"></div>
                  <strong>Requisitos: </strong>
                  Conhecimento e experiência com: C# Angular, HTML e CSS,
                  JavaScript, Git, SQL Server, Azure Conhecimento de
                  Metodologias Ágeis
                  <div className="clearfix"></div>
                  <strong>Tipo de contratação: </strong> PJ
                  <div className="clearfix"></div>
                  <strong>Benefícios: </strong>
                  Vale-refeição, plano de saúde, vale transporte
                  <div className="clearfix"></div>
                  <strong>Remuneração: </strong>
                  R$5.000,00
                  <div className="clearfix"></div>
                  <strong>Localidade: </strong>
                  São Paulo, SP - Brasil
                  <div className="clearfix"></div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

import { Col, Form, Row } from "react-bootstrap";

export default function OpportinitiesSelect() {
  return (
    <Row className="g-2">
      <Col>
      <Form.Select aria-label="Default select example">
      <option>Vagas por Área </option>
      <option value="1">Administrativa</option>
      <option value="3">Comercial</option>
      <option value="4">Jurídico</option>
      <option value="4">Tecnologia</option>
    </Form.Select>
      </Col>
      <Col>
      <Form.Select aria-label="Default select example">
      <option>Vagas por Localidade </option>
      <option value="1">Campinas</option>
      <option value="3">São Paulo</option>
      <option value="4">Sorocaba</option>
      <option value="4">Barueri</option>
    </Form.Select>
      </Col>
    </Row>

  );
}

import { useState } from "react";
import { Col, FormGroup, FormLabel, InputGroup, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import statesList from 'data/statesList.json'

export default function EditProfileData() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary me-2" onClick={handleShow}>
        Editar dados
      </Button>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar dados</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col xs={6} md={4}>
                <Form.Label htmlFor="inputCEP">CEP</Form.Label>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="00000-000"
                    type="text"
                    id="inputCEP"
                    aria-label="CEP"
                    aria-describedby="basic-addon2"
                    autoFocus
                  />
                  <Button variant="outline-secondary" id="button-addon2">
                    Buscar
                  </Button>
                </InputGroup>
              </Col>
            </Row>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label htmlFor="inputAddress">Endereço</Form.Label>
              <Form.Control type="text" id="inputAddress" />
            </Form.Group>
            <FormGroup className="mb-3" controlId="exampleForm.ControlInput1">
              <Row>
                <Col xs={6} md={2}>
                  <FormLabel htmlFor="inputNumber">Número</FormLabel>
                  <Form.Control type="text" id="inputNumber" />
                </Col>
                <Col xs={12} md={6}>
                  <FormLabel htmlFor="inputComp">Complemento</FormLabel>
                  <Form.Control type="text" id="inputComp" />
                </Col>
                <Col xs={6} md={4}>
                  <Form.Label>Telefone</Form.Label>
                  <Form.Control type="text" placeholder="(99)99999-9999" />
                </Col>
              </Row>
            </FormGroup>
            <FormGroup className="mb-3" controlId="exampleForm.ControlInput1">
              <Row>
                <Col xs={12} md={8}>
                  <FormLabel htmlFor="inputCity">Cidade</FormLabel>
                  <Form.Control type="text" id="inputCity" />
                </Col>
                <Col xs={6} md={2}>
                  <FormLabel htmlFor="inputState">Estado</FormLabel>
                  <Form.Select aria-label="Default select example">
                    <option  >UF</option>
                    {statesList.map((state) => (
                      <option key={state.ID} value={state.ID}>{state.Sigla}</option>
                    ))}
                                      
                  </Form.Select>
                </Col>
              </Row>
            </FormGroup>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

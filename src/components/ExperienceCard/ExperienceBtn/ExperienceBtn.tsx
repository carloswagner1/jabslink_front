import { useState } from "react";
import { Col, FormGroup, FormLabel, FormSelect, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import statesList from 'data/statesList.json'

interface Props {
  tipo: string;
  variant: string;
}

export default function ExperienceBtn(props: Props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="m-1" variant={props.variant} onClick={handleShow}>
        {props.tipo}
      </Button>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.tipo} experiência</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="form-inline">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label htmlFor="inputCompany">Empresa</Form.Label>
              <Form.Control type="text" id="inputCompany" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label htmlFor="inputPosition">Cargo</Form.Label>
              <Form.Control type="text" id="inputPosition" />
            </Form.Group>
            
            <FormGroup className="mb-3" controlId="exampleForm.ControlInput1">
              <Row>
              <Col xs={12} md={4}>
                  <Form.Label htmlFor="selectModality">Modalidade</Form.Label>
                  <FormSelect
                    id="selectModality"
                    aria-label="Default select example"
                  >
                    <option>Escolha uma opção</option>
                    <option value="1">Híbrido</option>
                    <option value="2">Presencial</option>
                    <option value="3">Remoto</option>
                  </FormSelect>
                </Col>
                <Col xs={12} md={6}>
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
            <FormGroup className="mb-3" controlId="exampleForm.ControlInput1">
              <Row>
                <Col xs={12} md={4}>
                  <FormLabel htmlFor="inputStartDate">
                    Data de Admissão
                  </FormLabel>
                  <Form.Control type="date" id="inputStartDate" />
                </Col>
                <Col xs={12} md={4}>
                  <FormLabel htmlFor="inputFinalDate">Data da Saída</FormLabel>
                  <Form.Control type="date" id="inputFinalDate" />
                </Col>
                <Col className="mt-4 pt-3">
                  <Form.Check
                    type="checkbox"
                    id="custom-switch"
                    label="Em andamento"
                  />
                </Col>
              </Row>
            </FormGroup>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Competências</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleClose} type="submit">
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

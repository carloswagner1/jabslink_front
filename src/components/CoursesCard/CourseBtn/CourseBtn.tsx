import { useState } from "react";
import { Col, FormGroup, FormLabel, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

interface Props {
  tipo: string;
  variant: string;
}

export default function CourseBtn({ tipo,variant }: Props ) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="m-1" variant={variant} onClick={handleShow}>
        {tipo}
      </Button>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{tipo} curso</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="form-inline">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label htmlFor="inputInstitution">Intituição</Form.Label>
              <Form.Control type="text" id="inputInstitution" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label htmlFor="inputCourse">Curso</Form.Label>
              <Form.Control type="text" id="inputCourse" />
            </Form.Group>
            <Row>
              <Col xs={12} md={4}>
                <FormGroup
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <FormLabel htmlFor="inputDate">Conclusão</FormLabel>
                  <Form.Control type="date" id="inputDate" />
                </FormGroup>
              </Col>
            </Row>
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

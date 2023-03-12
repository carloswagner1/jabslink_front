import NewProcessForm from "components/NewProcessForm/NewProcessForm";
import ChangePasswordTag from "components/Tags/ChangePasswordTag";
import { Col, Container, Row } from "react-bootstrap";

export default function NewProcess() {
  return (
    <Container className="mt-4">
      <Row>
        <Col sm={2}>
          <ChangePasswordTag />
        </Col>
        <Col>
          <NewProcessForm />
        </Col>
      </Row>
    </Container>
  );
}

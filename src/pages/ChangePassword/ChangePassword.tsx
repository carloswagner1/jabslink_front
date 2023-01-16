import ChangePasswordForm from "components/ChangePasswordForm/ChangePasswordForm";
import ChangePasswordTag from "components/Tags/ChangePasswordTag";
import { Col, Container, Row } from "react-bootstrap";

export default function ChangePassword() {
  return (
    <Container className="mt-4">
      <Row>
        <Col sm={2}>
          <ChangePasswordTag />
        </Col>
        <Col>
          <ChangePasswordForm />
        </Col>
      </Row>
    </Container>
  );
}

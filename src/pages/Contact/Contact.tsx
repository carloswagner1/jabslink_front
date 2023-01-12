import ContactForm from "components/ContactForm/ContactForm";
import ContactTag from "components/Tags/ContactTag";
import { Col, Container, Row } from "react-bootstrap";

export default function Contact() {
  return (
    <Container className="mt-4">
      <Row>
        <Col sm={2}>
          <ContactTag />
        </Col>
        <Col>
        <ContactForm />
          <Row className="g-2">
            <Col md></Col>
            <Col md></Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

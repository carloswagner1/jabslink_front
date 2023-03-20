import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const ErrorPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center">404 Error - Page Not Found</h1>
          <p className="text-center">We're sorry, but the page you're looking for cannot be found. Please check the URL and try again.</p>
          <div className="d-flex justify-content-center mt-5">
            <Button href="/" variant="primary">Go Home</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ErrorPage;

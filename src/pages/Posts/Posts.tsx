import PostBody from "components/PostBoby/PostBody";
import PostsSelect from "components/PostsSelect/PostsSelect";
import SearchImput from "components/SearchInput/SearchInout";
import PostsTag from "components/Tags/PostsTag";
import { Col, Container, Row } from "react-bootstrap";

export default function Posts() {
  return (
    <Container className="mt-4">
      <Row>
        <Col sm={2}>
          <PostsTag />
        </Col>
        <Col>
          <Row className="g-2">
            <Col md>
              <SearchImput />
            </Col>
            <Col md>
              <PostsSelect />
            </Col>
          </Row>
          <PostBody />
        </Col>
      </Row>
    </Container>
  );
}

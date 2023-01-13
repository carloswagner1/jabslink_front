import Header from "components/Header/Header";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

export default function CandidateMasterPage() {
  return (
    <>
      <Header />      
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

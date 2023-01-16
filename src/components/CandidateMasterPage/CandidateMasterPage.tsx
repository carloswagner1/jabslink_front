import HeaderCandidate from "components/HeaderCandidate/HeaderCandidate";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

export default function CandidateMasterPage() {
  return (
    <>
      <HeaderCandidate />      
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

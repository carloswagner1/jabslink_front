import HeaderCompany from "components/HeaderCompany/HeaderCompany";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

export default function CompanyMasterPage() {
  return (
    <>

        <HeaderCompany />
        <Container>
          <Outlet />
        </Container>
      
    </>
  );
}

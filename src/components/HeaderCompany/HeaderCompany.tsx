import {
  Badge,
  Container,
  Image,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo32.png";

export default function HeaderCompany() {
  return (
    <Navbar className="header" expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand className="brand fs-3 align-center" href="#home">
          <Image
            src={Logo}
            width={40}
            className="d-inline-block align-top me-2"
          />
          Jobs Link
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav ">
          <Nav fill className="me-auto" variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
              <Link className="nav-link active" aria-current="page" to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg "
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-house me-2 mb-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
                </svg>
                Home
              </Link>
            </Nav.Item>
            
            <Nav.Item>
            <NavDropdown                
                id="nav-dropdown-dark-example"
                title="Processos Seletivos"
                menuVariant="light"                
              >
                <NavDropdown.Item><Link className="text-black" style={{ textDecoration: 'none'}} to={"./newProcess"}>Novo Processo Seletivo</Link></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1" >Processos em Andamento</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Processos Encerrados
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Solicitações Aprovadas
                </NavDropdown.Item>
               </NavDropdown>
            </Nav.Item>

            <Nav.Item>
              <Link className="nav-link" to="posts">
                
                Mensagens <Badge bg="danger">2</Badge>
                <span className="visually-hidden">unread messages</span>
              </Link>
            </Nav.Item>
          </Nav>
          <Nav>
            <NavDropdown
              title="Carlos Wagner"
              id="collasible-nav-dropdown-start "
              drop="start"
            >
              <NavDropdown.Item>
                <Link
                  className="text-black"
                  style={{ textDecoration: "none" }}
                  to={"./myprofile"}
                >
                  Meu Perfil
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  className="text-black"
                  style={{ textDecoration: "none" }}
                  to={"./password"}
                >
                  Alterar Senha
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">Logout</NavDropdown.Item>
            </NavDropdown>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              className="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

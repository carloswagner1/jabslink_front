import {
  Navbar,  
  Image,
  ListGroup,
  ListGroupItem,  
  Container,

} from "react-bootstrap";
import "./Sidebar.scss";
import Logo from "../../assets/images/logoD.png";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <Container className="sidebar d-flex flex-column flex-shrink-0 p-2  text-white bg-dark " >
      <Navbar.Brand className="brand fs-3 align-center" href="#home ">
        <Image src={Logo} width={40} className="d-inline-block align-top me-2" />
        Jobs Link
      </Navbar.Brand>
      <hr />

      <ListGroup className="fs-5 list-unstyled  mb-auto">
        <ListGroupItem className="nav-item bg-dark">
          <a href="/" className="nav-link text-white">Dashboard
          </a>          
        </ListGroupItem>
        <ListGroupItem className="nav-item bg-dark">
          <a href="/" className="nav-link text-white">Minhas Vagas
          </a>          
        </ListGroupItem>

        <ListGroupItem className="bg-dark">
          <a href="/" className="nav-link text-white">
            Oportunidades
          </a>
        </ListGroupItem>
        <ListGroupItem className="bg-dark">
          <a href="/" className="nav-link text-white">
            Mensagens
          </a>
        </ListGroupItem>
      </ListGroup>
      <hr />
      <p className="copyright" >
            Powered by © {new Date().getFullYear()}{" "}
            <Link className="text-white" to="https://www.itlab.com.br">It Lab Brasil Ltda</Link>
          </p>  
    </Container>
  );
}

export default Sidebar;

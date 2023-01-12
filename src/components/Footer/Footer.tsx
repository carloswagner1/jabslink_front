import { Container, Navbar } from "react-bootstrap";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (    
  <Navbar bg="light" variant="light" expand="lg" className="mt-5 p-2 ">
      <Container fluid >          
          <p className="copyright mx-auto" >
            Powered by © {new Date().getFullYear()}{" "}
            <a href="https://www.itlab.com.br">It Lab Brasil Ltda</a>
          </p>        
      </Container>
    </Navbar>
  );
}

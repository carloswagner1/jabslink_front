import { Accordion, Card, FormCheck, Nav, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function PostBody() {
  return (
    <>
      <Card className="mb-3">
        <Card.Body>
          <Nav>
            <Nav.Item>
              <FormCheck className="me-3 mb-2"></FormCheck>
            </Nav.Item>
            <Nav.Item>
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip>Apagar</Tooltip>}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  fill="currentColor"
                  className="bi bi-trash align-top me-3"
                  viewBox="0 0 18 18"
                >
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                  <path
                    fill-rule="evenodd"
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                  />
                </svg>
              </OverlayTrigger>
            </Nav.Item>
            <Nav.Item>
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip>Marcar como lida</Tooltip>}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  fill="currentColor"
                  className="bi bi-envelope-open"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.817l5.75 3.45L8 8.917l1.25.75L15 6.217V5.4a1 1 0 0 0-.53-.882l-6-3.2ZM15 7.383l-4.778 2.867L15 13.117V7.383Zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734ZM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2Z" />
                </svg>
              </OverlayTrigger>
            </Nav.Item>
          </Nav>
        </Card.Body>
      </Card>
      <Accordion>
        <Accordion.Item eventKey="0" className="mb-2">
          <Accordion.Header>
            <FormCheck className="me-3 mb-2" />
            <h6 className=""> Desenvolvedor Backend </h6>
          </Accordion.Header>
          <Accordion.Body>
            <p>Prezado Candidato,</p>
            <p>
              O seu teste de perfil pode ser realizado até às 23:59 horas do dia
              28/01/2023. O candidato deverá reservar um período de 30 minutos,
              em ambiente tranquilo e com conexão à internet estável para
              realizar o teste
            </p>
            <p>
              Clique no link para acessar o teste:{" "}
              <Link to="">Teste de Perfil</Link>
            </p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1" className="mb-2">
          <Accordion.Header>
            <FormCheck className="me-3 mb-2" />
            <h6 className=""> Desenvolvedor Frontend </h6>
          </Accordion.Header>
          <Accordion.Body>
            <p>Parabéns,</p>
            <p>
              Você foi aprovado para a fase de entrevista. Nesta etapa queremos
              conhecer um pouco mais de você e será possível você poder tirar as
              dúvidas relacioados ao processo seletivo relacionado. A sua
              entrevista está agendada paara o dia28/01/2023 às 15:00 horas.
            </p>
            <p>
              Clique no link para acessar o teste:{" "}
              <Link to="">Link da Entrevista</Link>
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

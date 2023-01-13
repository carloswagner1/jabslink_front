import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import candidate from "data/candidate.json";
import Photo from "../../assets/images/foto1.jpg";
import EditProfileBtn from "components/ProfileCard/EditProfileBtn/EditProfileBtn";

export default function profileCard() {
  //const perfil = JSON.parse(state.candidato);
  //const foto = perfil.photo;

  return (
    <>
      {candidate.map((profile) => (
        <Card className="mb-3 p-2" key={profile.id}>
          <Row className="g-0">
            <Col className="md-4">
              <Card.Img className="sm-2" src={Photo} />
            </Col>
            <Col className="md-8">
              <Card.Body className="sm-8 h-100">
                <Card.Title className="fs-4">{profile.name}</Card.Title>
                <Card.Text>
                  <div className="clearfix"></div>
                  Endereço: {profile.address}
                  <div className="clearfix"></div>
                  {profile.city}, {profile.uf}, {profile.country}
                  <div className="clearfix"></div>
                  Cargo atual: {profile.currentPosition}
                  <div className="clearfix"></div>
                  Email:{" "}
                  <span>
                    <Link to="">{profile.email}</Link>{" "}
                  </span>
                  <div className="clearfix"></div>
                  Telefone: <span>{profile.phone}</span>
                </Card.Text>
                <EditProfileBtn />
              </Card.Body>
            </Col>
          </Row>
        </Card>
      ))}
    </>
  );
}

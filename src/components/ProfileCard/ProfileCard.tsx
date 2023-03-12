import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import candidate from "data/candidate.json";
import Photo from "../../assets/images/foto1.jpg";

export default function profileCard() {
  //const perfil = JSON.parse(state.candidato);
  //const foto = perfil.photo;

  return (
    <>
      {candidate.map((profile) =>   (
        <Card className="mb-3 h-100" key={profile.id}>
          <Card.Img variant="top" src={Photo} />
          <Card.Body>
            <Card.Title>{profile.name}</Card.Title>
            <Card.Text>
              {profile.city}, {profile.uf}, {profile.country}
              <div className="clearfix"></div>
              {profile.currentPosition}
              <div className="clearfix"></div>
              Email:{" "}
              <span>
                <Link to="">{profile.email}</Link>{" "}
              </span>
              <div className="clearfix"></div>
              Telefone: <span>{profile.phone}</span>
            </Card.Text>
            <Link className="btn btn-primary" style={{ textDecoration: 'none'}} to={"./myprofile"}>Meu Perfil</Link> 
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

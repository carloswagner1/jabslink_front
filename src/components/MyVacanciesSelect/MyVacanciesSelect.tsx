import { Form } from "react-bootstrap";

export default function MyVacanciesSelect(){
    return(
        <Form.Select aria-label="Default select example">
        <option>Status da Vaga</option>
        <option value="1">Em andamento</option>
        <option value="2">Encerradas</option>
      </Form.Select>

    )
}
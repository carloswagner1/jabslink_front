import { Form } from "react-bootstrap";

export default function MyVacanciesSelect(){
    return(
        <Form.Select aria-label="Default select example">
        <option>Status da Mensagem</option>
        <option value="1">Lidas</option>
        <option value="2">Não Lidas</option>
      </Form.Select>

    )
}
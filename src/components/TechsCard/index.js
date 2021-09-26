import { Container } from "./styles"
import { Button } from "@material-ui/core"
import axios from "axios"
export default function TechsCard({title, status, ids}) {
    const handleDelete = (id) =>{
        axios.delete(`https://kenziehub.herokuapp.com/users/techs/${id}`,{
            headers:{
                Authorization: `Bearer ${JSON.parse(localStorage.getItem('@user:token'))}`
            }
        })
    }
    return (
        <Container>
                <span id="titulo">{title}</span>
                <span id="status">{status}</span>
            <div>
                <Button
                id="concluir"
                variant="contained"
                color="secondary"
                size="small"
                onClick={()=>handleDelete(ids)}
                >Excluir</Button>
            </div>
        </Container>
    )
}

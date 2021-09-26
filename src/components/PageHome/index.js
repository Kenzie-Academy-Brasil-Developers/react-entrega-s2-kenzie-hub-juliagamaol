import { Container, Content } from "./styles"
import {Button} from '@material-ui/core';
import { Redirect, useHistory } from "react-router";

export const PageHome = ({authenticated}) =>{ 
    const history = useHistory()
    const sendTo = (path) =>{
        history.push(path)
    }
    if(authenticated){
        return <Redirect to="/dashboard"/>
      }
  
    return(
        <Container>
           <Content>
                <h2>techList</h2>
                <span>Liste suas tecnologias preferidas</span>
                <div>
                    <Button variant="contained" color="secondary" size="small" id="btn" onClick={()=> sendTo('/login')}>Login</Button>
                    
                    <Button variant="outlined" color="secondary" size="small" id="btn"onClick={()=> sendTo('/register')}>Cadastre-se</Button>
                </div>
           </Content>
        </Container>
    )
}
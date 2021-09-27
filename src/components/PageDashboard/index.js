
import { Container, TechsContainer } from "./styles";
import { TextField, Button, MenuItem } from "@material-ui/core";
import { Redirect } from "react-router";
import TechsCard from "../TechsCard";
import { useEffect, useState } from "react";
import axios from "axios";
export default function PageDashboard({ authenticated }) {
      
      const[input, setInput] = useState('')
      const [nivel, setNivel] = useState("");
      const[tecs, setTecs] = useState([])
      const status = [
        {
          value: 1,
          label: "Iniciante",
        },
        {
          value: 2,
          label: "Intermediário",
        },
        {
          value: 3,
          label: "Avançado",
        },
      ];
      
      const handleForm = (data) =>{
            data.preventDefault()
            const formData = {
                'title':input,
                'status':nivel
            }
            axios.post('https://kenziehub.herokuapp.com/users/techs',formData,{
                headers:{
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem('@user:token'))}`
                }
            }).then(response=>console.log(response))
      }
      useEffect(()=>{
          axios.get(`https://kenziehub.herokuapp.com/users/${JSON.parse(localStorage.getItem('id'))}`)
          .then(response=>{
              const {techs} = response.data
              setTecs(techs)
          })
      },[tecs])

     const logout = () =>{
        localStorage.clear()
       window.location.reload()
     }
      if (!authenticated) {
        return <Redirect to="/login" />;
      }
      
      return (
        <>
          <Container>
            <form onSubmit={handleForm}>
              <TextField
                required
                value={input}
                onChange={event=>setInput(event.target.value)}
                size="small"
                label="Nova tecnologia"
                
              />

              <TextField
                required
                label="Status"
                size="small"
                style={{width:'220px'}}
                select
                
                value={nivel}
                onChange={(event) => setNivel(event.target.value)}
              >
                {status.map((option) => {
                  return <MenuItem value={option.label}>
                    {option.label}
                  </MenuItem>;
                })}
              </TextField>
              <Button
                variant="contained"
                color="secondary"
                size="small"
                id="btn"
                type="submit"
              >
                Adicionar
              </Button>

              <Button
                variant="contained"
                color="secondary"
                size="small"
                id="btn"
                onClick={logout}
              >
                Sair
              </Button>
            </form>
          </Container>
          
          <TechsContainer>
                {tecs.map(tec=>{
                    return <TechsCard key={tec.id} title={tec.title} status={tec.status} ids={tec.id} />
                })}
          </TechsContainer>

        </>
    )
}
 
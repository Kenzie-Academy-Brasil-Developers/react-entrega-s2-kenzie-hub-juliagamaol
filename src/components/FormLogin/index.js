import React from 'react'
import { Container, Background, Content, AnimationContainer } from "./styles";
import { TextField, Button, InputAdornment } from "@material-ui/core";
import { Link } from "react-router-dom";
import {AiOutlineMail} from 'react-icons/ai'
import { RiLockPasswordLine } from "react-icons/ri"
import { useForm } from "react-hook-form"
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios';
import { toast } from 'react-toastify';
import { Redirect, useHistory } from 'react-router';

export default function FormLogin({authenticated,setAuthenticated}) {

    const schema = yup.object().shape({
      email: yup.string().email('Formato de email inadequado').required('E-mail obrigatório!'),
      password: yup.string()
      .min(8, 'Senha com no mínimo 8 caracteres')
      .matches('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])', 'Necessário ter letras, números e ao menos um símbolo.')
      .required('Senha Obrigatória!')
    })
    const {register, handleSubmit, formState: {errors}} = useForm({
      resolver: yupResolver(schema)
    })
    const history = useHistory()

    const onSubmitForm = ({email,password}) =>{
        const formData = {
          'email':email,
          'password':password
        }
        axios.post('https://kenziehub.herokuapp.com/sessions', formData)
        .then(response=>{
          const{token,user} = response.data

          localStorage.setItem('@user:token', JSON.stringify(token))
          localStorage.setItem('id', JSON.stringify(user.id))

          setAuthenticated(true)
          
          return history.push('/dashboard')
        }).catch(err=>toast.error('Email ou senha inválida'))
    }

    if(authenticated){
      return <Redirect to="/dashboard"/>
    }

    return (
        <Container>
        <Background />
        <Content>
          <AnimationContainer>
            <form onSubmit={handleSubmit(onSubmitForm)}>
              <h2>Login</h2>

              <TextField
                id="outlined-basic"
                label="E-mail"
                placeholder="seu e-mail"
                variant="outlined"
                margin="normal"
                InputProps={{
                    startAdornment:(
                        <InputAdornment>
                            <AiOutlineMail size={20}/>
                        </InputAdornment>
                    )
                }}
                {...register('email')}
                error={!!errors.email}
                helperText={errors.email?.message}
                />

              <TextField
                id="outlined-basic"
                label="Senha"
                placeholder="sua senha"
                type="password"
                variant="outlined"
                margin="normal"
                InputProps={{
                    startAdornment:(
                        <InputAdornment>
                            <RiLockPasswordLine size={20}/>
                        </InputAdornment>
                    )
                }}
                {...register('password')}
                error={!!errors.password}
                helperText={errors.password?.message}
              />
               
              <div>
                  
              <Button
                variant="contained"
                color="secondary"
                size="small"
                id="btn"
                type="submit"
              >
                Entrar
              </Button>
              <p>
                Não tem conta?<Link to="/register">Faça seu cadastro</Link>
              </p>
              </div>
            </form>
          </AnimationContainer>
        </Content>
      </Container>
    )
}

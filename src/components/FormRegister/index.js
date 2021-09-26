import React from 'react'
import { useState } from 'react';
import { Container, Background, Content, AnimationContainer } from "./styles";
import { TextField, Button, InputAdornment, MenuItem} from "@material-ui/core";
import { Link } from "react-router-dom";
import { MdViewModule } from "react-icons/md";
import {AiOutlineMail} from 'react-icons/ai'
import { RiLockPasswordLine } from "react-icons/ri"
import { BiOutline } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { GrContactInfo } from "react-icons/gr";
import { useForm } from "react-hook-form"
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-toastify';
import { Redirect, useHistory } from 'react-router';
import axios from 'axios';

export default function FormRegister({authenticated}) {

    const schema = yup.object().shape({
      name: yup.string().matches('^[a-zA-Z ]*$', 'Nome com apenas letras').required('Nome obrigatório!'),
      email: yup.string().email('Formato de email inadequado').required('E-mail obrigatório!'),
      password: yup.string()
      .min(8, 'Senha com no mínimo 8 caracteres')
      .matches('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])', 'Necessário ter letras, números e ao menos um símbolo.')
      .required('Senha Obrigatória!'),
      bio:yup.string().required('Biografia obrigatório'),
      contact:yup.string().email('E-mail inválido').required('E-mail obrigatório'),
      course_module: yup.string().required('Módulo do curso obrigatório')
      
    })
    const {register, handleSubmit, formState: {errors}} = useForm({
      resolver: yupResolver(schema)
    })
    const history = useHistory()

    const handleForm = ({name,email,password,bio,course_module}) =>{
      
      const formData = {
          'email': email,
          'password':password,
          'name':name,
          'bio':bio,
          'contact':email,
          'course_module':course_module
      }
       axios.post('https://kenziehub.herokuapp.com/users', formData)
       .then((response)=>{
          toast.success('Sucesso ao criar a conta')
          return history.push('/login')
       })
       .catch((err)=>toast.error('Erro ao criar a conta'))
    }
    const modules = [
      {
        value:1,
        label:'Primeiro módulo (Introdução ao Frontend)'
      },
      {
        value:2,
        label:'Segundo módulo (Frontend Avançado)'
      },
      {
        value:3,
        label:'Terceiro módulo (Introdução ao Backend)'
      },
      {
        value:4,
        label:'Quarto módulo (Backend Avançado)'
      }
    ]
    const[course, setCourse] = useState('')
    const handleChange = (event)=>{
      setCourse(event.target.value)
    }
    

    if(authenticated){
      return <Redirect to="/dashboard"/>
    }
    return (
        <Container>
        <Background />
        <Content>
          <AnimationContainer>
            <form onSubmit={handleSubmit(handleForm)}>
              <h2>Cadastro</h2>
              <TextField
                label="Nome"
                id="outlined-basic"
                placeholder="seu nome completo"
                variant="outlined"
                margin="normal"
                InputProps={{
                    startAdornment:(
                        <InputAdornment>
                            <BsFillPersonFill size={20}/>
                        </InputAdornment>
                    )
                }}
                {...register('name')}
                error={!!errors.name}
                helperText={errors.name?.message}
              />

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
               <TextField
                id="outlined-basic"
                label="Biografia"
                placeholder="Bio"
                variant="outlined"
                margin="normal"
                InputProps={{
                    startAdornment:(
                        <InputAdornment>
                            <BiOutline size={20}/>
                        </InputAdornment>
                    )
                }}
                {...register('bio')}
                error={!!errors.bio}
                helperText={errors.bio?.message}
              />
              <TextField
                id="outlined-basic"
                label="Contato"
                placeholder="Seu contato"
                variant="outlined"
                margin="normal"
                InputProps={{
                    startAdornment:(
                        <InputAdornment>
                            <GrContactInfo size={20}/>
                        </InputAdornment>
                    )
                }}
                {...register('contact')}
                error={!!errors.contact}
                helperText={errors.contact?.message}
              />
                 <div>
                 <TextField
                      id="outlined-select-currency"
                      label="Módulo do curso"
                      style={{width:'230px'}}
                      select
                      value={course}
                      onChange={handleChange}
                      InputProps={{
                        startAdornment:(
                            <InputAdornment>
                                <MdViewModule size={20}/>
                            </InputAdornment>
                        )
                    }}
                      {...register('course_module')}
                      error={!!errors.course_module}
                      helperText={errors.course_module?.message}
                    >
                      {modules.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                  </TextField>
                 </div>

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
                Já tem conta?<Link to="/login">Faça seu login</Link>
              </p>
              </div>
            </form>
          </AnimationContainer>
        </Content>
      </Container>
    )
}

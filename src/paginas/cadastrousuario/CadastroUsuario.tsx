import React, { useState, useEffect, ChangeEvent } from 'react';
import { Grid, Typography, Button, TextField } from '@material-ui/core';
import User from '../../models/User';
import {cadastroUsuario} from '../../services/Service';
import {Link, useNavigate } from 'react-router-dom';
import {Box} from '@mui/material';
import './CadastroUsuario.css';

function CadastroUsuario(){

    let history = useNavigate();
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
    const[user, setUser] = useState<User>(
    {
        id : 0,
        nome: '',
        usuario: '',
        senha : '',
        foto: ''
    })

    const[userResult, setUserResult] = useState<User>(
        {
            id : 0,
            nome: '',
            usuario: '',
            senha : '' ,
            foto: ''
    })

    useEffect(()=>{
        if (userResult.id != 0){
            history('/login')
            console.log(userResult)
        }
    }, [userResult])

    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>){
        setConfirmarSenha(e.target.value)
    }

    function updateModel(e: ChangeEvent<HTMLInputElement>){
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit(e:ChangeEvent<HTMLFormElement>){
        e.preventDefault()
        if(confirmarSenha == user.senha){
            cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
            alert('Usuário cadastrado com sucesso')
        }else{
            alert('Dados inconsistentes. Favor verifiar as informações de cadastro!')
        }
    }

    return(
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} className='imagem2'>

            </Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10}>
                <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' align='center' className='textos2' >Cadastrar</Typography>

                        <TextField value={user.nome} onChange={(e:ChangeEvent<HTMLInputElement>)=> updateModel(e)} id='nome' label='nome' variant='outlined' name='nome' margin='normal' fullWidth />

                        <TextField value={user.usuario} onChange={(e:ChangeEvent<HTMLInputElement>)=> updateModel(e)} id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal' fullWidth />

                        <TextField value={user.senha} onChange={(e:ChangeEvent<HTMLInputElement>)=> updateModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' fullWidth type='password' />

                        <TextField value={confirmarSenha} onChange={(e:ChangeEvent<HTMLInputElement>)=> confirmarSenhaHandle(e)} id='confirmarSenha' label='confirmarSenha' variant='outlined' name='confirmarSenha' margin='normal' fullWidth type='password'/>

                        <Box marginTop={2} textAlign='center' >
                            <Link to='/login' className='text-decorator-none'>
                                <Button variant='contained' color='secondary' className='btnCancelar'>
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type='submit' variant='contained' color='primary'>
                                    Cadastrar
                                </Button>
                        </Box>
                    </form>
                </Box>

            </Grid>


        </Grid>
    );
}

export default CadastroUsuario;
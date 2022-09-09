import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import {Link} from 'react-router-dom'
import './Navbar.css'
import {Box} from "@mui/material"
import {useNavigate} from 'react-router-dom';
import LogoImg from '../../../imagens/titulo.png'
import { TokenClass } from 'typescript';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';



function Navbar(){

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    const dispatch = useDispatch();

    let history = useNavigate();

    function goLogout(){
        dispatch(addToken(''))
        alert("Usuário deslogado!")
        history("/login")
    }

    var navbarComponent;

    if(token != ""){
        navbarComponent = <AppBar position="static" className='navbar'>
        <Toolbar variant="dense">
            <Box className='cursor' >
                <Typography variant="h5" color="inherit">
                    <div className="logo-img"><img src={LogoImg} alt="" height='50px'/></div>
                </Typography>
            </Box>

            <Box display="flex" justifyContent="start">
                <Link to="/home" className='text-decorator-none'>
                <Box mx={1} className='cursor'>
                    <Typography variant="h6" color="inherit">
                        home
                    </Typography>
                </Box>
                </Link>
                <Link to="/posts" className='text-decorator-none'>
                <Box mx={1} className='cursor'>
                    <Typography variant="h6" color="inherit">
                        postagens
                    </Typography>
                </Box>
                </Link>
                <Link to="/temas" className='text-decorator-none'>
                <Box mx={1} className='cursor'>
                    <Typography variant="h6" color="inherit">
                        temas
                    </Typography>
                </Box>
                </Link>
                <Link to="/formularioTema" className='text-decorator-none'>
                <Box mx={1} className='cursor'>
                    <Typography variant="h6" color="inherit">
                        cadastrar tema
                    </Typography>
                </Box>
                </Link>
               
                <Box mx={1} className='cursor' onClick={goLogout}>
                    <Typography variant="h6" color="inherit">
                        logout
                    </Typography>
                </Box>
               
                
            </Box>

        </Toolbar>
    </AppBar>
    }

    return(
        <>
           {navbarComponent}  
        </>
    )
}

export default Navbar;
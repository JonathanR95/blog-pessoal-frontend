import React, { useEffect } from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import {Box} from "@mui/material";
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem'
import './Home.css';
import ModalPostagem from '../../components/postagens/modalpost/ModalPostagem';
import { Link, useNavigate } from 'react-router-dom';
import LogoImg from '../../imagens/logo-touro-invest.png';
import LogoTitulo from '../../imagens/titulo.png';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';



function Home(){

    let history = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    )
    
    useEffect(() => {
      if (token == "") {
        toast.error('Você precisa estar logado!',{
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
            });
          history("/login")
  
      }
  }, [token])
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>Um blog para quem ama investimentos e programação!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem/>
                        </Box>
                        <Link to="/posts" className='text-decorator-none'>
                        <Button variant="outlined" className='botao'>
                            Ver Postagens
                            </Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <div className='imgTitulo'><img src={LogoTitulo} alt="" /></div>
                    <img src={LogoImg} alt=""  />
                    
                </Grid>
                <Grid xs={12} className='postagens'>
                    <TabPostagem/>
                </Grid>
            </Grid>       
        </>
    );
}

export default Home;
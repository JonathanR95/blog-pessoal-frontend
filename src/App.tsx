import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/static/navbar/Navbar';
import Footer from './components/static/footer/Footer';
import CadastroUsuario from './paginas/cadastrousuario/CadastroUsuario';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import './App.css';
import ListaTema from './components/temas/listatema/ListaTema';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import CadastroPost from './components/postagens/cadastropost/CadastroPost';
import CadastroTema from './components/temas/cadastrotema/CadastroTema';
import DeletarPostagem from './components/postagens/deletarpost/DeletarPost';
import DeletarTema from './components/temas/deletartema/DeletarTema';
import {Provider} from 'react-redux';
import store from './store/store';





function App() {
  return (
  <Provider store={store}>
  <Router>

    <Navbar />
    <div style={{ minHeight: '100vh' }}>
        <Routes> {/* Switch */}
        
       

          <Route path='/' element={<Login/>} />

          <Route path='/login' element={<Login/>} />

          <Route path='/home' element={<Home />} />

          <Route path='/cadastrousuario' element={<CadastroUsuario />} />
    
          <Route path='/temas' element={<ListaTema />} />

          <Route path='/posts' element={<ListaPostagem />} />

          <Route path="/formularioPost" element={<CadastroPost />} />

          <Route path="/formularioPost/:id" element={<CadastroPost />} />

          <Route path="/formularioTema" element={<CadastroTema />} />

          <Route path="/formularioTema/:id" element={<CadastroTema />} />

          <Route path="/deletarPost/:id" element={<DeletarPostagem />} />

          <Route path="/deletarTema/:id" element={<DeletarTema />} />


      </Routes>
      </div>
    <Footer />

  </Router>
  </Provider>
  );
};

export default App;

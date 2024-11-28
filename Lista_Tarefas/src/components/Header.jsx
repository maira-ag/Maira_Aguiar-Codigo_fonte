import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
      <nav>
        <div className='botao_nav'>
          <Link className='link_telas' id='tela_cadastro_usuario' to="/">Cadastro de Usuário</Link>
        </div>

        <div className='botao_nav'>
          <Link className='link_telas' id='tela_cadastro_tarefas' to="/cadastro-tarefas">Cadastro de Tarefas</Link>
        </div>
        
        <div className='botao_nav'>
           <Link className='link_telas' id='tela_gerenciamento' to="/gerenciamento-tarefas">Gerenciamento de Tarefas</Link>
        </div>
       
      </nav>
    </header>
  );
};

export default Header;

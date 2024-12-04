import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CadastroUsuario from './pages/CadastroUsuario';
import CadastroTarefas from './pages/CadastroTarefa';
import GerenciamentoTarefas from './pages/GerenciamentoTarefas';
import Home from './pages/Home'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro-usuario" element={<CadastroUsuario />} />
        <Route path="/cadastro-tarefas" element={<CadastroTarefas />} />
        <Route path="/gerenciamento-tarefas" element={<GerenciamentoTarefas />} />
      </Routes>
    </Router>
  );
};

export default App;

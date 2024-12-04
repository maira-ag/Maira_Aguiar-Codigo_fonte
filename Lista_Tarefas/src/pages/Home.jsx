import React from 'react';
import Header from '../components/Header';
import './styles/home.css';

const Home = () => {
  return (
    <div className="home-container">
      <Header title="TaskHub" />
      <div className="home-content">
        <h1>Gerencie suas tarefas com o TaskHub</h1>
        <p>
          TaskHub é um sistema simples de gerenciamento de tarefas que utiliza o armazenamento local
          do navegador para salvar os dados.
        </p>
        <p>
          É um site simples que foi criado no processo de estudo de desenvolvimento Web focado em Front-end.
        </p>
        <div className="illustration">
          <img src="/path/to/illustration.svg" alt="Ilustração representando organização" />
        </div>
      </div>
    </div>
  );
};

export default Home;

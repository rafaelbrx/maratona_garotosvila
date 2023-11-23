import React from 'react'; //importa framework react
import { Link } from 'react-router-dom'; //importa Link do router-dom
import './Top.css'; //importa css para estilizar

const Top = () => {
  //tópicos clicáveis para redirecionar para as páginas 
  return (
    <div className="top-navbar">
      <Link to="/sobre">Sobre</Link>
      <Link to="/apresentacoes">Apresentações</Link>
      <Link to="/matriculas">Matrículas</Link>
      <Link to="/doacoes">Doações</Link>
      <Link to="/consulta">Consulta</Link>
    </div>
  );
};

export default Top;

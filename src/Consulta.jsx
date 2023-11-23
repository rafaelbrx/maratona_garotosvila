import React, { useState } from 'react';
import './Consulta.css';

const Consulta = () => {
  const [nomePesquisa, setNomePesquisa] = useState('');
  const [resultadoConsulta, setResultadoConsulta] = useState(null);
  const [mostrarPopup, setMostrarPopup] = useState(false);

const handlePesquisa = () => {
  const matriculasBanco = JSON.parse(localStorage.getItem('matriculas')) || [];
  console.log('Matrículas no banco:', matriculasBanco);

  const resultado = matriculasBanco.find(
    (matricula) => matricula.nomeAluno === nomePesquisa
  );
  console.log('Resultado da pesquisa:', resultado);

  if (resultado) {
    setResultadoConsulta(resultado);
    setMostrarPopup(true);
  } else {
    alert('Nenhum resultado encontrado.');
    setResultadoConsulta(null);
    setMostrarPopup(false);
  }
};

  const fecharPopup = () => {
    setMostrarPopup(false);
  };

  return (
    <div className="consulta-container">
      <h2>Consultar Matrícula</h2>
      <div className="input-group">
        <label htmlFor="nomePesquisa">Nome do Aluno:</label>
        <input
          type="text"
          id="nomePesquisa"
          value={nomePesquisa}
          onChange={(e) => setNomePesquisa(e.target.value)}
        />
      </div>
      <button onClick={handlePesquisa}>Pesquisar</button>

      {mostrarPopup && resultadoConsulta && (
        <div className="popup">
          <button onClick={fecharPopup}>&times;</button>
          <h3>Situação Cadastral</h3>
          <p>ID: {resultadoConsulta.id}</p>
          <p>Nome do Aluno: {resultadoConsulta.nomeAluno}</p>
          <p>Curso: {resultadoConsulta.curso}</p>
        </div>
      )}
    </div>
  );
};

export default Consulta;
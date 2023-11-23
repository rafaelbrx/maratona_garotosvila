import React, { useState } from 'react'; //importa framework e usestate do react
import './Consulta.css'; //importa css para estilizar

const Consulta = () => {
  const [nomePesquisa, setNomePesquisa] = useState('');                //estrutura pesquisa
  const [resultadoConsulta, setResultadoConsulta] = useState(null);

  const handlePesquisa = () => {
    const matriculasBanco = JSON.parse(localStorage.getItem('matriculas')) || [];     //recebe item do localstorage

    //verifica se tem resultado igual ao pesquisado
    const resultado = matriculasBanco.find(
      (matricula) => matricula.nomeAluno === nomePesquisa    
    );

    if (resultado) {
      setResultadoConsulta(resultado);
    } else {
      alert('Nenhum resultado encontrado.');
      setResultadoConsulta(null);
    }
  };

  return (
    <div className="consulta-container"> {/*bloco da consulta */}
      <h2>Consultar Matrícula</h2>                
      <div className="input-group">              
        <label htmlFor="nomePesquisa">Nome do Aluno:</label>        
        <input
          type="text"
          id="nomePesquisa"
          value={nomePesquisa}
          onChange={(e) => setNomePesquisa(e.target.value)}     
        />
        {/*armazena pesquisa na variavel pra conferir*/}
      </div>
      <button onClick={handlePesquisa}>Pesquisar</button>

      {/*se pesquisa tiver no localstorage mostra card com resultados correspondentes */}
      {resultadoConsulta ? (
        <div className="resultado">
          <h3>Situação Cadastral</h3>
          <p>ID: {resultadoConsulta.id}</p>
          <p>Nome do Aluno: {resultadoConsulta.nomeAluno}</p>
          <p>Curso: {resultadoConsulta.curso}</p>
        </div>
      ) : null}
    </div>
  );
};

export default Consulta;